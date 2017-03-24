(function(){
  
  this.SmallFilter = function(options){
    this.options = options;
  };

  SmallFilter.prototype.filter = function() {
    var query = this.options.query;
    var items = this.options.items;
    var operator = this.options.operator;

    return items.filter(filteredItems);

    function filteredItems(item) {
      return Object.keys(query).every(isMatchingType, item);
    }

    function isMatchingType(type) {
      if (!validateInput(type)) throw new Error('Not a valid operator');

      var obj = {item: this, type: type};

      if (operator == '&&') {
        return query[type].every(isMatching, obj);
      } else if (operator == '||' || operator == undefined) {
        return query[type].some(isMatching, obj);
      }
    }

    function isMatching(item) {
      return this.item[this.type].indexOf(item) >= 0;
    }

    function validateInput(input) {
      var validInputs = ['&&', '||'];
      return validInputs.indexOf(input) !== -1;
    }
  };
}());
