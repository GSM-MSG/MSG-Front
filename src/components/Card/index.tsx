/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import * as S from "./styles";
import { motion } from "framer-motion";

interface CardProps {
  link: string;
  width?: number;
}

export default function Card({ link, width }: CardProps) {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Link href={link}>
        <S.Wrapper
          style={{
            width: `${width ? width : 20}rem`,
            minWidth: `${width ? width : 20}rem`,
          }}
        >
          <S.Picture />
          <S.Name>라이엇</S.Name>
        </S.Wrapper>
      </Link>
    </motion.div>
  );
}
