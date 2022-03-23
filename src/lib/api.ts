import axios, { AxiosError } from "axios";
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

export const api = async ({
  query,
  method,
  body,
  refresh,
  access,
}: ApiType) => {
  const remote = axios.create({
    baseURL: ServerUrl,
  });

  try {
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

    const { data } = await remote[method](query, body, {
      headers: { Authorization: token ? `Bearer ${token}` : "" },
    });

    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};

export default api;
