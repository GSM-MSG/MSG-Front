/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import InfoPage from "../../../components/InfoPage";
import api from "../../../lib/api";
import Loading from "../../../components/Loading";

export default function ClubInfo() {
  const router = useRouter();
  const { clubName } = router.query;
  const [clubData, setClubData] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api({
          query: `/club/detail?q=${clubName}&type=EDITORIAL`,
          method: "get",
        });
        setClubData(data);
      } catch (e) {
        // router.push("/login");
      }
    })();
  }, []);

  return (
    <>
      <Header />
      {clubData ? <InfoPage clubName={clubName as string} /> : <Loading />}
    </>
  );
}
