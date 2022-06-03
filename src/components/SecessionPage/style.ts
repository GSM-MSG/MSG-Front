import styled from "@emotion/styled";
import * as SVG from "../../SVG"

type StyleProps = {
    check: boolean;
}

export const SecessionPage = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    padding-top: 170px;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    h1{
        border-bottom: 2px solid #fcffff;
        padding: 2px;
    }
`

export const LogoWrapper = styled.div`
    width: 100px;
    height: 100px;
    overflow: hidden;
    border: 1px solid #fff;
    box-shadow: 0px 7px 40px #4C53FF;
    border-radius: 8px;
`

export const Info = styled.div`
    width: 630px;
    height: 200px;
    background: #2d2d2d;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;

    li{
        list-style-type: disc;
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;
        margin: 45px 0;
        color: #B7B7B7;
    }
`

export const CheckBox = styled.div`
    display: flex;
    gap: 10px;
    p{
        margin: 0;
    }
`
export const Check = styled.div<StyleProps>`
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    border: ${props => props.check ? "2px solid #00B9FF" : "2px solid #898989"};
    border-radius: 3px;
    transition: all .3s ease;
    
    input[type = "checkbox"]{
        display: none;
    }
    
    span{
        &:before{
            content: '';
            position: absolute;
            display: inline - block;
            width: ${props => props.check ? "6px" : 0};
            height: 2px;
            background: #00B9FF;
            transform-origin: left;
            transform: rotate(45deg);
            top: 7px;
            left: 2px;
            transition: ${props => props.check ? "all .15s ease" : "all .15s ease .1s"};
        }
        &:after{
            content: '';
            position: absolute;
            display: inline - block;
            width: ${props => props.check ? "12px" : 0};
            height: 2px;
            background: #00B9FF;
            transform-origin: left;
            transform: rotate(-45deg);
            top: 11px;
            left: 5px;
            transition: ${props => props.check ? "all .15s ease .1s" : "all .15s ease"};
        }
    }
`

export const SecessionBtn = styled.button`
    line-height: 54px;
    width: 500px;
    border: none;
    border-radius: 10px;
    background: #4C53FF;
    color: #fff;
    font-weight: 500;
    font-size: 18px;
    margin-top: 100px;
`