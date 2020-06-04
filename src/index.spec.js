const { addTwoNumbers } = require("./index");

it("add two numbers function", () => {
  expect(addTwoNumbers(2, 2)).toEqual(4);
  expect(addTwoNumbers(1, 1)).toEqual(2);
});
