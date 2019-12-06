/* eslint-env jest */

import { shallow } from "enzyme";
import React from "react";

import App from "../pages/index.js";

describe("With Enzyme", () => {
  it("App shows logo", () => {
    const app = shallow(<App />);
    const logoImage = "/assets/logo.svg";

    expect(app.find("img").prop("src")).toEqual(logoImage);
  });
});
