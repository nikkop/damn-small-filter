(function(){

  this.SmallFilter = function(options){
    this.options = options;
  };

  SmallFilter.prototype.filter = function() {
    var query = this.options.query;
    var items = this.options.items;

    return items.filter(filteredItems);

    function filteredItems(item) {
      return Object.keys(query).every(isMatchingType, item);
    };

    function isMatchingType(type) {
      return this[type].some(isMatchingSome, type);
    };

    function isMatchingSome(item) {
      return query[this].indexOf(item) >= 0 || query[this] == 0;
    };

  };

}());
