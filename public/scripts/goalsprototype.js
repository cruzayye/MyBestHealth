
Goal.prototype.toSectionHtml = function() {
  var tempFiller = Handlebars.compile( $("#sectionGoal").html() );
  var filledTemplate = tempFiller( this );
  return filledTemplate;
};

Goal.getGoals = function () {
  if (localStorage.goals) {
    Goal.loadAll(JSON.parse(localStorage.goals));
  } else
    Goal.prototype.checkGoals();
}

Goal.loadAll = function (rawData) {
  rawData.forEach(function (ele) {
      goals.push(new Goal(ele));
  })
}

function appendGoals() {
  goals.forEach(function(singleGoal){
    $('#goalSection').append(singleGoal.toSectionHtml());
  });
};

function initGoals() {
  Goal.getGoals()
}

initGoals();
appendGoals();





////CLICK FUNCTIONS

///////////////////////////////////////////////get yes




//   function compareIds(){
//     yes.forEach(function(id){
//         if (id.goal_id == goals.goal_id){
//             console.log(yes.length);
//         }

//     });

// }

// console.log(Object.is(goals.goal_id, yes.goal_id));
