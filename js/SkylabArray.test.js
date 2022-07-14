import SkylabArray from "./SkylabArray";

describe("Give a method of a class", () => {
  describe("When it´s called and it receive a new element", () => {
    test("Then it´s should return the object plus teh new element", () => {});
    const miArray = new SkylabArray(1);

    const value1 = 3;
    const expectedResult = {
      0: 1,
      1: 3,
      length: 2,
    };

    const receivedResult = miArray.push(value1);

    expect(receivedResult).toEqual(expectedResult);
  });
});
