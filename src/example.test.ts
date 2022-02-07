import jest from "jest";
import { Calculator } from "./example";

describe("Calculator", () => {
  let calculator: Calculator;

  beforeAll(() => {
    calculator = new Calculator();
  });

  test("0 + 0 = 0", () => {
    // given
    const zero = 0;
    const expected = 0;

    // when
    const actual = calculator.add(zero, zero);

    // then
    expect(actual).toEqual(expected);
  });

  test("1 + 1 = 2", () => {
      // given
      const one = 1;
      const expected = 2;

      // when
      const actual = calculator.add(one, one)

      // then 
      expect(actual).toEqual(expected);
  })
});
