import { type } from "os";

export type UserState = {
  id: number;
  title?: string;
  grade: number;
  week: string;
  personnel: number;
  maxPersonnel: number;
  isApplied: boolean;
};

export type PropListType = {
  lecture: string;
  week: "MON" | "TUE" | "WED";
  grade: number;
  personnel: number;
  maxPersonnel: number;
};

export type ChangeWeekType = (e: "MON" | "TUE" | "WED") => any;
