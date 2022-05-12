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

export const TitleInput = styled.input`
  background: none;
  border: #fff solid 0.2rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  color: #fff;
  font-size: 1.2rem;
  font-family: inherit;
  outline: none;
  max-width: 20rem;
  width: 90%;
`;
