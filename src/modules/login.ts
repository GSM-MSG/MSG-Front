import produce from "immer";

const CHANGE_EMAIL = "login/CHANGE_EMAIL" as const;
const CHANGE_PASSWORD = "login/CHANGE_PASSWORD" as const;
const CONFIRM_SUCCESS = "login/CONFIRM_SUCCESS" as const;

export const change_email = (email: string) => ({
  type: CHANGE_EMAIL,
  email,
});

export const change_password = (value: string) => ({
  type: CHANGE_PASSWORD,
  value,
});

export const confirm_success = () => ({
  type: CONFIRM_SUCCESS,
});

type ActionType = ReturnType<
  typeof change_email | typeof change_password | typeof confirm_success
>;

interface initialStateType {
  email: string;
  password: string;
  confirmSuccess: boolean | null;
}

const initialState: initialStateType = {
  email: "",
  password: "",
  confirmSuccess: null,
};

export default function register(
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
    case CONFIRM_SUCCESS:
      return produce(state, (draft) => {
        draft.confirmSuccess = !draft.confirmSuccess;
      });
    default:
      return state;
  }
}