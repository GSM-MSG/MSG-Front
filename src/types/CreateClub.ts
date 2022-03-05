export interface CreateClub {
  photo: string;
  type: "editorial" | "freedom" | "major" | "";
  name: string;
  description: string;
  teacher: string;
  discord: string;
  clubphoto: string[];
  clubmember: string[];
  contect: string;
}
