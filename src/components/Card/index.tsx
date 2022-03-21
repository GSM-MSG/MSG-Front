/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import * as S from "./styles";
import { motion } from "framer-motion";

interface CardProps {
  link: string;
  width?: number;
}

export default function Card({ link }: CardProps) {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Link href={link}>
        <S.Wrapper>
          <S.Picture />
          <S.Name>라이엇</S.Name>
        </S.Wrapper>
      </Link>
    </motion.div>
  );
}
