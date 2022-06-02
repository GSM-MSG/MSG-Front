import styled from "@emotion/styled";

type StlyedProps = {
  state: string;
};

type FilterProps = {
  filter: string;
};

export const AfterSchoolBox = styled.div<FilterProps>`
  background-color: #1e1e1c;
  animation: fadeInDown 1s;
  animation: ${(props) => {
    return props.filter === "true" ? "fadeInDown 1s" : "fadeInUp 1s";
  }};

  @keyframes fadeInDown {
    0% {
      transform: translate3d(0, -20%, 0);
    }
    to {
      transform: translateZ(0);
    }
  }

  @keyframes fadeInUp {
    0% {
      transform: translate3d(0, 20%, 0);
    }
    to {
      transform: translateZ(0);
    }
  }
`;

export const Search = styled.div`
  width: 35rem;
  height: 4rem;
  margin: 0 auto;
  margin-top: 8rem;
  border-bottom: 2px solid white;
  align-items: center;
  display: flex;
  svg {
    margin: 0 10px;
    cursor: pointer;
  }
  @media (max-width: 65rem) {
    width: 54vw;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  color: white;
  font-size: 1rem;
  font-weight: 100;
  background-color: transparent;
  border: none;
  ::placeholder {
    font-size: 1rem;
    padding-left: 5vw;
    text-align: center;
  }
  :focus {
    outline: none;
  }
`;

export const CurseList = styled.div`
  width: 50rem;
  height: 2.5rem;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 2rem;
  background-color: white;
  border-radius: 5px;
  color: black;
  font-size: 1rem;
  display: flex;
  align-items: center;
  span {
    width: 4rem;
    text-align: center;
    margin-left: 4rem;
    margin-right: 2rem;
    @media (max-width: 55rem) {
      margin-left: 7vw;
      margin-right: 4vw;
      white-space: nowrap;
    }
    @media (max-width: 30rem) {
      font-size: 3.5vw;
      margin-left: 7vw;
      margin-right: 4vw;
      white-space: nowrap;
    }
  }
  @media (max-width: 55rem) {
    width: 90vw;
    height: 4rem;
  }
  @media (max-width: 30rem) {
    height: 2rem;
  }
`;

export const Enrolment = styled.div`
  width: 50rem;
  height: 3.5rem;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  background-color: white;
  border-radius: 5px;
  color: black;
  display: flex;
  align-items: center;
  div {
    width: 50rem;
    display: flex;
    @media (max-width: 55rem) {
      width: 90vw;
    }
  }
  p {
    width: 4.5rem;
    text-align: center;
    margin-right: 1.5rem;
    margin-left: 4rem;
    @media (max-width: 55rem) {
      margin-left: 7vw;
      margin-right: 3vw;
      white-space: nowrap;
    }
  }
  @media (max-width: 55rem) {
    display: block;
    height: 6.5rem;
    width: 90vw;
  }
`;
export const SelectButton = styled.button<StlyedProps>`
  width: 6rem;
  height: 2.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  margin-right: 2rem;
  background-color: ${({ state }) => {
    switch (state) {
      case "null":
        return "#4C53FF";
      case "true":
        return "#ED6666";
      case "false":
        return "transparent";
      default:
        break;
    }
  }};
  @media (max-width: 55rem) {
    display: block;
    width: 85vw;
    margin: 0 auto;
  }
`;

export const ScollBox = styled.div`
  margin: 0 auto;
  width: 60rem;
  @media (max-width: 61rem) {
    width: 90vw;
  }
`;

export const FilterBox = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 2rem;
  width: 28rem;
  display: flex;
  justify-content: space-between;
  /* animation-delay: 2s; */
  /* animation: fadeInDown 1s; */

  @media (max-width: 62rem) {
    width: 45vw;
  }
  @media (max-width: 45rem) {
    width: 20rem;
  }
`;

export const FilterList = styled.div`
  width: 10rem;
  text-align: center;
  p {
    margin-bottom: 2rem;
  }
`;

export const FilterElement = styled.div<StlyedProps>`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  /* margin-right: 15px; */
  margin-bottom: 5px;
  width: 6em;
  padding: 7px 10px;
  border-radius: 23px;
  /* p {
    display: flex;
    margin: 0;
  } */
  /* svg {
    cursor: pointer;
    margin-left: 15px;
  } */
  background-color: ${({ state }) => (state ? "#A5A5FE" : "transparent")};
`;
