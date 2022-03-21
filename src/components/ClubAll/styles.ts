import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 10rem auto 0;
  width: 1386px;

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

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin-bottom: 2rem;
`;

export const Tag = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;

  ${(props: { active?: boolean }) =>
    props.active ? "background: #5169e8;" : "cursor: pointer; cusour"}
`;

export const Hr = styled.hr`
  border: solid 1px #949494;
`;
