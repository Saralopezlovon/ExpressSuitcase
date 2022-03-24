import React from "react";
import { shallow } from "enzyme";
import NewSuitcase from "./NewSuitcase";

describe("NewSuitcase", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewSuitcase />);
    expect(wrapper).toMatchSnapshot();
  });
});
