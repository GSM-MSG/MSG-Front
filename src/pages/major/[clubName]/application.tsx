import { GetServerSideProps, NextPage } from "next";
import Users from "../../../components/Users";
import api from "../../../lib/api";
import userCheck from "../../../lib/userCheck";
import { ApplicantsType } from "../../../types/ApplicantsType";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { cookies, accessToken } = await userCheck(ctx);

    const { clubName } = ctx.query;

    const { data } = await api.get(
      `/club/web/applicant?q=${encodeURI(clubName as string)}&type=MAJOR`,
      { headers: { cookie: `accessToken=${accessToken}` } }
    );

    if (cookies) {
      ctx.res.setHeader("set-cookie", cookies);
    }

    return { props: { users: data } };
  } catch (e) {
    return { props: {}, redirect: { destination: "/login" } };
  }
};

interface ApplicationProps {
  users: ApplicantsType[];
}

const Application: NextPage<ApplicationProps> = ({ users }) => {
  return <Users applications={users} page={false} type="MAJOR" />;
};

export default Application;
