<<<<<<< HEAD
import { NextPage } from "next";
import CreatePage from "../components/CreatePage";
import Header from "../components/Header";
=======
import { GetServerSideProps, NextPage } from "next";
import CreatePage from "../components/CreatePage";
import Header from "../components/Header";
import userCheck from "../lib/userCheck";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { cookies } = await userCheck(ctx);

    if (cookies) {
      ctx.res.setHeader("set-cookie", cookies);
    }

    return {
      props: {},
    };
  } catch (e) {
    return { props: {}, redirect: { destination: "/login" } };
  }
};
>>>>>>> d3d64d895a9211ab8d7046f521ec7cc3fd43d1a6

const create: NextPage = () => {
  return (
    <>
      <Header />
      <CreatePage />
    </>
  );
};

export default create;
