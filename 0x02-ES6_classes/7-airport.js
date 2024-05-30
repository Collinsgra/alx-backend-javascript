export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // method to override the default string
  toString() {
    return `[object ${this._code}]`;
  }
}
