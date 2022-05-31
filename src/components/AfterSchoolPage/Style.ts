import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
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

    input{
        width: 35vw;
        border: none;
        background: transparent;
        padding: 14px 20px;
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 100;
        font-size: 20px;
        line-height: 29px;
        color: #fff;
        margin-right: -30px;
        
        ::placeholder {
            position: relative;
            text-align: center;
        }
    }
`