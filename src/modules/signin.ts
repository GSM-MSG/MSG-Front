import produce from "immer";

const CHANGE_EMAIL = "signin/CHANGE_EMAIL" as const;
const CHANGE_PASSWORD = "signin/CHANGE_PASSWORD" as const;

export const change_email = (email: string) => ({
  type: CHANGE_EMAIL,
  email,
});

export const change_password = (value: string) => ({
  type: CHANGE_PASSWORD,
  value,
});

type ActionType = ReturnType<typeof change_email | typeof change_password>;

interface initialStateType {
  email: string;
  password: string;
}

const initialState: initialStateType = {
  email: "",
  password: "",
};

export default function signin(
  state = initialState,
  action: ActionType
): initialStateType {
  switch (action.type) {
    case CHANGE_EMAIL:
      return produce(state, (draft) => {
        draft.email = action.email;
      });
    case CHANGE_PASSWORD:
      return produce(state, (draft) => {
        draft.password = action.value;
      });
    default:
      return state;
  }
}
