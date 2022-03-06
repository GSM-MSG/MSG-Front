import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;
  background: #fff;
  max-width: 20rem;
  width: 90%;
  height: 25rem;
  top: 4rem;
  right: 6.4rem;
  border-radius: 10px;
  padding: 1rem;
  box-sizing: border-box;
  color: #000;

  ::after {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
    content: "";
    position: absolute;
    top: -10px;
    right: 1rem;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 0;
`;

export const Alarms = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

  height: 20rem;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const Notice = styled.div``;

export const NoticeTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0 0.5rem;
`;

export const GroupName = styled.h3`
  margin: 0;
`;

export const NoticeDate = styled.p`
  margin: 0;
  color: #00a8fe;
`;

export const NoticeInfo = styled.p`
  margin: 0;
`;
