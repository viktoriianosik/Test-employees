import React, {useRef} from "react";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {sortArray} from "../../utils";
import userPropTypes from "./user-props";
import {ActionCreator} from "../../store/action";

const EmployeesList = (props) => {
  const {users, selectedUsers} =  props;
  const alphabet = [...Array(26)].map((_, y) => String.fromCharCode(y + 65)).join('').split("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  return (
    <div className="employee">
      <h2 className="employee__title title">Employees</h2>
      <ul className="users-list">
        {alphabet.map((letter, i) => (
          <li className="users-item" key={i}>
            <h3 className="users__letter">
              {letter}
            </h3>
            {
              users.sort(sortArray).map((user, i) => (
                user.lastName.startsWith(letter) &&
                <React.Fragment key={user.id}>
                  <label className="user-item__name">
                    {`${user.lastName} ${user.firstName}`}
                    <input
                      className="user-item__input visually-hidden"
                      ref={inputRef} 
                      type="checkbox" 
                      value={user.id} 
                      checked={selectedUsers.some((item, i) => item.id === user.id)}
                      onChange={() => dispatch(ActionCreator.addUserToSelected(user))}
                    />
                    <span className="user-item__checkbox"></span>
                  </label>
                </React.Fragment>
              ))
            }
            {
              !users.some((user, i) => (
                user.lastName.startsWith(letter)
              )) && <p>-----</p>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

EmployeesList.propTypes = {
  users: PropTypes.arrayOf(userPropTypes).isRequired,
  selectedUsers: PropTypes.arrayOf(userPropTypes).isRequired,
}

export default EmployeesList;