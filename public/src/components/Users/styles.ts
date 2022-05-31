import styled from "@emotion/styled";

export const UsersWrapper = styled.div`
  margin: 0 auto;
  margin-top: 5rem;
  width: 90%;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Hr = styled.hr`
  border: 1px solid #646464;
  max-width: 30rem;
  width: 90%;
`;

export const CardList = styled.span`
  margin: 5rem 0 2rem 0;
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

//---------------------UserCard--------------------

export const UserCardWrapper = styled.div`
  width: 20rem;
  height: 12rem;
  background: #fdfdfd;
  position: relative;
  border-radius: 0.5rem;
  box-sizing: border-box;
  padding-top: 2.5rem;
  color: #000;
`;

export const UserImg = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 100%;
  position: absolute;
  top: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Name = styled.h2`
  color: #000;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-weight: 700;
  text-align: center;
  margin: 0;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Approve = styled.button`
  flex: 1;
  border: none;
  padding: 0.5rem 0;
  border-bottom-left-radius: 0.4rem;
  background: #4c53ff;
  color: #fff;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background: #3a41f9;
  }
`;

export const Refuse = styled.button`
  flex: 1;
  border: none;
  padding: 0.5rem 0;
  border-bottom-right-radius: 0.4rem;
  background: #646464;
  color: #ff8181;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background: #4c4c4c;
  }
`;
