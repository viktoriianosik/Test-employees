import React from "react";
import renderer from "react-test-renderer";
import EmployeesList from "./employees-list";
import * as reactRedux from "react-redux";
import testUsers from "../../test-data/test-data";

describe(`Render component EmployeesList correctly`, () => {
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  const mockedDispatch = jest.fn();
  
  beforeEach(() => {
    useDispatchMock.mockClear()
  });

  it(`Should EmployeesList connected to store render correctly`, () => {
    useDispatchMock.mockReturnValue(mockedDispatch);
    const tree = renderer.create(
      <EmployeesList users={testUsers} selectedUsers={testUsers}/>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});