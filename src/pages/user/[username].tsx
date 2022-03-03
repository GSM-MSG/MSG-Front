import { useRouter } from "next/router";
import Header from "../../components/Header";
import ProfilePage from "../../components/ProfilePage";

export default function Profile() {
  const router = useRouter();
  const { username } = router.query;
  return (
    <>
      <Header />
      <ProfilePage username={username as string} />
    </>
  );
}
