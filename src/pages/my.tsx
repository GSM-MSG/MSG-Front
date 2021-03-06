import Header from "../components/Header";
import ProfilePage from "../components/ProfilePage";
import api from "../lib/api";
import { MyPageType } from "../types";
import { GetServerSideProps, NextPage } from "next";
import userCheck from "../lib/userCheck";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SEO from "../components/SEO";

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
      <SEO
        title={`GCMS | ${user.userData.name}`}
        description={`${user.userData.grade}학년 ${user.userData.class}반 ${user.userData.num}번`}
        img={user.userData.userImg}
      />
      <Header />
      <ProfilePage user={user} username={user.userData.name} />
      <ToastContainer
        position="top-right"
        theme="dark"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </>
  );
};

export default MyProfile;
