const SkylabArray = require("../SkylabArray");

describe("Give a method of an object", () => {
  describe("When it's called and it receive the value 3 ,index zero in object is 1 and lenght 1", () => {
    test("Then it's should return the object with new value in next index and length 2", () => {
      const initialObjectValue = 1;
      const inputValue = 3;

      const expectedIndexZeroResult = 1;
      const expectedIndexOneResult = 3;

      const testObject = new SkylabArray(initialObjectValue);
      testObject.push(inputValue);

      expect(testObject[0]).toEqual(expectedIndexZeroResult);
      expect(testObject[1]).toEqual(expectedIndexOneResult);
    });
  });
});
