import CardList from "../../components/CardList";
import ClubAll from "../../components/ClubAll";
import Header from "../../components/Header";
import { ClubTypeStaticProps } from "../../lib/ClubTypeStaticProps";
import { Club } from "../../types/Clubs";

export const getStaticProps = ClubTypeStaticProps("EDITORIAL");

interface EditorialListProps {
  clubs: Club[];
}

export default function EditorialList({ clubs }: EditorialListProps) {
  return (
    <>
      <Header />
      <ClubAll clubs={clubs} type="editorial" />
    </>
  );
}
