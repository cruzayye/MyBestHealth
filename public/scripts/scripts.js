page = {};

$("#submitButton").click(function(event){
  event.preventDefault();
  let user = new User({
    name: $('#name').val(),
    age: $('#age').val(),
    weight: $('#weight').val(),
    heightFeet: $('#heightFeet').val(),
    heightInches: $('#heightInches').val(),
    email: $('#email').val(),
    password: $('#password').val(),
  })
  console.log(user);
  user.insertRecord();
  formFlip(personalForm, exerGoalForm);
});

$("#goalSubmit, #finalSubmit").click(function(event){
  event.preventDefault();
  var startDate = retrieveToday();
  let goal = new Goal({
    type: goalTypes[(goalsEntered - 1)],
    what: $('#what').val(),
    howOften: $('#howOften').val(),
    startDate: startDate,
    user_id: localStorage.user_id
  })
  console.log(goal);
  goal.insertGoal();
});

$("#goalSubmit").click(function(event){
  event.preventDefault();
  swapPrompt(goalsEntered);
});

$("#finalSubmit").click(function(event){
  event.preventDefault();
  window.location.replace('/profile.html')
});

function retrieveToday(){
   var date1 = new Date();
   var dayOfMonth = date1.getDate();
   var year = date1.getFullYear();
   var month = (date1.getMonth()+1);
   var thisDate = (month + "-" + dayOfMonth + "-" + year);
   return(thisDate);
};

function formFlip(firstForm, secondForm){
  $(firstForm).fadeOut();
  $(secondForm).delay(500).fadeIn();
}
