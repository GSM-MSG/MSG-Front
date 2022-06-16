<<<<<<< HEAD
import ClubAll from "../../components/ClubAll";
import Header from "../../components/Header";
import { ClubTypeStaticProps } from "../../lib/ClubTypeStaticProps";
import { Club } from "../../types/Clubs";

export const getStaticProps = ClubTypeStaticProps("FREEDOM");
=======
import { GetServerSideProps, NextPage } from "next";
import ClubAll from "../../components/ClubAll";
import Header from "../../components/Header";
import api from "../../lib/api";
import userCheck from "../../lib/userCheck";
import { Club } from "../../types/Clubs";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { cookies, accessToken } = await userCheck(ctx);

    const { data } = await api.get(`/club/web/list?type=FREEDOM`, {
      headers: { cookie: `accessToken=${accessToken}` },
    });

    if (cookies) ctx.res.setHeader("set-cookie", cookies);

    return {
      props: {
        clubs: data,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {},
      redirect: {
        destination: "/login",
      },
    };
  }
};
>>>>>>> d3d64d895a9211ab8d7046f521ec7cc3fd43d1a6

interface FreedomListProps {
  clubs: Club[];
}

<<<<<<< HEAD
export default function FreedomList({ clubs }: FreedomListProps) {
=======
const FreedomList: NextPage<FreedomListProps> = ({ clubs }) => {
>>>>>>> d3d64d895a9211ab8d7046f521ec7cc3fd43d1a6
  return (
    <>
      <Header />
      <ClubAll clubs={clubs} type="freedom" />
    </>
  );
<<<<<<< HEAD
}
=======
};

export default FreedomList;
>>>>>>> d3d64d895a9211ab8d7046f521ec7cc3fd43d1a6
