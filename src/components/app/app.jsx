import React from "react";
import {useSelector} from "react-redux";
import EmployeesList from "../employees-list/employees-list";
import BirthdaysOfSelectedEmployees from "../birthdays-of-selected-employees/birthdays-of-selected-employees";

const App = () => {
  const {users, selectedUsers} =  useSelector((state) => ({
    users: state.users,
    selectedUsers: state.selectedUsers
  }));
  window.localStorage.setItem("selectedUsers", JSON.stringify(selectedUsers));

  return (
    <>
      <EmployeesList users={users} selectedUsers={selectedUsers} />
      <BirthdaysOfSelectedEmployees selectedUsers={selectedUsers}/>
    </>
  );
};

export default App;