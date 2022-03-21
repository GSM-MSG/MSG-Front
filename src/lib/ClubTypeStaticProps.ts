import { GetStaticProps } from "next";
import api from "./api";

export const ClubTypeStaticProps =
  (type: "MAJOR" | "EDITORIAL" | "FREEDOM") => async () => {
    try {
      const { data } = await api.get(`/club?type=${type}`);
      return {
        props: {
          clubs: data,
        },
      };
    } catch (e) {
      return {
        props: {},
        // redirect: {
        //   destination: "/login",
        // },
      };
    }
  };
