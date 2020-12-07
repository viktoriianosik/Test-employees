import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import EmployeesList from "./employees-list";
import testUsers from "../../test-data/test-data";
import * as reactRedux from "react-redux";

configure({adapter: new Adapter()});

const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
const mockedDispatch = jest.fn();
beforeEach(() => {
  useDispatchMock.mockClear()
});

it(`Checkbox have been called 1`, () => {
  useDispatchMock.mockReturnValue(mockedDispatch);

  const employeeList = shallow(<EmployeesList
    users={testUsers}
    selectedUsers={testUsers}
  >
  </EmployeesList>
  );

  const inputs = employeeList.find(`input`);
  const inputOne = inputs.at(1);

  inputOne.simulate(`change`);
  expect(mockedDispatch).toHaveBeenCalledTimes(1);
});