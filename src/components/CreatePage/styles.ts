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
`;

//-------------------LeftForm--------------------

export const LeftFormWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5rem;
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
  padding: 1rem 0.7rem;
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
  padding: 1rem 0.7rem;
  border: none;
`;
