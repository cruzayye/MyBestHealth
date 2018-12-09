
var yesCount = 0;
var goal = 3 //user goal
var yesPercentage = 0;
var yesIncrement = 100 / goal;

function yesButton(){
$('.yes').on('click', function(){
    yesCount++;
    // console.log(yesPercentage+=14.28);
    console.log(yesCount);
    $.post('/addYes', {goal_id: this.id, days_yes: retrieveToday()})
    console.log(this.id);
    $('#' + this.id).fadeOut();
    //progress bar
    if (yesCount <= goal){
    document.getElementById('progress-bar').style.width = Math.round(yesCount / goal * 100) + '%';
    }
    //percentage
    var percentage = Math.round(yesPercentage+=yesIncrement);
    console.log(percentage);
    $("#percentage").text(percentage + "%");
})
};

function noButton(){
  $('.no').on('click', function(){
    console.log("no");
    var date1 = new Date();
    var HourOfDay = date1.getHours();
    console.log(HourOfDay);
    $.getJSON('http://quotes.rest/qod').
    then(data => {
      qod = data;
      console.log(data.contents.quotes[0].quote);
      console.log(data);
      $('#quote').text(data.contents.quotes[0].quote);
    })
  })
};

function buttonInit(){
  yesButton();
  noButton();
}

buttonInit();

