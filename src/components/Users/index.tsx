/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../../lib/api";
import { UserType } from "../../types";

export default function Users() {
  const router = useRouter();
  const [users, setUsers] = useState<UserType[]>();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api({ query: "/club/members", method: "get" });
        setUsers(data);
      } catch (e: any) {
        if (e.response.data.status === 406) router.back();
        else router.push("/login");
      }
    })();
  }, []);

  return <div>indexl</div>;
}
