import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 4rem 0 4rem;
`;

export const Img = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  cursor: pointer;
`;

export const CoverImg = styled.div`
  position: relative;
  background: rgba(225, 225, 225, 0.8);
  height: 400px;
  width: 100%;
  cursor: pointer;
`;

export const CoverImgInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #646464;

  h2 {
    margin-bottom: 0;
  }

  h4 {
    margin: 0;
  }
`;

export const Contents = styled.div`
  padding: 5rem 10rem;
  display: flex;

  @media (max-width: 1225px) {
    flex-wrap: wrap;
    gap: 5rem;
    padding: 5rem 2rem;
    justify-content: center;
  }
`;

export const Article = styled.div`
  width: 100%;
  gap: 5rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 1225px) {
    width: auto;
  }
`;

export const Optional = styled.span`
  color: #646464;
  margin: 0;
  font-size: 1rem;
`;

export const NameInput = styled.input`
  border: 2px solid #fff;
  padding: 0.7rem 1.5rem;
  background: none;
  outline: none;
  font-size: 1rem;
  width: 25rem;
  border-radius: 10px;
  color: #fff;
  font-family: inherit;
`;

export const UserList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const UserImg = styled.img`
  border-radius: 100%;
  width: 7rem;
  height: 7rem;
`;

export const UserName = styled.p`
  font-size: 1.1rem;
`;

export const Circle = styled.div`
  border-radius: 100%;
  border: 5px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 7rem;
`;

export const ClubIntroduce = styled.textarea`
  width: 25rem;
  padding: 0.7rem 1.5rem;
  background: none;
  color: #fff;
  font-size: 1rem;
  font-family: inherit;
  resize: none;
  outline: none;
  border: 3px solid #fff;
  border-radius: 10px;
  height: 10rem;
`;

export const GrayBg = styled.div`
  background: #c4c4c4;
  width: 10rem;
  height: 10rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    p {
      margin-bottom: 0;
      color: #00a8fe;
    }
  }
`;

export const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const IntroImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 10px;
`;

export const ContactKind = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Contact = styled.div`
  display: flex;
  justify-content: right;
  gap: 0.5rem;
  align-items: center;
`;

export const ContactInput = styled.input`
  width: 15rem;
  border: none;
  border-bottom: 2px solid #fff;
  outline: none;
  background: none;
  color: #fff;
  font-size: 1.2rem;
  font-family: inherit;
  text-align: center;
`;

export const Kind = styled.div``;

interface KindOptionI {
  active?: boolean;
  right?: boolean;
  left?: boolean;
}

export const KindOption = styled.button`
  outline: none;
  border: none;
  padding: 0.8rem 2rem;
  cursor: pointer;
  background: #a3a3a3;
  color: #8c8a8a;
  font-size: 1.2rem;
  font-family: inherit;
  font-weight: bold;

  ${({ active }: KindOptionI) =>
    active && "background: #f4f4f4; color: #1c1c1e;"}

  ${({ right }: KindOptionI) =>
    right &&
    "border-top-right-radius: 0.5rem; border-bottom-right-radius: 0.5rem;"}
  ${({ left }: KindOptionI) =>
    left &&
    "border-top-left-radius: 0.5rem; border-bottom-left-radius: 0.5rem;"}
`;

export const PromotionLink = styled.form`
  display: flex;
  gap: 2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const LinkNameInput = styled.input`
  width: 11rem;
  border-radius: 0.7rem;
  padding: 1rem;
  outline: none;
  border: none;
  font-size: 1rem;
  font-family: inherit;

  ::placeholder {
    color: #bdbdbd;
  }
`;

export const LinkInput = styled.input`
  width: 20rem;
  border-radius: 0.7rem;
  padding: 1rem;
  outline: none;
  border: none;
  font-size: 1rem;
  font-family: inherit;

  ::placeholder {
    color: #bdbdbd;
  }
`;

export const SubmitButton = styled.button`
  width: 80%;
  max-width: 30rem;
  padding: 0.7rem 0;
  border: none;
  outline: none;
  border-radius: 1.5rem;
  font-size: 1.3rem;
  font-weight: bold;
  background: #4c53ff;
  color: #fff;
  box-shadow: -2px 10px 10px rgba(76, 83, 255, 0.3);
  cursor: pointer;
`;
