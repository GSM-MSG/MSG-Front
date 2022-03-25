/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/Header";
import RegisterPage from "../components/RegisterPage";
import api from "../lib/api";

export default function Register() {
  const router = useRouter();
  useEffect(() => {
    (async () => {
      try {
        await api({
          query: "/check",
          method: "get",
          refresh: true,
        });
      } catch (e) {
        router.push("/login");
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <RegisterPage />
    </>
  );
}
