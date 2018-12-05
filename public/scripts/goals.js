function Goal(rawDataObj){
  Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
}

Goal.all = [];

Goal.prototype.insertGoal = function(callback) {
  $.post('/goals', {what: this.what, howMuch: this.howMuch, startDate: this.startDate, user_id: this.user_id})
  .then(callback);
};

goalTypes = ['exercise', 'diet', 'mind'];

goalsEntered = 1;

function swapPrompt(e){
  $("#goalSpan, #goalForm").fadeOut(1000, function(){
    $("#goalForm").trigger("reset");
    $("#promptZone").text(goalTypes[e]);
    $("#emptyGoal").text('')
    $("#goalSpan, #goalForm").fadeIn();
  });
  goalsEntered++;
  console.log(goalsEntered);
  if (goalsEntered == 3){
      console.log('It\'s three!');
      $("#goalSubmit").hide();
      $("#finalSubmit").show();
  };
};
