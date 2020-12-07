import {ActionCreator} from "./action";

export const fetchUsersList = () => (dispatch, _getState, api) => (
  api.get(`/users`)
  .then(({data}) => dispatch(ActionCreator.loadUsers(data)))
);