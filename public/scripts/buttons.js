
var yesCount = 0;


function yesButton(){
$('.yes').on('click', function(){
    yesCount++;
    console.log(yesCount);

    var date1 = new Date();
    var dayOfMonth = date1.getDate();
    var year = date1.getFullYear();
    var month = date1.getMonth();
    console.log(`${month} ${dayOfMonth}, ${year}`);


})
};

function noButton(){
$('.no').on('click', function(){
    console.log("no");
    var date1 = new Date();
    var HourOfDay = date1.getHours();
    console.log(HourOfDay);
    if(HourOfDay <= 17){
        $('#quote').text('you still got plenty of hours in the day left!');


    } else{
    $.getJSON('http://quotes.rest/qod').
    then(data => {
        qod = data;
        console.log(data.contents.quotes[0].quote); 
        console.log(data);
        $('#quote').text(data.contents.quotes[0].quote);
    })
    }



})
};



yesButton();
noButton();











