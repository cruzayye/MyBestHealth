function Goal(rawDataObj){
  Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
}

Goal.all = [];

goals = [];

goalIds = [];

goalsDone = [];

doneIds = [];

Goal.prototype.insertGoal = function(callback) {
  $.post('/goals', {what: this.what, howMuch: this.howMuch, startDate: this.startDate, user_id: this.user_id, type:goalType[goalsEntered-1]})
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

// the following function checks our database for goals matching the user's user_id, then writes them to local storage
Goal.prototype.checkGoals = function(callback) {
  let identification = {localId: localIdentification};
  $.post("/goalCheck", identification)
  .then(function(result) {
    result.forEach(function(item){
      goals.push(new Goal(item));
    })
    localStorage.setItem("goals", JSON.stringify(result));
    if (callback) callback();
    })
};

Goal.prototype.toHtml = function() {
  var template = Handlebars.compile($("#goalQuestionTemplate").text());
  return template(this);
  yesButton();
  noButton();
};

//the following function will check as to whether the user has completed a goal today.
Goal.prototype.checkToday = function() {
  var dateToday = retrieveToday();
  goals.forEach(function(goal){
    $.post("/yesCheck", {dateToday: dateToday, goal_id: goal.goal_id})
    .then(function(result){
      console.log(result);
      result.forEach(function(item){
        console.log(item.goal_id);
        goalsDone.push(new Goal(item));
      })
    })
  })
}

Goal.prototype.filterIds = function(){
  goals.forEach(function(obj){
    goalIds.push(obj.goal_id.toString());
  })
}

Goal.prototype.filterTodayIds = function(){
  goalsDone.forEach(function(obj){
    doneIds.push(obj.goal_id);
  })
}

Goal.prototype.filterOutToday = function(){
  var toDraw = goalIds.filter((e) => !doneIds.includes(e));
  return(toDraw);
}



Goal.prototype.sayHi = function(){
  console.log('hi!');
}

// Goal.prototype.checkGoals();
// Goal.prototype.checkToday();
// Goal.prototype.filterIds();
// Goal.prototype.filterTodayIds();
