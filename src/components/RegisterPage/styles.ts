import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 4rem 0 4rem;
`;

export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
`;

export const CoverImg = styled.div`
  position: relative;
  background: rgba(225, 225, 225, 0.8);
  height: 200px;
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
    padding: 5rem 0;
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

export const Contect = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const ContectInput = styled.input`
  width: 5rem;
  border: none;
  border-bottom: 2px solid #fff;
  outline: none;
  background: none;
  color: #fff;
  font-size: 1rem;
  font-family: inherit;
  text-align: center;
`;

export const SelectWrapper = styled.div`
  width: 20rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: #d2d2d2;
  position: relative;

  ::after {
    content: "\\25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 0.7rem;
    height: 100%;
    display: flex;
    align-items: center;
    background: #646464;
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
    pointer-events: none;
  }
`;

export const SelectKind = styled.select`
  font-size: 1rem;
  padding: 0 1rem;
  outline: none;
  font-family: inherit;
  height: 100%;
  width: 100%;
  background: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  border: none;
  color: #646464;
  cursor: pointer;

  option[value="hide"] {
    display: none;
  }

  option:not([value="hide"]) {
    background: #d2d2d2;
    color: #000;
    font-weight: bold;
    text-align: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
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
