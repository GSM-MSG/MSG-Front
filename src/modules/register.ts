import produce from "immer";

const CHANGE_EMAIL = "register/CHANGE_EMAIL" as const;
const CHANGE_PASSWORD = "register/CHANGE_PASSWORD" as const;
const CHANGE_PASSWORD_CONFIRM = "register/CHANGE_PASSWORD_CONFIRM" as const;
const CONFIRM_SUCCESS = "register/CONFIRM_SUCCESS" as const;

export const change_email = (email: string) => ({
  type: CHANGE_EMAIL,
  email,
});

export const change_password = (value: string) => ({
  type: CHANGE_PASSWORD,
  value,
});

export const change_password_confirm = (value: string) => ({
  type: CHANGE_PASSWORD_CONFIRM,
  value,
});

export const confirm_success = () => ({
  type: CONFIRM_SUCCESS,
});

type ActionType = ReturnType<
  | typeof change_email
  | typeof change_password
  | typeof change_password_confirm
  | typeof confirm_success
>;

interface initialStateType {
  email: string;
  password: string;
  passwordConfirm: string;
  confirmSuccess: boolean | null;
}

const initialState: initialStateType = {
  email: "",
  password: "",
  passwordConfirm: "",
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
    case CHANGE_PASSWORD_CONFIRM:
      return produce(state, (draft) => {
        draft.passwordConfirm = action.value;
      });
    case CONFIRM_SUCCESS:
      return produce(state, (draft) => {
        draft.confirmSuccess = !draft.confirmSuccess;
      });
    default:
      return state;
  }
}
