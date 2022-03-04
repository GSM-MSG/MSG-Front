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
