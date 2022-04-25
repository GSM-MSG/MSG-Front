/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import SignPage from "../../components/SignPage";
import api from "../../lib/api";

export default function Signin() {
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
      } catch (e) {
        if (localStorage.getItem("refreshToken"))
          localStorage.removeItem("refreshToken");
      }
    })();
  }, []);
  return <SignPage type="signin" />;
}
