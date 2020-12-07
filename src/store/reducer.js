import {ActionType} from "./action";

const selectedUsersFromLocalStorage = JSON.parse(localStorage.getItem("selectedUsers"));

const initialState = {
  users: [],
  selectedUsers: selectedUsersFromLocalStorage === null ? [] : selectedUsersFromLocalStorage,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ActionType.LOAD_USERS:
      return Object.assign({}, state, {
        users: action.payload,
      });
    case ActionType.TOGGLE_USER_TO_SELECTED:
      const index = state.selectedUsers.findIndex((user) => user.id === action.payload.id);
      return index === -1 
      ? Object.assign({}, state, {
        selectedUsers: [...state.selectedUsers, action.payload],
      })
      : Object.assign({}, state, {
        selectedUsers: state.selectedUsers.filter((user, i) => i !== index),
      })
    default:
      return state;
  }
};

export default reducer;