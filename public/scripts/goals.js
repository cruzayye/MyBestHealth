function Goal(rawDataObj){
  Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
}

Goal.all = [];

Goal.prototype.insertRecord = function(callback) {
  $.post('/goals', {what: this.what, howMuch: this.howMuch, howOften: this.howOften, dateStart: })
  .then(callback);
};
