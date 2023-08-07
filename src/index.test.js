import { expect } from "chai";
import { footballerNames } from "./index.js";

describe("footballPlayerNames", function () {
  it("should have a list of all available names", function () {
    expect(isArrayOfStrings(footballerNames.all)).to.be.true;
  });

  it("should allow me to get a random name from the list", function () {
    expect(footballerNames.random()).to.satisfy(
      isIncludedIn(footballerNames.all)
    );
  });
});

function isArrayOfStrings(array) {
  return array.every(function (item) {
    return typeof item === "string";
  });
}

function isIncludedIn(array) {
  return function (item) {
    return array.indexOf(item) !== -1;
  };
}
