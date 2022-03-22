/* eslint-disable react-hooks/exhaustive-deps */
import type { GetStaticProps, NextPage } from "next";
import ClubAll from "../components/ClubAll";
import { Club } from "../types/Clubs";
import { ClubTypeStaticProps } from "../lib/ClubTypeStaticProps";

export const getStaticProps = ClubTypeStaticProps("MAJOR");

interface MainProps {
  clubs: Club[];
}

const Home: NextPage<MainProps> = ({ clubs }) => {
  return <ClubAll clubs={clubs} type="major" />;
};

export default Home;
