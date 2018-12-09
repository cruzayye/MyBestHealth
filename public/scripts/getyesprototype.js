const yes = [];

function Yes(yesObj) {
    this.days_yes = yesObj.days_yes;
    this.goal_id = yesObj.goal_id;
}


Yes.prototype.toHtml = function() {
    var tempFiller = Handlebars.compile( $("#sectionGoal").html() );

    var filledTemplate = tempFiller( this );

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



////////////////status bar

// goals.statusBar = function() {
//     var goal = this.howOften;
//     var yesPercentage = 4;
//     var yesIncrement = 100 / goal;

//     var percentage = Math.round(yesPercentage+=yesIncrement);
//     console.log(percentage);
//     $(".percentage").text(percentage + "%");

//     };

//     goals.statusBar()





// attempted to push goals clicked goal type here so we could  use the next line of code which compars values.
// console.log(Object.is(goals.goal_id, yes.goal_id));


// var theseGoals = []
// var theseGoalsYes = 0;
//


$(".categories").on('click', 'button', function() {
    // theseGoals = [];
    $('#goalSection').children().hide();
    $('#goalSection').css('display', 'block');
    let data = $(this).data('type');
    // console.log(data);
    goals.forEach(function(goal) {
      if(goal.type == data){
         $('#goalSection').children('[data-type="' + data + '"]').fadeIn();
        // console.log(goal);
        theseGoals.push(goal);
        // $('#projectSection').focus();
      }
    });




  });
