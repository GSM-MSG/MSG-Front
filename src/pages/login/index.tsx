import { GetServerSideProps } from "next";
import LoginPage from "../../components/LoginPage";
import api from "../../lib/api";

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const a = await api({ query: "/check", method: "get", access: true });
    return {
      props: {},
      redirect: {
        destination: "/",
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default function login() {
  return <LoginPage />;
}
