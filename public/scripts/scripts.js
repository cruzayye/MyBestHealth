page = {};

page.showPrompts = function() {
  goals.forEach(function(goal){
    $("#logZone").append(goal.toHtml())
  });
  buttonInit();
}

$("#submitButton").click(function(event){
  event.preventDefault();
  const form = {
    name: $('#name').val(),
    age: $('#age').val(),
    weight: $('#weight').val(),
    heightFeet: $('#heightFeet').val(),
    heightInches: $('#heightInches').val(),
    email: $('#email').val(),
    password: $('#password').val(),
  };
  var falseForFull = (Object.keys(form).some(input => !form[input]));
  if (falseForFull){
    return $("#emptyError").text('Please fill out the entire form!');
  }
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
  const selections = {
    what: $('#what').val(),
    howOften: $('#howOften').val(),
  }
  var falseForFull = (Object.keys(selections).some(input => !selections[input]));
  if (falseForFull){
    $("#emptyGoal").text(`Please pick a goal. You can skip ahead for now if you don't want to pick a ${goalTypes[goalsEntered-1]} goal.`);
    return;
  }
  var startDate = retrieveToday();
  let goal = new Goal({
    type: goalTypes[(goalsEntered - 1)],
    what: $('#what').val(),
    howOften: $('#howOften').val(),
    startDate: startDate,
    user_id: localStorage.user_id
  })
  console.log(goal);
  if (this.id = "goalSubmit"){
    swapPrompt(goalsEntered);
  }
  goal.insertGoal();
});

$("#goalSubmit").click(function(event){
});

$("#finalSubmit").click(function(event){
  event.preventDefault();
  window.location.replace('/profile.html');
});

$("#skipButton").click(function(event){
  event.preventDefault();
  if (goalsEntered < 3){
  swapPrompt(goalsEntered);
  }
  else {
    window.location.replace('/profile.html');
  };
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
