/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import ClubAll from "../components/ClubAll";
import { Club } from "../types/Clubs";
import { ClubTypeStaticProps } from "../lib/ClubTypeStaticProps";
import { useEffect } from "react";
import api from "../lib/api";
import { useRouter } from "next/router";

export const getStaticProps = ClubTypeStaticProps("MAJOR");

interface MainProps {
  clubs: Club[];
}

const Home: NextPage<MainProps> = ({ clubs }) => {
  const router = useRouter();
  useEffect(() => {
    (async () => {
      try {
        await api({ query: "/check", method: "get", refresh: true });
      } catch (e) {
        router.push("/login");
      }
    })();
  }, []);
  return <ClubAll clubs={clubs} type="major" />;
};

export default Home;
