import Header from "../components/Header";
import ProfilePage from "../components/ProfilePage";
import api from "../lib/api";
import { MyPageType } from "../types";
import { GetServerSideProps, NextPage } from "next";
import userCheck from "../lib/userCheck";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { cookies, accessToken } = await userCheck(ctx);

    const { data } = await api.get("/user/web/my", {
      headers: { cookie: `accessToken=${accessToken}` },
    });

    if (cookies) {
      ctx.res.setHeader("set-cookie", cookies);
    }

    return { props: { user: data } };
  } catch (e) {
    return {
      props: {},
      redirect: { destination: "/login" },
    };
  }
};

interface MyPageProps {
  user: MyPageType;
}

const MyProfile: NextPage<MyPageProps> = ({ user }) => {
  return (
    <>
      <Header />
      <ProfilePage user={user} username={user.userData.name} />
    </>
  );
};

export default MyProfile;
