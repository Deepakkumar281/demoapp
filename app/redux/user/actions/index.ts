
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const DELETE_CURRENT_USER = 'DELETE_CURRENT_USER';

export interface UserData {
  username: string;
  password: string;
}

export interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER;
  user: UserData;
}

export interface DeleteCurrentUserAction {
  type: typeof DELETE_CURRENT_USER;
}

export const setCurrentUser = (user: UserData): SetCurrentUserAction => ({
  type: SET_CURRENT_USER,
  user,
});

export const deleteCurrentUser = (): DeleteCurrentUserAction => ({
  type: DELETE_CURRENT_USER,
});
