<<<<<<< HEAD
/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProfilePage from "../components/ProfilePage";
import api from "../lib/api";
import Loading from "../components/Loading";
import { MyPageType } from "../types";

export default function MyProfile() {
  const router = useRouter();
  const [user, setUser] = useState<MyPageType>();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api({ query: "/user/my", method: "get" });
        setUser(data);
      } catch (e) {
        router.push("/login");
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      {user ? <ProfilePage user={user} username="Teemo" /> : <Loading />}
    </>
  );
}
=======
import Header from "../components/Header";
import ProfilePage from "../components/ProfilePage";
import api from "../lib/api";
import { MyPageType } from "../types";
import { GetServerSideProps, NextPage } from "next";
import userCheck from "../lib/userCheck";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
>>>>>>> d3d64d895a9211ab8d7046f521ec7cc3fd43d1a6
