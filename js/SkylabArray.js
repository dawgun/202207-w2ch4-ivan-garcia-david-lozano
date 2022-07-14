class SkylabArray {
  constructor(...values) {
    for (let i = 0; i < values.length; i += 1) {
      this[i] = values[i];
    }
    this.length = values.length;
  }

  length(newValue) {
    let counterLength = 0;
    while (newValue[counterLength] !== undefined) {
      counterLength += 1;
    }
    return counterLength;
  }

  push(newElement) {
    const previousIndex = this.length;
    this[previousIndex] = newElement;
  }
}

module.exports = SkylabArray;
