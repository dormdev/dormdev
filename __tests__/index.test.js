/* eslint-env jest */

import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import React from "react";

import App from "../pages/index.js";

configure({ adapter: new Adapter() });

describe("With Enzyme", () => {
  it("App shows logo", () => {
    const app = shallow(<App />);
    const logoImage = "/assets/logo.svg";

    expect(app.find("img").prop("src")).toEqual(logoImage);
  });
});
