$("#submitButton").click(function(e){
  e.preventDefault();
  var formData = $("#personalForm").serializeArray();
  var jasonData = JSON.stringify(formData);
  console.log(jasonData);
  formFlip();
});

function formFlip(firstForm, secondForm){

}
