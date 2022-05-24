import { GetStaticProps } from "next";
import api from "./api";

export const ClubTypeStaticProps =
  (type: "MAJOR" | "EDITORIAL" | "FREEDOM"): GetStaticProps =>
  async () => {
    try {
      const { data } = await api.get(`/club/list?type=${type}`, {
        withCredentials: false,
      });

      console.log(data);

      return {
        props: {
          clubs: data,
        },
        revalidate: 60 * 10,
      };
    } catch (e) {
      return {
        props: {},
      };
    }
  };
