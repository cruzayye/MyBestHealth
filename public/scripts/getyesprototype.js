const yes = [];

function Yes(yesObj) {
    this.days_yes = yesObj.days_yes;
    this.goal_id = yesObj.goal_id;
}


Yes.prototype.toHtml = function() {
    var tempFiller = Handlebars.compile( $("#sectionGoal").html() );
  
    var filledTemplate = tempFiller( this ); //this is referring to?
  
    return filledTemplate;
     
    };
  

Yes.getYes = function () {
    if (localStorage.yes) {
        Yes.loadAll(JSON.parse(localStorage.yes));

        // appendYes();
    } else
        //still need to fill in code for localStorage
        $.get('data/dates_yes.json', showFile);
    function showFile(response) {
        localStorage.setItem("yes", JSON.stringify(response));
        //once we get our data do something with it.
        Yes.loadAll(response);
        // appendYes();
    }
}

Yes.loadAll = function (rawData) {
    rawData.forEach(function (ele) {
        yes.push(new Yes(ele));
    })
}

Yes.getYes();



function appendYes() {
    Yes.forEach(function(project){
      $('#Yesection').append(project.toHtml());
    });
  
  };