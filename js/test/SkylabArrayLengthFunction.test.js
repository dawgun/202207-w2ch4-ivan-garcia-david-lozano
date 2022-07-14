const SkylabArray = require("../SkylabArray.js");

describe("Given an object with function", () => {
  describe("When it's called with function chekerLength and it recieves a string dog", () => {
    test("Then it should be the lenght value 3", () => {
      const firstValue = "dog";
      const expectedReturn = 3;

      const objectReturned = new SkylabArray();

      expect(objectReturned.checkerLength(firstValue)).toBe(expectedReturn);
    });
  });
  describe("When it's called with function chekerLength and it recieves an array [2, 4, 7, 8]", () => {
    test("Then it should be the lenght value 4", () => {
      const firstValue = [2, 4, 7, 8];
      const expectedReturn = 4;

      const objectReturned = new SkylabArray();

      expect(objectReturned.checkerLength(firstValue)).toBe(expectedReturn);
    });
  });
});
