export default class Currency {
  constructor(code, name) {
    this.code = code; // Change to no underscore
    this.name = name; // Change to no underscore
  }

  // Getter for code
  get code() {
    return this.code; // Adjusted to remove underscore
  }

  // Setter for code
  set code(value) {
    this.code = value; // Adjusted to remove underscore
  }

  // Getter for name
  get name() {
    return this.name; // Adjusted to remove underscore
  }

  // Setter for name
  set name(value) {
    this.name = value; // Adjusted to remove underscore
  }

  // Method to display full currency
  displayFullCurrency() {
    return `${this.name} (${this.code})`; // Format: name (code)
  }
}
