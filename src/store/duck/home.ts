
type ActionReducer = { type: string, payload: any };

const initialState = {
  users: [],
  error: null,
  loading: false
};

export default function reducer(state = initialState, action: ActionReducer) {

  switch (action.type) {
    // profile
    case "home/REQUEST_GETED_USERS":
      return {
        ...state,
        loading: true,
        error: false
      };
    case "home/SUCCESS_GETED_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: false
      };
    case "home/ERROR_GETED_USERS":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  };
};

export function getHomeUsers() {
  return {
    type: "home/ASYNC_REQUEST_GETED_USERS",
  };
};