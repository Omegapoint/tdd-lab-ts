import { LicensePlateValidator } from "./demo";

describe("Calculator", () => {
  let licensePlateValidator: LicensePlateValidator;

  beforeAll(() => {
    licensePlateValidator = new LicensePlateValidator();
  });

  test("Returns true for license number like XXX000 or XXX00X", () => {
    // given
    const licenseNumber = "ABC123";
    const licenseNumber2 = "ABC12A";

    // when
    const actual = licensePlateValidator.validate(licenseNumber);
    const actual2 = licensePlateValidator.validate(licenseNumber2);

    // then
    expect(actual).toEqual(true); // toBeTruthy kan vara farligt
    expect(actual2).toEqual(true);
  });

  test("Returns false for license number like XXXXXX", () => {
    const licenseNumber = "ABCDEF";
    const actual = licensePlateValidator.validate(licenseNumber);
    expect(actual).toEqual(false);
  });

  test("Returns false for license number with illegal characters", () => {
    const licenseNumber = "III001";
    const actual = licensePlateValidator.validate(licenseNumber);
    expect(actual).toEqual(false);
  });

  test("Returns false for illegal words", () => {
    const licenseNumber = "FUL001";
    const actual = licensePlateValidator.validate(licenseNumber);
    expect(actual).toEqual(false);
  });
});
