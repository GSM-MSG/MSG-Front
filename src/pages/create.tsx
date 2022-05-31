import { NextPage } from "next";
import CreatePage from "../components/CreatePage";
import Header from "../components/Header";

const create: NextPage = () => {
  return (
    <>
      <Header />
      <CreatePage />
    </>
  );
};

export default create;
