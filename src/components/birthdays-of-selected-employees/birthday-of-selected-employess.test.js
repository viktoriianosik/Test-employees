import React from "react";
import renderer from "react-test-renderer";
import BirthdaysOfSelectedEmployees from "./birthdays-of-selected-employees";
import testUsers from "../../test-data/test-data";


it(`Render component BirthdaysOfSelectedEmployees correctly`, () => {
  const tree = renderer.create(
      <BirthdaysOfSelectedEmployees
        selectedUsers={testUsers}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});