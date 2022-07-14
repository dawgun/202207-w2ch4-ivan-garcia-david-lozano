class SkylabArray {
  constructor(...values) {
    for (let i = 0; i < values.length; i += 1) {
      this[i] = values[i];
    }
    this.length = values.length;
  }

  push(newElement) {
    const previousIndex = this.length;
    this[previousIndex] = newElement;
    this.length += 1;
  }
}

export default SkylabArray;
