import ClubAll from "../../components/ClubAll";
import Header from "../../components/Header";
import { ClubTypeStaticProps } from "../../lib/ClubTypeStaticProps";
import { Club } from "../../types/Clubs";

export const getStaticProps = ClubTypeStaticProps("MAJOR");

interface MajorListProps {
  clubs: Club[];
}

export default function MajorList({ clubs }: MajorListProps) {
  return (
    <>
      <Header />
      <ClubAll clubs={clubs} type="major" />
    </>
  );
}
