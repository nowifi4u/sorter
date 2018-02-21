class Sorter {
  constructor() {
      this.array = []
      this.comparator = function(a, b) {
          return a - b
      }
  }

  add(element) {
      this.array.push(element)
  }

  at(index) {
      return this.array[index]
  }

  get length() {
      return this.array.length
  }

  toArray() {
      return this.array
  }

  sort(indices) {
      let temp = []
      for (let i = 0; i < indices.length; i++){
          temp.push(this.array[indices[i]])
      }
      indices.sort()
      temp.sort(this.comparator)
      for (let i = 0; i < indices.length; i++){
          this.array[indices[i]] = temp[i]
      }
  }

  setComparator(compareFunction) {
      this.comparator = compareFunction;
  }
}

module.exports = Sorter;
