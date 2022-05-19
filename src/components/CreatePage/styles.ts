import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 4rem;
`;

export const BannerImg = styled.div`
  width: 100%;
  height: 400px;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Comment = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #646464;
  text-align: center;
  margin-bottom: 0;
`;

export const Description = styled.div`
  color: #646464;
`;

export const Forms = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5rem 5rem 0;
  gap: 2rem;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    padding: 5rem 2rem 0;
  }
`;

export const ButtonCenter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
`;

export const SubmitButton = styled.button`
  height: 3.5rem;
  max-width: 30rem;
  width: 80%;
  background: #4c53ff;
  border: none;
  border-radius: 1rem;
  outline: none;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: inherit;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(76, 83, 255, 50%);
`;

//-------------------LeftForm--------------------

export const LeftFormWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const SubTitle = styled.h2``;

export const Choice = styled.span`
  color: #646464;
  margin-left: 0.7rem;
  font-size: 1rem;
`;

export const TitleInput = styled.input`
  background: none;
  border: #fff solid 0.2rem;
  border-radius: 0.5rem;
  padding: 0.7rem 1rem;
  color: #fff;
  font-size: 1.2rem;
  font-family: inherit;
  outline: none;
  max-width: 25rem;
  width: 90%;
`;

export const Users = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`;

export const UserBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    width: 7rem;
    height: 7rem;
  }
`;

export const UserImg = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 100%;
  object-fit: cover;
`;

export const Textarea = styled.textarea`
  resize: none;
  max-width: 25rem;
  width: 90%;
  height: 10rem;
  background: none;
  border-radius: 0.5rem;
  border: 1px solid #fff;
  color: #fff;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  padding: 1rem;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const LinkTitle = styled.input`
  width: 10rem;
  height: 3.5rem;
  background: #fff;
  border-radius: 0.5rem;
  outline: none;
  font-size: 1rem;
  font-family: inherit;
  padding: 0.7rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border: none;
  box-sizing: border-box;

  ::placeholder {
    font-size: 0.9rem;
  }
`;

export const Link = styled.input`
  max-width: 30rem;
  width: 90%;
  height: 3.5rem;
  background: #fff;
  border-radius: 0.5rem;
  outline: none;
  font-size: 1rem;
  font-family: inherit;
  padding: 0.7rem;
  border: none;
`;

//------------------RightPage-------------------

export const RightFormWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Imgs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Img = styled.img`
  border-radius: 1rem;
  width: 10rem;
  height: 10rem;
  object-fit: cover;
`;

export const ImgAddBox = styled.div`
  background: #c4c4c4;
  width: 10rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  flex-direction: column;
  cursor: pointer;
`;

export const ImgAddComment = styled.p`
  color: #00a8fe;
  margin-bottom: 0;
`;

interface ClubButtonProps {
  active: boolean;
  position?: "left" | "right";
}

export const ClubButton = styled.button<ClubButtonProps>`
  border: none;
  ${(props) =>
    props.position &&
    `
    border-top-${props.position}-radius: 0.5rem;
    border-bottom-${props.position}-radius: 0.5rem;
    `}
  background: #A3A3A3;
  color: #8c8a8a;

  ${(props) =>
    props.active &&
    `
    background: #F4F4F4;
    color: #1C1C1E;
    `}
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: 0.2s;
`;

export const InfoInput = styled.input`
  border: none;
  outline: none;
  padding: 1rem;
  width: 80%;
  max-width: 20rem;
  font-size: 1rem;
  border-radius: 0.5rem;

  ::placeholder {
    text-align: center;
  }
`;
