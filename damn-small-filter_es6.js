(function(){

  this.SmallFilter = class SmallFilter {
    constructor(options) {
      this.options = options

      this.filter = (query = this.options.query, items =  this.options.items) => {

          function filteredItems(item) {
            return Object.keys(query).every(isMatchingType, item)
          }

          function isMatchingType(type) {
            return this[type].some(isMatchingSome, type)
          }

          function isMatchingSome(item) {
            return query[this].indexOf(item) >= 0 || query[this] == 0;
          }

          return items.filter(filteredItems)
      }
    }
  }
}());
