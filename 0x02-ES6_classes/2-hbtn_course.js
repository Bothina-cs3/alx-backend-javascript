export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name; // Use underscore to store the value directly
    this._length = length; // Use underscore to store the value directly
    this._students = students; // Use underscore to store the value directly
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string' && !(name instanceof String)) {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
