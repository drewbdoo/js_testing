import { reverseNumber } from "../script";
import { alphabet_order } from "../script";
import { isPrime1 } from "../script";
import { findUnique } from "../script";
import { Second_Greatest_Lowest } from "../script";
import { jest } from "@jest/globals";

describe("Multiple tests", () => {
  test("Check if false", () => expect(isPrime1()).toBe(false));

  test("Has a length of 1 ", () => expect(reverseNumber).toHaveLength(1));

  test("Check to see if it is truthy", () => expect(findUnique).toBeTruthy());
  
  test("See if a stray cats returns", () => {
    const strays = jest.fn(() => true);

    strays();

    expect(strays).toHaveReturned();
  });
});

//Made a fake function for this
function stupidFuction(callback, name) {
  if (name !== "Jimmy") {
    callback(name);
  }
}

test("is the name not jimmy", () => {
  const myName = jest.fn();
  stupidFuction(myName, "Steve");
  expect(myName).toHaveBeenCalled();
});
