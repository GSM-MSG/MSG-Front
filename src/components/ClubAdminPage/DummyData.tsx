import img from "../../../public/png/Loading.png"
import { Club, ClubMembersType } from "../../types"

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