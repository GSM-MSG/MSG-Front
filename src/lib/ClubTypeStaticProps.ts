<<<<<<< HEAD
import { GetStaticProps } from "next";
import api from "./api";

export const ClubTypeStaticProps =
  (type: "MAJOR" | "EDITORIAL" | "FREEDOM"): GetStaticProps =>
  async () => {
    try {
      const { data } = await api.get(`/club/list?type=${type}`, {
        withCredentials: false,
=======
import api from "./api";

export const ClubTypeStaticProps =
  (type: "MAJOR" | "EDITORIAL" | "FREEDOM") => async () => {
    try {
      const { data } = await api.get(`/club/list?type=${type}`, {
        withCredentials: true,
>>>>>>> d3d64d895a9211ab8d7046f521ec7cc3fd43d1a6
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
