import { GetStaticProps } from "next";
import api from "./api";

export const ClubTypeStaticProps =
  (type: "MAJOR" | "EDITORIAL" | "FREEDOM"): GetStaticProps =>
  async () => {
    try {
      const { data } = await api.get(`/club?type=${type}`);
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
