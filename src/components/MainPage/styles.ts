import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 10rem auto 0;
  width: 1720px;

  @media (max-width: 1736px) {
    width: 1370px;
  }
  @media (max-width: 1386px) {
    width: 1020px;
  }
  @media (max-width: 1036px) {
    width: 670px;
  }
  @media (max-width: 686px) {
    width: 20rem;
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  margin-bottom: 10rem;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GroupInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const GroupName = styled.h3`
  color: #fff;
  margin-right: 10px;
`;

export const GroupAllNumber = styled.p`
  color: rgba(225, 225, 225, 0.67);
  font-weight: bold;
`;

export const AllViewLink = styled.a`
  text-decoration: none;
  color: #00a8fe;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
