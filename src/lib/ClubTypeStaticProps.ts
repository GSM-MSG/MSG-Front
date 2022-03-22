import { GetStaticProps } from "next";
import api from "./api";

export const ClubTypeStaticProps =
  (type: "MAJOR" | "EDITORIAL" | "FREEDOM"): GetStaticProps =>
  async () => {
    try {
      const data = await api({
        query: `/club/list?type=${type}`,
        method: "get",
      });

      return {
        props: {
          clubs: data,
        },
        revalidate: 60 * 10,
      };
    } catch (e) {
      return {
        props: {},
        // redirect: {
        //   destination: "/login",
        // },
        revalidate: 60 * 10,
      };
    }
  };
