import "../styles/globals.css";
import type { AppProps } from "next/app";
import wrapper from "../modules";
import { motion } from "framer-motion";

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
      <Component {...pageProps} />
    </motion.div>
  );
}

export default wrapper.withRedux(MyApp);
