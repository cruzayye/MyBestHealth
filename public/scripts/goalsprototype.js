//
//
// goals = [];
//
// function Goals(yesObj) {
//     this.type = yesObj.type;
//     this.what = yesObj.what;
//     this.howOften = yesObj.howOften;
//     this.dateStart = yesObj.dateStart;
//     this.dateEnd = yesObj.dateEnd;
//     this.user_id = yesObj.user_id;
//     this.goal_id = yesObj.user_id;
//     this.percentageBar = function(){
//         var yesCount = 2
//         var goal = this.howOften;
//         var yesPercentage = 4;
//         var yesIncrement = 100 / goal;
//         //need to figure out where to place this code.
//
//         // if (yesCount <= goal){
//         //     document.getElementsByClassName('progress-bar').style.width = Math.round(yesCount / goal * 100) + '%';
//
//         //     }
//
//         var percentage = Math.round(yesPercentage+=yesIncrement);
//         return percentage;
//
//
//     }
// }

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
