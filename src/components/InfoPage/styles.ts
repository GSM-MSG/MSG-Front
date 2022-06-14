import styled from "@emotion/styled";

type ModalProps = {
  isModal: boolean;
}

type BtnProps = {
  isModal: boolean;
  club: any;
}


export const Wrapper = styled.div`
  margin: 4rem 0;
`;

export const CoverImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export const Contents = styled.div`
  padding: 0 5rem;
`;

export const ClubName = styled.h1`
  font-size: 3rem;
`;

export const Users = styled.div`
  list-style: none;
  padding: 0;
  margin: 0 0 4rem;
  display: flex;
  overflow: auto;
  gap: 5rem;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const User = styled.div`
  position: relative;
`;

export const UserImg = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 100%;
`;

export const Badge = styled.div`
  position: absolute;
  width: 100%;
  height: 1.6rem;
  box-sizing: border-box;
  border: 2px solid #4d54ff;
  background: #1e1e1c;
  border-radius: 1rem;
  bottom: 1.4rem;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const UserName = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1rem;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
  flex: 1;
  gap: 2rem;

  @media (max-width: 1250px) {
    flex-wrap: wrap;
    padding: 0 2rem;
    justify-content: center;
  }
`;

export const AllInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Introduce = styled.div`
  max-width: 60rem;
`;

export const SubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;

  @media (max-width: 1250px) {
    justify-content: space-around;
  }
  @media (max-width: 790px) {
    flex-wrap: wrap;
  }
`;

export const Imgs = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 22rem;
  gap: 2rem;
`;

export const Img = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 10px;
`;

export const Contect = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const UserContact = styled.div`
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;

export const Link = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const LinkButton = styled.a`
  background: #fff;
  padding: 1rem;
  border-radius: 1rem;
  max-width: 60rem;
  color: #5169e8;
  height: 3.3rem;
  overflow: hidden;

  :hover {
    text-decoration: underline;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: inherit;
  border-radius: 1rem;
  outline: none;
  border: none;
  color: #fff;
  padding: 1rem 10rem;
  transition: 0.2s;
  ${(props: { isDeadline?: boolean }) =>
    props.isDeadline
      ? `background: #646464;`
      : `box-shadow: -4px 10px 10px rgba(76, 83, 255, 0.5);
background: #4c53ff;
cursor: pointer;
:hover {
    transform: scale(1.1);
  }
`}
`;

export const ListWrapper = styled.div`
    width: 23vw;
    height: 100px;
    background: #fff;
    border-radius: 5px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;

    @media (max-width: 1300px){
        width: 36vw;
    }
    @media (max-width: 800px){
        width: 50vw;
    }

    img{
        height: 75%;
        border-radius: 100%;
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    p{
        font-size:20px;
        margin: 0;
    }
`

export const ModifyLayout = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(3px);
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: animate .5s;
    
    @keyframes animate {
        0%{
            opacity: 0;
            margin-top: -100px;
            height: calc(100vh + 100px);
        }
        100%{
            opacity: 1;
            margin-bottom: 0px;
            height: 100vh;
        }
    }
`

export const ModifyBox = styled.div<ModalProps>`
    position: fixed;
    width: ${props => props.isModal ? "846px" : "700px"};
    height: ${props => props.isModal ? "610px" : "780px"};
    background: #1E1E1C;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 200;
    padding: ${props => props.isModal ? "30px 172px" : "20px 110px"};
    transition: width .5s, height 0s, gap 0s;
    gap: 30px;
    
    ul{
        padding: 0;
    }

    p{
        width: 65%;
        margin-bottom: 2px;
    }

    > div{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
`

export const ProfileImg = styled.img`
    border-radius: 100%;
    width: 100px;
`

export const ModifyInput = styled.input`
    background: none;
    border: 1px solid #fff;
    border-radius: 5px;
    height: 40px;
    color: #fff;
    text-align: center;
    font-size: 22px;

    :focus {
        outline: none;
    }
`

export const InputWrapper = styled.div`
    border-bottom: 2px solid #fff;
    display: flex;
    align-items: center;
    padding-right: 5px;

    input{
        width: 35vw;
        border: none;
        background: transparent;
        padding: 14px 35px;
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 100;
        font-size: 20px;
        line-height: 29px;
        color: #fff;
        margin-right: -30px;
        text-align: center;

        @media (max-width: 1300px) {
            width: 450px;   
        }
        
        ::placeholder {
            position: relative;
        }
        :focus {
            outline: none;
        }
    }
`

export const FindBtn = styled.button`
    position: relative;
    color: #fff;
    background: #5959FF;
    top: -4px;
    right: 0;
    width: 100px;
    height: 50px;
    margin-left: 14px;
    z-index: 300;
    cursor: pointer;
    `

export const DoneBtn = styled.button<BtnProps>`
    color: #fff;
    background: ${props => props.club !== null && props.club !== undefined ? "#4C53FF" : "#A3A3A3"};
    width: 50%;
    height: 60px;
    border-radius: 10px;
    gap: ${props => props.isModal ? "30px" : 0};
    font-weight: 600;
    font-size: 26px;
    line-height: 35px;
    cursor: pointer;
    
`

export const FindClubBox = styled.div`
    position: fixed;
    width: 846px;
    height: 610px;
    background: #1E1E1C;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 200;
    padding: 20px 110px;
`

export const ClubInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 250px;
    overflow: hidden;
    position: relative;
`