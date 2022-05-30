import styled from "@emotion/styled";

type StlyedProps = {
    state: string
};

export const AfterSchoolBox = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-top: 8rem;
`;

export const Search = styled.div`
    width: 35rem;
    height: 4rem;
    margin: 0 auto;
    margin-top: 8rem;
    border-bottom:2px solid white;
    display: flex;
    align-items: center;
    flex: 5 2.5 2.5;
    svg {
        margin: 0 10px;
        cursor: pointer;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 2rem;
    font-weight: 100;
    color: white;
    font-size: 1rem;
    text-align: center;
    background-color:transparent;
    border: none;
    ::placeholder {
        position: relative;
        left: 12px;
        font-size: 1rem;
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
        text-align: center;
        width: 4rem;
        margin-right: 2rem;
        margin-left: 4rem;
    }
`

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
    p {
        width: 4.5rem;
        text-align: center;
        margin-right: 1.5rem;
        margin-left: 4rem;
    }
`;
export const SelectButton = styled.button<StlyedProps>`

    width: 6rem;
    height: 2.5rem;
    border: none;   
    border-radius: 5px;
    cursor: pointer;
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
    }
    };
    color: white;
    margin-left: 3rem;
`;

export const ScollBox = styled.div`
    margin: 0 auto;
    width: 60rem;
    height: 43rem;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const FilterBox = styled.div`
    margin: 0 auto;
    margin-top: 3rem;
    margin-bottom: 2rem;
    width: 28rem;
    display: flex;
    justify-content: space-between;
    animation: fadeInDown 1s;
    @keyframes fadeInDown {
        0% {
            opacity: 0;
            transform: translate3d(0, -30%, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
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
    margin: 0 auto;
    margin-right: 8px;
    margin-bottom:5px ;
    width: 7.5rem;
    justify-content: space-between;
    padding: 8px 23px;
    border-radius: 23px;
    svg {
        cursor: pointer;
    }
    background-color: ${({state}) => state ? "#A5A5FE" : "transparent" };   
`

