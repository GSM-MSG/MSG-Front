import axios from "axios";
import { ServerUrl } from "../config/config";

interface ApiType {
  query: string;
  method: "get" | "post" | "head" | "put" | "delete";
  body?: any;
  refresh?: boolean;
  access?: boolean;
}

interface RefreshReturnType {
  data: { accessToken: string; refreshToken: string; expiredAt: string };
}

export const remote = axios.create({
  baseURL: ServerUrl,
});

export const api = async ({
  query,
  method,
  body,
  refresh,
  access,
}: ApiType) => {
  if (!access) {
    const date = new Date(localStorage.getItem("expiredAt") || "");
    if (date <= new Date()) {
      const token = localStorage.getItem("msgRefresh");
      const { data }: RefreshReturnType = await remote.post(
        `${ServerUrl}/auth/refresh`,
        {},
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );

      localStorage.setItem("msgAccess", data.accessToken);
      localStorage.setItem("msgRefresh", data.refreshToken);
      localStorage.setItem("expiredAt", data.expiredAt);
    }
  }

  let token;
  if (refresh) token = localStorage.getItem("msgRefresh");
  else token = localStorage.getItem("msgAccess");

  let data;

  switch (method) {
    case "get":
    case "head":
      data = await remote[method](query, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      break;
    case "post":
    case "delete":
    case "put":
      data = await remote[method](query, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  }

  return data;
};

export default api;
