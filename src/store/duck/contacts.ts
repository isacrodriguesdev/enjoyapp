
type ActionReducer = { type: string, payload: object };

const initialState = {
  contacts: [],
  favorites: [],
  matchs: [],
  error: null,
  loading: true
};

export default function reducer(state = initialState, action: ActionReducer) {

  const { type, payload } = action;

  switch (type) {
    case "contacts/GETED_USERS_FAVORITES":
      return {
        ...state,
        favorites: payload
      };
    case "contacts/GETED_USERS_MATCHS":
      return {
        ...state,
        matchs: payload
      };
    default:
      return state;
  };
};

// ------ FAVORITES ------
export function getUsersFavorites() { // GET
  return {
    type: "contacts/ASYNC_GETED_USERS_FAVORITES",
  };
};

// ------ HEART ------

export function getUsersMatchs() { // GET
  return {
    type: "contacts/ASYNC_GETED_USERS_MATCHS",
  };
};