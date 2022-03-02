import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 20rem;
  min-width: 20rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Picture = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 20px;
  object-fit: cover;
`;

export const Name = styled.h3`
  width: 100%;
  border-radius: 10px;
  background: #5169e8;
  color: #fff;
  height: 17%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
