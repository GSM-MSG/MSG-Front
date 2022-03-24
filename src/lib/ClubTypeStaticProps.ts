import { GetStaticProps } from "next";
import api, { remote } from "./api";

export const ClubTypeStaticProps =
  (type: "MAJOR" | "EDITORIAL" | "FREEDOM"): GetStaticProps =>
  async () => {
    try {
      const data = await remote.get(`/club/list?type=${type}`);

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
