import CardList from "../../components/CardList";
import Header from "../../components/Header";
import { GetStaticPaths, GetStaticProps } from "next";
import api from "../../lib/api";
import { Club } from "../../types/Clubs";

export const getStaticProps: GetStaticProps = async () => {
  const { data }: { data: Club[] } = await api.get("/list?type=MAJOR");

  return {
    props: {
      clubs: data,
    },
    revalidate: 60 * 60,
  };
};

interface MajorListProps {
  clubs: Club[];
}

export default function MajorList({ clubs }: MajorListProps) {
  return (
    <>
      <Header />
      <CardList kind="major" title="전공 동아리" />
    </>
  );
}
