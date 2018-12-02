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
  // var formData = $("#personalForm").serializeArray();
  // var jasonData = JSON.stringify(formData);
  // console.log(jasonData);
  user.insertRecord();
  formFlip(personalForm, goalForm);
});

function formFlip(firstForm, secondForm){
  $(firstForm).fadeOut();
  $(secondForm).delay(500).fadeIn();
}
