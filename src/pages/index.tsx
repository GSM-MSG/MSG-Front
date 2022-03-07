import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import MainPage from "../components/MainPage";
import { user_create } from "../modules/user";

const Home: NextPage = () => {
  const { data } = useSession();
  const dispatch = useDispatch();

  if (data?.user) dispatch(user_create(data.user));

  return <MainPage />;
};

export default Home;
