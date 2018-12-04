function Goal(rawDataObj){
  Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
}

Goal.all = [];

Goal.prototype.insertGoal = function(callback) {
  $.post('/goals', {what: this.what, howMuch: this.howMuch, startDate: this.startDate, user_id: this.user_id})
  .then(callback);
};

goalTypes = ['exercise', 'diet', 'mind'];

goalTypes.forEach(function(element){
  
})
