import { useRouter } from "next/router";
import Header from "../../components/Header";
import InfoPage from "../../components/InfoPage";
import { GetStaticPaths, GetStaticProps } from "next";
import api from "../../lib/api";
import { Club } from "../../types/Clubs";

export const getStaticProps: GetStaticProps = async (context) => {
  const { data }: { data: Club } = await api.get(
    `/club/detailPage/:id${context.params}`
  );

  return {
    props: {
      club: data,
    },
    revalidate: 60 * 60,
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const { data }: { data: Club[] } = await api.get(`/백엔드 어딘가로`);

  const paths: string[] = [];

  data.forEach((i) => paths.push(i.name));

  return {
    paths,
    fallback: false,
  };
};

export default function ClubInfo() {
  const router = useRouter();
  const { clubName } = router.query;
  return (
    <>
      <Header />
      <InfoPage clubName={clubName as string} />
    </>
  );
}
