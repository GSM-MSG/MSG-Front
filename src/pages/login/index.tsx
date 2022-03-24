/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect } from "react";
import LoginPage from "../../components/LoginPage";
import api from "../../lib/api";

export default function Login() {
  const router = useRouter();
  useEffect(() => {
    (async () => {
      try {
        await api({
          query: "/check",
          method: "get",
          refresh: true,
        });
        router.push("/");
      } catch (e) {}
    })();
  }, []);

  return <LoginPage />;
}
