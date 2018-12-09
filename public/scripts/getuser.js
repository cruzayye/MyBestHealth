
// function User(rawDataObj) {
//     this.name = rawDataObj.name;
//     this.age = rawDataObj.age;
//     this.heightFeet = rawDataObj.heightInches;
//     this.weight = rawDataObj.weight;
// }

// User.all = {};

User.toHtml = function () {
    var tempFiller = Handlebars.compile($('#user-profile').html());
    var filledTemplate = tempFiller(this);
    return filledTemplate;
};

function appendUser() {
  $('#profile-user').append(User.toHtml());
};


User.getUser = function (callback) {
  let identification = {localId: localIdentification()};
    if (localStorage.user) {
      User.loadAll(JSON.parse(localStorage.user));
      appendUser();
    } else
    $.post('/loginCheck', identification).then(
    function (result){
      console.log(result[0]);
      localStorage.setItem("user", JSON.stringify(result[0]));
      //once we get our data do something with it.
      User.loadAll(result);
      appendUser();
    });
}

User.loadAll = function (rawData) {
  rawData.forEach(function (ele) {
    User.all = new User(ele);
  })
}



// function init() {
//     User.getUser()
// }
//
// init();
