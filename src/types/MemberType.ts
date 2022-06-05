export interface MemberType {
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
