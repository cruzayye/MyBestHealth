function User(rawDataObj){
  Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
};

User.all = [];

// var localIdentification = 1;

var localIdentification = function(){
  const checkstring = localStorage.getItem('user_id');
  return(checkstring);
};

User.prototype.insertRecord = function(callback) {
  console.log('posting data.')
  $.post('/users', {name: this.name, age: this.age, heightFeet: this.heightFeet, heightInches: this.heightInches, weight: this.weight, email:this.email, password: this.password})
  .then(
    function(result){
      console.log('hi!');
      localStorage.setItem('user_id', JSON.stringify(result[0].user_id))
    });
};

User.prototype.getFromDB = function(callback) {
  let identification = {localId: localIdentification()}
  console.log(identification)
  $.post("/loginCheck", identification)
  .then(function(result) {
    console.log(result[0].age);
    if (callback) callback();
  });
};
