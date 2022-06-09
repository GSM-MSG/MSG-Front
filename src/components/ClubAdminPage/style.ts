import styled from "@emotion/styled";
import * as SVG from "../../SVG";


type StyledProps = {
    bgcolor: boolean;
}

type ModalProps = {
    isModal: boolean;
}

type BtnProps = {
    isModal: boolean;
    club: any;
}

type BeingProps = {
    isBeing: boolean;
}


export const Wrapper = styled.div<ModalProps>`
    width: 100%;
    margin-top: 4rem;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: ${props => props.isModal ? "calc(100vh - 4rem)" : "auto"};
    overflow: ${props => props.isModal ? "hidden" : "auto"};
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    position: fixed;
    background-color: #1e1e1c;
    padding-bottom: 65px;
    
`

export const Title = styled.h1`
    font-family: Noto Sans;
        font-size: 30px;
        font-weight: 400;
        line-height: 41px;
        letter-spacing: 0em;
        text-align: left;
        color: #fff;
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

export const SearchBtn = styled(SVG.ReadingGlasses)`
`

export const ListContainer = styled.div`
    margin-top: 210px; 
    ul{
        padding: 0;
        width: 80vw;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 3.5vw 4vw;

        @media (max-width: 1300px) {
            grid-template-columns: 1fr 1fr;
            gap: 3.5vw 3vw;
        }
        @media (max-width: 800px) {
            grid-template-columns: 1fr;
            justify-items: center;
        }
    }
`

export const ListWrapper = styled.li<StyledProps>`
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

    button{
        width: 82px;
        height: 54px;
        background: ${props => props.bgcolor ? "#ED6666" : "#5959FF"};
        border: none;
        border-radius: 5px;
        color: #fff;
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 27px;
        cursor: pointer;
    }
`

export const WithdrawalBtn = styled.div<StyledProps>`
    position: fixed;
    left: 90vw;
    bottom: 100px;
    background: #fff;
    border-radius: 16px;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media (max-width: 1300px) {
        width: 7.6vw;
        height: 7.6vw;
        min-width: 80px;
        min-height: 80px;
        left: 88vw; 
    }

    @media (max-width: 800px) {
        left: 80vw;
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
    align-items: center;
    height: 250px;
    overflow: hidden;
    position: relative;
`

export const ClubBanner = styled.img`
    width: 500px;
    height: 200px;
    object-fit: contain;
`

export const ClubName = styled.p`
    width: 270px;
    height: 30px;
    line-height: 30px;
    background: #5169E8;
    text-align: center;
    border-radius: 10px;
    border-top-right-radius: 0;
`

export const Arrow = styled.span`
    width: 100px;
    height: 3px;
    display: inline-block;
    background: #5959FF;
    position: relative;
    transform: rotate(0deg);
    
    &:after{
        content: "";
        display: inline-block;
        position: absolute;
        border-bottom: 7.5px solid transparent;
        border-top: 7.5px solid transparent;
        border-left: 12px solid #5959FF;
        right: -12px;
        top: -6px;
    }
`

export const IntroduceLayout = styled.div`
    position: fixed;
    top: 0;
    z-index: 999;
    background: rgba(0, 0, 0, 0.8);
    width: 100vw;
    height: 100vh;
`

export const IntroduceWrapper = styled.div<BeingProps>`
    display: ${props => props.isBeing ? "auto" : "none"};
`