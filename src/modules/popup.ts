const CLOSE = "popup/close" as const;
const OPEN = "popup/OPEN" as const;
const TOGGLE = "popup/TOGGLE" as const;

export const close_popup = () => ({
  type: CLOSE,
});

export const open_popup = () => ({
  type: OPEN,
});

export const toggle_popup = () => ({
  type: TOGGLE,
});

type ActionType =
  | ReturnType<typeof close_popup>
  | ReturnType<typeof open_popup>
  | ReturnType<typeof toggle_popup>;

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
    case TOGGLE:
      return !state;
    default:
      return state;
  }
}
