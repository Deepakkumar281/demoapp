import {
    SET_CURRENT_USER,
    DELETE_CURRENT_USER,
    SetCurrentUserAction,
    DeleteCurrentUserAction,
    UserData,
  } from '../actions'; // Ensure the correct path to your actions file
  
  export const initialState: UserData = {
    username: '',
    password: '',
  };
  
  const userReducer = (
    state = initialState,
    action: SetCurrentUserAction | DeleteCurrentUserAction
  ): UserData => {
    switch (action.type) {
      case SET_CURRENT_USER:
        return { ...state, ...action.user };
      case DELETE_CURRENT_USER:
        return initialState;
      default:
        return state;
    }
  };
  
  export default userReducer;