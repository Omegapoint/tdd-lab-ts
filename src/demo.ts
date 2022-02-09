/* import { illegalWords } from './resources/illegalWords' */ 

export class LicensePlateValidator {
  constructor() {}

  /* Step 1 
    validate(licenseNumber: string): boolean {
        return true
    }
    */















    








  /* Step 2
    validate(licenseNumber: string): boolean {
        return licenseNumber.match(/[A-Z]{3}[0-9]{2}[A-Z0-9]{1}/) != null;
    }
    */




















  /* Step 3
    validate(licenseNumber: string): boolean {
        return licenseNumber.match(/[A-HJ-PR-UW-Z]{3}[0-9]{2}[A-HJ-NPR-UW-Z1-9]{1}/) != null;
    }
    */

















  /* Step 4
  validate(licenseNumber: string): boolean {
    return (
      !this.isIllegalWord(licenseNumber.substring(0, 3)) &&
      licenseNumber.match(/[A-HJ-PR-UW-Z]{3}[0-9]{2}[A-HJ-NPR-UW-Z1-9]{1}/) !=
        null
    );
  }

  isIllegalWord(firstThreeLetters: string): boolean {
    return illegalWords.includes(firstThreeLetters);
  }
  */
}
