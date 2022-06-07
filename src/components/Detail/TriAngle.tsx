import * as S from "./styles";

export function Excomponent({
  Triheight,
  Triturn,
  NameLogo,
  Ex,
  BoxTop,
  BoxLeft,
  BoxBottom,
  BoxRight,
  ExTop,
  ExLeft,
  ExPosition,
}: {
  Triheight: number;
  Triturn: number;
  NameLogo: string;
  Ex: string;
  BoxTop?: number;
  BoxLeft?: number;
  BoxBottom?: number;
  BoxRight?: number;
  ExTop: number;
  ExLeft: number;
  ExPosition?: boolean;
}) {
  return (
    <S.ExBox
      BoxTop={BoxTop}
      BoxLeft={BoxLeft}
      BoxBottom={BoxBottom}
      BoxRight={BoxRight}
      ExTop={ExTop}
      ExLeft={ExLeft}
      ExPosition={ExPosition}
    >
      <S.Triangle Triheight={Triheight} Triturn={Triturn} />
      <div>
        <p>{NameLogo}</p>
        <p>{Ex}</p>
      </div>
    </S.ExBox>
  );
}
