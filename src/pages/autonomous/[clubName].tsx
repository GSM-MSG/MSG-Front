import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import InfoPage from "../../components/InfoPage";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { clubName } = context.query;
  return {
    props: {},
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
