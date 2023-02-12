export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUserName() {
    const exeptStartWithDigit = !/^\d/.test(this.name);
    const exeptEndWithDigit = !/\d$/.test(this.name);
    const exeptStartWithDash = !/^[-]/.test(this.name);
    const exeptEndWithDash = !/[-]$/.test(this.name);
    const exeptStartWithUnderline = !/^[_]/.test(this.name);
    const exeptEndWithUnderline = !/[_]$/.test(this.name);
    const exeptThreeNumbersInRow = !/\d{4,}/g.test(this.name);
    const acceptLatinDigitDashUnderline = !/[^\w-]/g.test(this.name);

    return exeptStartWithDigit && exeptEndWithDigit && exeptStartWithDash && exeptEndWithDash
      && exeptStartWithUnderline && exeptEndWithUnderline && exeptThreeNumbersInRow
      && acceptLatinDigitDashUnderline;
  }
}
