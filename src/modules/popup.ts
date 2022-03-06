const CLOSE = "popup/close" as const;
const OPEN = "popup/OPEN" as const;

export const close_popup = () => ({
  type: CLOSE,
});

export const open_popup = () => ({
  type: OPEN,
});

type ActionType =
  | ReturnType<typeof close_popup>
  | ReturnType<typeof open_popup>;

const initialState: boolean = false;

export default function popup(
  state: boolean = initialState,
  action: ActionType
) {
  switch (action.type) {
    case OPEN:
      return true;
    case CLOSE:
      return false;
    default:
      return state;
  }
}
