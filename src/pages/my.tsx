/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProfilePage from "../components/ProfilePage";
import api from "../lib/api";

export default function MyProfile() {
  const router = useRouter();
  const [user, setUser] = useState<any>();

  useEffect(() => {
    try {
      (async () => {
        const { data } = await api({ query: "/user/my", method: "get" });
        setUser(data);
      })();
    } catch (e) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <Header />
      <ProfilePage username="Teemo" />
    </>
  );
}
