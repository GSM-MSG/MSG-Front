import { useRouter } from "next/router";
import Header from "../../components/Header";
import InfoPage from "../../components/InfoPage";

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
