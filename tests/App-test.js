import React from "react";
import TestUtils from "react-addons-test-utils";
import expect from "expect";
import App from "./App.js";
import jsdom from "mocha-jsdom";


describe("<App />", () => {
  it("Deve retornar um UL com dez LI", () => {
    const component = TestUtils.renderIntoDocument(
      <App />
    );
    expect(ul.length).toEqual(10);
  });
});