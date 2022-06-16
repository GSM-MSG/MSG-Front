export interface MyPageType {
<<<<<<< HEAD
  userId: string;
  name: string;
  grade: 1;
  class: 2;
  number: 3;
  profileImageUrl: string;
  joinedMajorClub: {
    title: string;
    type: "MAJOR";
    bannerUrl: string;
  };
  joinedFreedomClub: {
    title: string;
    type: "FREEDOM";
    bannerUrl: string;
  };
  joinedEditorialClub: JoinedEditorialClub[];
}

interface JoinedEditorialClub {
  title: string;
  type: "EDITORIAL";
  bannerUrl: string;
=======
  userData: {
    email: string;
    name: string;
    grade: number;
    class: number;
    num: number;
    userImg: string;
  };
  clubs: Club[];
}

interface Club {
  id: number;
  type: "MAJOR" | "FREEDOM" | "EDITORIAL";
  bannerUrl: string;
  title: string;
  description: string;
  contact: string;
  teacher: null | string;
  isOpened: boolean;
>>>>>>> d3d64d895a9211ab8d7046f521ec7cc3fd43d1a6
}
