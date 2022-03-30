import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import ProfilePage from "../../components/ProfilePage";
import { remote } from "../../lib/api";

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    // const { data } = await remote.get("/user/my");
    return {
      props: {},
    };
  } catch (e) {
    return {
      props: {},
      redirect: {
        destination: "/login",
      },
    };
  }
};

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
