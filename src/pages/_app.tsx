import "../styles/globals.css";
import type { AppProps } from "next/app";
import { motion } from "framer-motion";
import { Global } from "@emotion/react";
import { useEffect } from "react";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      key={router.pathname}
      initial="pageInit"
      animate="pageAnimation"
      variants={{
        pageInit: {
          opacity: 0,
        },
        pageAnimation: {
          opacity: 1,
        },
      }}
    >
      <Global
        styles={{
          body: {
            background: "#1e1e1c",
          },
        }}
      />
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
