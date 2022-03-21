import ClubAll from "../../components/ClubAll";
import Header from "../../components/Header";
import { ClubTypeStaticProps } from "../../lib/ClubTypeStaticProps";
import { Club } from "../../types/Clubs";

export const getStaticProps = ClubTypeStaticProps("FREEDOM");

interface FreedomListProps {
  clubs: Club[];
}

export default function FreedomList({ clubs }: FreedomListProps) {
  return (
    <>
      <Header />
      <ClubAll clubs={clubs} type="freedom" />
    </>
  );
}
