const SkylabArray = require("./SkylabArray");

describe("Given a constructor", () => {
  describe("When it's called and it recieves 2 and 5", () => {
    test("Then it should be an object with 2 in index zero, 5 in index one and property length 2 ", () => {
      const firstValue = 2;
      const secondValue = 5;
      const expectedZeroIndexReturn = 2;
      const expectedFirstIndexReturn = 5;
      const expectedLengthPropertyReturn = 2;

      const objectReturned = new SkylabArray(firstValue, secondValue);

      expect(objectReturned[0]).toBe(expectedZeroIndexReturn);
      expect(objectReturned[1]).toBe(expectedFirstIndexReturn);
      expect(objectReturned.length).toBe(expectedLengthPropertyReturn);
    });
  });
});
