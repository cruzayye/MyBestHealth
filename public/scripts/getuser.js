
// function User(rawDataObj) {
//     this.name = rawDataObj.name;
//     this.age = rawDataObj.age;
//     this.heightFeet = rawDataObj.heightInches;
//     this.weight = rawDataObj.weight;
// }
//
// User.all = {};

User.prototype.toHtml = function () {
    var tempFiller = Handlebars.compile($('#user-profile').html());
    var filledTemplate = tempFiller(this);
    return filledTemplate;
};

function appendUser() {
  $('#profile-user').append(User.all.toHtml());
};


User.getUser = function () {
    if (localStorage.user) {
        User.loadAll(JSON.parse(localStorage.user));

        appendUser();
    } else
        //still need to fill in code for localStorage
        $.get('data/users.json', showFile);
    function showFile(response) {
        localStorage.setItem("user", JSON.stringify(response));
        //once we get our data do something with it.
        User.loadAll(response);
        appendUser();
    }
}

User.loadAll = function (rawData) {
    rawData.forEach(function (ele) {
        User.all = new User(ele);
    })
}



function init() {
    User.getUser()
}

init();
