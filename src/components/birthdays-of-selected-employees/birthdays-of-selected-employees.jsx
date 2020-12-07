import React from "react";
import {sortByMonth, sortByDay} from "../../utils";
import moment from "moment";
import PropTypes from "prop-types";
import userPropTypes from "../employees-list/user-props";

const BirthdaysOfSelectedEmployees = (props) => {
  const {selectedUsers} =  props;
  const sortedSelectedUsersByMonth =  selectedUsers.sort(sortByMonth);
  const allMonth = new Array(selectedUsers.length).fill().map((item, i) => moment(sortedSelectedUsersByMonth[i].dob).format(`MMMM`));
  const uniqMonth = Array.from(new Set(allMonth));

  return (
    <div className="employees-birthday">
      <h2 className="employees-birthday__title title">Employees birthday</h2>
        {selectedUsers.length === 0 
          ? <p className="employees-birthday__empty">No selected employees</p>
          : uniqMonth.map((month, i) => (
            <React.Fragment key={month}>
              <h3>{month}</h3>
              <ul className="birthday-list">
                {selectedUsers.sort(sortByDay).map((user, i) => (
                  moment(user.dob).format(`MMMM`) === month && 
                  <li key={user.id} className="birthday-item">
                    {`${user.lastName} ${user.firstName} - ${moment(user.dob).format(`DD MMMM, YYYY`)} year`}
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))
        }
    </div>
  );
};

BirthdaysOfSelectedEmployees.propTypes = {
  selectedUsers: PropTypes.arrayOf(userPropTypes).isRequired,
}

export default BirthdaysOfSelectedEmployees;