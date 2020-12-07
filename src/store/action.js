export const ActionType = {
  LOAD_USERS: `LOAD_USERS`,
  TOGGLE_USER_TO_SELECTED: `TOGGLE_USER_TO_SELECTED`,
};

export const ActionCreator = {
  loadUsers: (users) => ({
    type: ActionType.LOAD_USERS,
    payload: users,
  }),
  addUserToSelected: (user) => ({
    type: ActionType.TOGGLE_USER_TO_SELECTED,
    payload: user,
  }),
};