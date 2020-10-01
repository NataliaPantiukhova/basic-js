const CustomError = require("../extensions/custom-error");
let a;
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value = '') {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(idx) {
    if (!Number.isInteger(idx) || !this.arr[idx - 1]) {
      chainMaker.arr = [];
      throw new Error('error');
    }
    this.arr.splice(idx - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    a = this.arr.join('~~');
    chainMaker.arr = [];
    return a;
  },
};
module.exports = chainMaker;
