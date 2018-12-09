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

function Goals(goalObj) {
    this.type = goalObj.type;
    this.what = goalObj.what;
    this.howOften = goalObj.howOften;
    this.dateStart = goalObj.dateStart;
    this.dateEnd = goalObj.dateEnd;
    this.user_id = goalObj.user_id;
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



/////get yes


////CLICK FUNCTIONS




$(".categories").on('click', 'button', function() {

    // $('#projectSection').children().hide();
  
    // $('#projectSection').css('display', 'block');
    let data = $(this).data('type');//takes the value of the div ex: data-project = "Bus Mall"
    console.log(data);
    // $('[data-project="' + data + '"]').show();
    
    //make a loop that goes over the data attr and matches the name of the array in order to display. 
    goals.forEach(function(goal) {
      if(goal.type == data){
        //  $('#projectSection').children('[data-project="' + data + '"]').fadeIn();
        console.log(goal);  
        // $('#projectSection').focus();
  
  
        
      }  
    });
  });
  
  const setTakeAwayList = () => {
    const $projectsList = projectsArray.map(tAways => {
      const $TaItems = tAways.takeAways.map(ta => $('<li>').text(ta));
      const $taList = $('<ul>').append($TaItems);
      return $('<li>').append($taList);
  
    });
    $('.takeAways').append($projectsList);
  
  }
