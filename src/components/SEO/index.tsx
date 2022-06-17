import {NextPage} from "next"
import Head from "next/head";

interface HeaderProps {
  title: string;
  description?: string;
  img?: string;
}

const SEO: NextPage<HeaderProps> = ({title, description, img}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content={description ? description : "동아리 관리 서비스"}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_FRONT_URL} />
      <meta property="og:image" content={img ? img : ""} />
      <meta
        property="og:description"
        content={description ? description : "동아리 관리 서비스"}
      />
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:url" content={process.env.NEXT_PUBLIC_FRONT_URL} />
      <meta property="twitter:image" content={img ? img : ""} />
      <meta
        property="twitter:description"
        content={description ? description : "동아리 관리 서비스"}
      />
    </Head>
  );
}

export default SEO;
