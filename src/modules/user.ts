const CREATE = "user/CREATE" as const;
const CLEAR = "user/CLEAR" as const;

interface initialStateType {
  email?: string | null | undefined;
  image?: string | null | undefined;
  name?: string | null | undefined;
}

export const user_create = (user: initialStateType) => ({
  type: CREATE,
  payload: { ...user },
});

export const user_clear = () => ({
  type: CLEAR,
});

type ActionType =
  | ReturnType<typeof user_clear>
  | ReturnType<typeof user_create>;

const initialState: initialStateType = {};

export default function user(state = initialState, action: ActionType) {
  switch (action.type) {
    case CREATE:
      return { ...action.payload };
    case CLEAR:
      return {};
    default:
      return state;
  }
}
