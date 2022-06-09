import img from "../../../public/png/Loading.png"
import { Club, ClubMembersType } from "../../types"
import Excomponent from "../Introduce"

export const userData: Array<ClubMembersType> = [
    {
        name: "강경민",
        grade: 2,
        class: 2,
        num: 1,
        img: img.src,
        club: "MSG",
        role: "부원"
    },
    {
        name: "박영재",
        grade: 2,
        class: 2,
        num: 11,
        img: img.src,
        club: "MSG",
        role: "부원"
    },
    {
        name: "김준",
        grade: 2,
        class: 1,
        num: 5,
        img: img.src,
        club: "MSG",
        role: "부장"
    },
    {
        name: "변찬우",
        grade: 2,
        class: 1,
        num: 9,
        img: img.src,
        club: "MSG",
        role: "부원"
    },
    {
        name: "강경민",
        grade: 2,
        class: 2,
        num: 1,
        img: img.src,
        club: "MSG",
        role: "부원"
    },
    {
        name: "박영재",
        grade: 2,
        class: 2,
        num: 11,
        img: img.src,
        club: "MSG",
        role: "부원"
    },
    {
        name: "김준",
        grade: 2,
        class: 1,
        num: 5,
        img: img.src,
        club: "MSG",
        role: "부장"
    },
    {
        name: "변찬우",
        grade: 2,
        class: 1,
        num: 9,
        img: img.src,
        club: "MSG",
        role: "부원"
    },
    {
        name: "강경민",
        grade: 2,
        class: 2,
        num: 1,
        img: img.src,
        club: "MSG",
        role: "부원"
    },
    {
        name: "박영재",
        grade: 2,
        class: 2,
        num: 11,
        img: img.src,
        club: "MSG",
        role: "부원"
    },
    {
        name: "김준",
        grade: 2,
        class: 1,
        num: 5,
        img: img.src,
        club: "MSG",
        role: "부장"
    },
    {
        name: "변찬우",
        grade: 2,
        class: 1,
        num: 9,
        img: img.src,
        club: "MSG",
        role: "부원"
    },
    {
        name: "강경민",
        grade: 2,
        class: 2,
        num: 1,
        img: img.src,
        club: "MSG",
        role: "부원"
    },
    {
        name: "박영재",
        grade: 2,
        class: 2,
        num: 11,
        img: img.src,
        club: "MSG",
        role: "부원"
    },
    {
        name: "김준",
        grade: 2,
        class: 1,
        num: 5,
        img: img.src,
        club: "MSG",
        role: "부장"
    },
    {
        name: "변찬우",
        grade: 2,
        class: 1,
        num: 9,
        img: img.src,
        club: "MSG",
        role: "부원"
    },
    {
        name: "강경민",
        grade: 2,
        class: 2,
        num: 1,
        img: img.src,
        club: "MSG",
        role: "부원"
    },
    {
        name: "박영재",
        grade: 2,
        class: 2,
        num: 11,
        img: img.src,
        club: "MSG",
        role: "부원"
    },
    {
        name: "김준",
        grade: 2,
        class: 1,
        num: 5,
        img: img.src,
        club: "MSG",
        role: "부장"
    },
    {
        name: "변찬우",
        grade: 2,
        class: 1,
        num: 9,
        img: img.src,
        club: "MSG",
        role: "부원"
    },
]

export const clubData: Array<Club> = [
    {
        type: "MAJOR",
        title: "MSG",
        bannerUrl: img.src,
    },
    {
        type: "MAJOR",
        title: "&mpersand",
        bannerUrl: img.src,
    },
    {
        type: "MAJOR",
        title: "잡탕",
        bannerUrl: img.src,
    },
    {
        type: "MAJOR",
        title: "Team.Dotori",
        bannerUrl: img.src,
    },
    {
        type: "MAJOR",
        title: "동아리",
        bannerUrl: img.src,
    },
]

export const descriptionData = [
    {
        name: "Modify",
        tag: [
            <div >
                <Excomponent
                    Triheight={15}
                    Triturn={-60}
                    NameLogo={"로고"}
                    Ex={"클릭시 어드민페이지로 이동합니다."}
                    BoxTop={5}
                    BoxLeft={7}
                    ExTop={5}
                    ExLeft={8.5}
                    ExPosition={false}
                />
            </div>,
            <div>
                <Excomponent
                    Triheight={7}
                    Triturn={35}
                    NameLogo={"동아리 생성"}
                    Ex={"빠르게 동아리를 생성할 수 있습니다."}
                    BoxTop={5}
                    BoxLeft={92}
                    ExTop={5}
                    ExLeft={-9}
                    ExPosition={false}
                />
            </div>,
            <div>
                <Excomponent
                    Triheight={10}
                    Triturn={-70}
                    NameLogo={"검색"}
                    Ex={"여기서 검색할 수 있습니다."}
                    BoxTop={20}
                    BoxLeft={68}
                    ExTop={1}
                    ExLeft={6.5}
                    ExPosition={false}
                />
            </div>,
            <div>
                <Excomponent
                    Triheight={15}
                    Triturn={-40}
                    NameLogo={"수정"}
                    Ex={"학생 정보를 수정할 수 있습니다."}
                    BoxTop={39}
                    BoxLeft={31}
                    ExTop={10}
                    ExLeft={6}
                    ExPosition={false}
                />
            </div>,
            <div>
                <Excomponent
                    Triheight={8}
                    Triturn={118}
                    NameLogo={"학생 삭제"}
                    Ex={"학생을 제거할 수 있는 화면으로 이동합니다."}
                    BoxTop={83}
                    BoxLeft={88}
                    ExTop={-8}
                    ExLeft={-22.5}
                    ExPosition={true}
                />
            </div>,
        ]
    },
    {
        name: "Secession",
        tag: [
            <div>
                <Excomponent
                    Triheight={8}
                    Triturn={-60}
                    NameLogo={"학생 탈퇴"}
                    Ex={"학생을 탈퇴시킵니다."}
                    BoxTop={38}
                    BoxLeft={60}
                    ExTop={2}
                    ExLeft={5}
                    ExPosition={false}
                />
            </div>,
            <div>
                <Excomponent
                    Triheight={12}
                    Triturn={110}
                    NameLogo={"학생 수정"}
                    Ex={"학생을 수정할 수 있는 화면으로 이동합니다."}
                    BoxTop={83}
                    BoxLeft={88}
                    ExTop={-8}
                    ExLeft={-24.5}
                    ExPosition={true}
                />
            </div>,
        ]
    }
]