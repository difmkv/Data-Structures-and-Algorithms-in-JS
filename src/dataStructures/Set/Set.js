/*
 * SET
 *
 * Abstract data type
 * Stores unique values in no particular order
 * No mechanism for retrieving elements
 * *** Operations:
 * mySet.count()
 * => integer value for the number of values present in set
 * mySet.add(value)
 * => set object
 * mySet.delete(value)
 * => true if value was present and removed
 * => false if value was not present
 * mySet.has(value)
 * => true/false
 * mySet.forEach(callbackFn)
 * => no return value
 * calls callbackFn once for each value in the set
 * **** ES6 has a Set data structure as part of the core language.
 */

export default class Set {
  constructor(capacity = 5) {
    this.capacity = capacity;
    this.storage = {};
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  has(value) {
    return !!this.storage[value];
  }

  add(value) {
    if (this.has(value)) {
      return "Set already has value.";
    }
    if (this.getSize() < this.capacity) {
      this.storage[value] = true;
      this.size++;
      return this;
    }
    return "Max capacity reached. Remove before adding.";
  }

  delete(value) {
    if (this.storage[value]) {
      delete this.storage[value];
      this.size--;
      return true;
    }
    return false;
  }

  forEach(cb) {
    for (let key in this.storage) {
      cb(key);
    }
  }
}
