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

$("#exerSubmit, #dietSubmit, #mindSubmit").click(function(event){
  event.preventDefault();
  var d = new Date();
  var n = d.getDate();
  let goal = new Goal({
    what: $('#what').val(),
    howOften: $('#howOften').val(),
    date: n,
    user_id: localStorage.user_id
  })
  console.log(goal);
  goal.insertGoal();
});

$("#exerSubmit").click(function(event){
  event.preventDefault();
  formFlip(exerGoalForm, dietGoalForm);
})

$("#dietSubmit").click(function(event){
  event.preventDefault();
  formFlip(dietGoalForm, mindGoalForm);
})

function retrieveDate(){
   var date1 = new Date();
   var dayOfMonth = date1.getDate();
   var year = date1.getFullYear();
   var month = (date1.getMonth()+1);
   var thisDate = (month + "-" + dayOf + "-" + year);
   console.log(thisDate);
};

function formFlip(firstForm, secondForm){
  $(firstForm).fadeOut();
  $(secondForm).delay(500).fadeIn();
}
