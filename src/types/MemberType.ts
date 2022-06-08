export interface MemberType {
  userScope: "HEAD" | "MEMBER";
  requestUser: Member[];
}

export interface Member {
  id: number;
  scope: "MEMBER" | "HEAD";
  user: {
    email: string;
    name: string;
    grade: number;
    class: number;
    num: number;
    userImg: string;
  };
}
