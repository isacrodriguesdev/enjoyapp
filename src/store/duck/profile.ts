
type ActionReducer = { type: string, payload: any };

const initialState = {
  profile: {},
  error: null,
  loading: false
};

export default function reducer(state = initialState, action: ActionReducer) {

  switch (action.type) {
    // get
    case "profile/REQUEST_GETED_PROFILE":
      return {
        ...state,
        loading: true,
        error: false
      };
    case "profile/SUCCESS_GETED_PROFILE":
      return {
        ...state,
        profile: action.payload,
        loading: false,
        error: false
      };
    case "profile/ERROR_GETED_PROFILE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    // update
    default:
      return state;
  };
};;

export function getProfile(id: number) {
  return {
    type: "profile/REQUEST_GETED_PROFILE",
    payload: { id }
  };
};

export function addUserFavorites(userId: number) { // ADD
  return {
    type: "profile/ASYNC_ADDED_USER_FAVORITES",
    payload: { userId }
  };
};

export function removeUserFavorites(userFavoritedId: number) { // REMOVE
  return {
    type: "profile/ASYNC_REMOVED_USER_FAVORITES",
    payload: { userFavoritedId }
  };
};

export function addUserHeart(userHeartId: number) { // ADD
  return {
    type: "profile/ASYNC_ADDED_USER_HEART",
    payload: { userHeartId }
  };
};

export function removeUserHeart(userHeartId: number) { // REMOVE
  return {
    type: "profile/ASYNC_REMOVED_USER_HEART",
    payload: { userHeartId }
  };
};

