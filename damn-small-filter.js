(function(){

  this.SmallFilter = function(query, items){
    this.query = query;
    this.items = items;
  };

  SmallFilter.prototype.filter = function() {
    var query = this.query;
    var items = this.items;

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
