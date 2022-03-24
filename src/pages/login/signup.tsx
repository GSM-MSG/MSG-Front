/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import SignPage from "../../components/SignPage";
import api from "../../lib/api";

export default function Signup() {
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

  return <SignPage type="signup" />;
}
