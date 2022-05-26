/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import InfoPage from "../../../components/InfoPage";
import api from "../../../lib/api";
import Loading from "../../../components/Loading";
import userCheck from "../../../lib/userCheck";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx.query);
  try {
    const { cookies, accessToken } = await userCheck(ctx);

    const { data } = await api.get("/club/web/detail?", {
      headers: { cookie: `accessToken=${accessToken}` },
    });

    if (cookies) ctx.res.setHeader("set-cookie", cookies);

    return { props: { clubData: data } };
  } catch (e) {
    return {
      props: {},
      redirect: { destination: "/login" },
    };
  }
};

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
