import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 4rem;
`;

export const CoverImg = styled.div`
  position: relative;
  background: rgba(225, 225, 225, 0.8);
  height: 200px;
  width: 100%;
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

export const Constents = styled.div`
  padding: 5rem 10rem;
  display: flex;
`;

export const Article = styled.div`
  width: 100%;
  gap: 5rem;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div``;

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
