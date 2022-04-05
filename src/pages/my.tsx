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
        // router.push("/login");
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
