<<<<<<< HEAD
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
          query: `/club/detail?q=${clubName}&type=FREEDOM`,
          method: "get",
        });
        setClubData(data);
      } catch (e) {
        router.push("/login");
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
=======
import Header from "../../../components/Header";
import InfoPage from "../../../components/InfoPage";
import api from "../../../lib/api";
import userCheck from "../../../lib/userCheck";
import { GetServerSideProps, NextPage } from "next";
import { ClubDetail } from "../../../types/ClubDetail";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { clubName } = ctx.query;

    const { cookies, accessToken } = await userCheck(ctx);

    const { data } = await api.get(
      `/club/web/detail?type=FREEDOM&q=${encodeURI(clubName as string)}`,
      {
        headers: { cookie: `accessToken=${accessToken}` },
      }
    );

    if (cookies) ctx.res.setHeader("set-cookie", cookies);

    return { props: { clubData: data } };
  } catch (e: any) {
    if (e.response.status === 402)
      return {
        props: {},
        redirect: { destination: "/login" },
      };

    return {
      props: {},
      redirect: { destination: "/" },
    };
  }
};

interface ClubInfo {
  clubData: ClubDetail;
}

const ClubInfo: NextPage<ClubInfo> = ({ clubData }) => {
  return (
    <>
      <Header />
      <InfoPage clubData={clubData} />
    </>
  );
};

export default ClubInfo;
>>>>>>> d3d64d895a9211ab8d7046f521ec7cc3fd43d1a6
