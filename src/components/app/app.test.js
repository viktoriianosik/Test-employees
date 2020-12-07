import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import * as reactRedux from "react-redux";
import testUsers from "../../test-data/test-data";

describe(`Render component App correctly`, () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  const mockedDispatch = jest.fn();
  
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear()
  });

  it(`Should App connected to store render correctly`, () => {
    useSelectorMock.mockReturnValue({
      users: testUsers,
      selectedUsers: testUsers,
    });
    useDispatchMock.mockReturnValue(mockedDispatch);
    const tree = renderer.create(
      <App />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});