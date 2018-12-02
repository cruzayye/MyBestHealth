function User(rawDataObj){
  Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
};

User.all = [];

User.prototype.insertRecord = function(callback) {
  $.post('/users', {name: this.name, age: this.age, heightFeet: this.heightFeet, heightInches: this.heightInches, weight: this.weight, email:this.email, password: this.password})
  .then(callback);
};
