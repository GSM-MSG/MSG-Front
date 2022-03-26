import produce from "immer";
import { initialStateType } from "../types";

const CHANGE = "register/CHANGE" as const;
const CHANGE_TYPE = "register/CHANGE_TYPE" as const;
const PUSH_ACTIVITYURLS = "register/PUSH_ACTIVITYURLS" as const;
const DELETE_ACTIVITYURLS = "register/DELETE_ACTIVITYURLS" as const;
const CHANGE_LINK = "register/CHANGE_LINK" as const;
const PUSH_MEMBER = "register/PUSH_MEMBER" as const;
const DELETE_MEMBER = "register/DELETE_MEMBER" as const;

type ChangeType = "title" | "description" | "bannerUrl" | "contact" | "teacher";

export const change = (valueType: ChangeType, value: string) => ({
  type: CHANGE,
  payload: {
    valueType,
    value,
  },
});

export const change_type = (value: "MAJOR" | "FREEDOM" | "EDITORIAL") => ({
  type: CHANGE_TYPE,
  value,
});

export const push_activityUrls = (value: string) => ({
  type: PUSH_ACTIVITYURLS,
  value,
});

export const delete_activityUrls = (index: number) => ({
  type: DELETE_ACTIVITYURLS,
  index,
});

export const change_link = (name: string, url: string) => ({
  type: CHANGE_LINK,
  payload: {
    name,
    url,
  },
});

export const push_member = (name: string, userImg: string) => ({
  type: PUSH_MEMBER,
  payload: {
    name,
    userImg,
  },
});
export const delete_member = (index: number) => ({
  type: DELETE_MEMBER,
  index,
});

type ActionType = ReturnType<
  | typeof change_type
  | typeof push_activityUrls
  | typeof change
  | typeof delete_activityUrls
  | typeof change_link
  | typeof push_member
  | typeof delete_member
>;

const initialState: initialStateType = {
  type: "MAJOR",
  title: "",
  description: "",
  bannerUrl: "",
  activityUrls: [],
  contact: "",
  teacher: "",
  relatedLink: {
    name: "",
    url: "",
  },
  member: [],
};

export default function register(
  state = initialState,
  action: ActionType
): initialStateType {
  switch (action.type) {
    case CHANGE:
      return produce(state, (draft) => {
        draft[action.payload.valueType] = action.payload.value;
      });
    case CHANGE_TYPE:
      return produce(state, (draft) => {
        draft.type = action.value;
      });
    case PUSH_ACTIVITYURLS:
      return produce(state, (draft) => {
        draft.activityUrls.push(action.value);
      });
    case DELETE_ACTIVITYURLS:
      return produce(state, (draft) => {
        draft.activityUrls = draft.activityUrls.filter(
          (_, i) => i !== action.index
        );
      });
    case CHANGE_LINK:
      return produce(state, (draft) => {
        draft.relatedLink = {
          ...action.payload,
        };
      });
    case PUSH_MEMBER:
      return produce(state, (draft) => {
        draft.member.push({ ...action.payload });
      });
    case DELETE_MEMBER:
      return produce(state, (draft) => {
        draft.member = draft.member.filter((_, i) => i !== action.index);
      });
    default:
      return state;
  }
}
