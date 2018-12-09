

goals = [];

function Goals(yesObj) {
    this.type = yesObj.type;
    this.what = yesObj.what;
    this.howOften = yesObj.howOften;
    this.dateStart = yesObj.dateStart;
    this.dateEnd = yesObj.dateEnd;
    this.user_id = yesObj.user_id;
    this.goal_id = yesObj.user_id;
    this.percentageBar = function(){
        var yesCount = 2
        var goal = this.howOften;
        var yesToDate = 4;
        var yesPercentage = 100 / goal;
        //need to figure out where to place this code. 

        // if (yesCount <= goal){
        //     document.getElementsByClassName('progress-bar').style.width = Math.round(yesCount / goal * 100) + '%';
        
        //     }  

        var percentage = Math.round(yesToDate+=yesPercentage);
        return percentage;
        

    }
}


Goals.prototype.toHtml = function() {
    var tempFiller = Handlebars.compile( $("#sectionGoal").html() );
  
    var filledTemplate = tempFiller( this ); 
  
    return filledTemplate;
     
    };




Goals.getGoals = function () {
    if (localStorage.goals) {
        Goals.loadAll(JSON.parse(localStorage.goals));
    } else
        //still need to fill in code for localStorage
        $.get('data/goals2.json', showFile);
    function showFile(response) {
        localStorage.setItem("goals", JSON.stringify(response));
        //once we get our data do something with it.
        Goals.loadAll(response);
    }
}

Goals.loadAll = function (rawData) {
    rawData.forEach(function (ele) {
        goals.push(new Goals(ele));
    })
}



function appendGoals() {
    goals.forEach(function(singleGoal){
      $('#goalSection').append(singleGoal.toHtml());
    });
  
  };







function initGoals() {
    Goals.getGoals()
}

initGoals();
appendGoals();














