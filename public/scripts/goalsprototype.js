//creating this since I dont have any goals in my database and when i create a gaol from the form its not registering either | for now were using json data
//BE SURE TO FILL IN ACTUAL GOAL FILE IN PROFILE.HTML
//ALSO, OF MERGING CONFILICTS I HAD TO CREATE PROTOTYPES FOR JSON FILES...
// {
//     "type": "exercise",
//     "what": "run",
//     "howOften": "3",
//     "dateStart":"",
//     "dateEnd":"",
//     "user_id":"1"
//     },

goals = [];

function Goals(yesObj) {
    this.type = yesObj.type;
    this.what = yesObj.what;
    this.howOften = yesObj.howOften;
    this.dateStart = yesObj.dateStart;
    this.dateEnd = yesObj.dateEnd;
    this.user_id = yesObj.user_id;
    this.goal_id = yesObj.user_id;
}


Goals.prototype.toHtml = function() {
    var tempFiller = Handlebars.compile( $("#sectionGoal").html() );
  
    var filledTemplate = tempFiller( this ); //this is referring to?
  
    return filledTemplate;
     
    };
  

Goals.getGoals = function () {
    if (localStorage.goals) {
        Goals.loadAll(JSON.parse(localStorage.goals));

        // appendGoals();
    } else
        //still need to fill in code for localStorage
        $.get('data/goals2.json', showFile);
    function showFile(response) {
        localStorage.setItem("goals", JSON.stringify(response));
        //once we get our data do something with it.
        Goals.loadAll(response);
        // appendGoals();
    }
}

Goals.loadAll = function (rawData) {
    rawData.forEach(function (ele) {
        goals.push(new Goals(ele));
    })
}



function appendGoals() {
    goals.forEach(function(project){
      $('#goalSection').append(project.toHtml());
    });
  
  };







function initGoals() {
    Goals.getGoals()
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








