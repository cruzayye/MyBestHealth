///////////////////////function to work with date
function startOfWeek(date)
  {
    var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
  
    return new Date(date.setDate(diff));
 
  }


function StartOfWeekConcat(){
     dt = new Date(); 
    var currentWeek = startOfWeek(dt);
    var monthDay = currentWeek.getDate();
    var currentMonth = currentWeek.getMonth();
    var year = currentWeek.getFullYear();

    return `${currentMonth + 1}-${monthDay}-${year}`
        function monthplusDay(){
            return currentMonth + currentWeek;

        }
}

function endOfWeek(date)
  {
    var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 7);
    return new Date(date.setDate(diff));
 
  }

function endOfWeekConCat(){
     dt = new Date(); 
    
    var currentWeek = endOfWeek(dt);
    var monthDay = currentWeek.getDate();
    var currentMonth = currentWeek.getMonth();
    var year = currentWeek.getFullYear();

    return `${currentMonth + 1}-${monthDay}-${year}`

}
