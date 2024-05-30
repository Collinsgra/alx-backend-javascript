export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // number
  valueOf() {
    return this._size;
  }

  // string
  toString() {
    return this._location;
  }
}
