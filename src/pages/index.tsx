import type { NextPage } from "next";
import LoginPage from "../components/LoginPage";
import { signOut, useSession } from "next-auth/react";
import MainPage from "../components/MainPage";

const Home: NextPage = () => {
  const { data } = useSession();

  return <>{data?.user?.name ? <MainPage /> : <LoginPage />}</>;
};

export default Home;
