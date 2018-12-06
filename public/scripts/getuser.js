
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




    //well need this since it has a function if theres something in local storage.
// Article.fetchAll = function() {
//     if (localStorage.rawData) {
//       // When rawData is already in localStorage,
//       // we can load it with the .loadAll function above,
//       // and then render the index page (using the proper method on the articleView object).
//       Article.loadAll(JSON.parse(localStorage.rawData)); //TODO: What do we pass in to loadAll()?
//       articleView.initIndexPage();
//       console.log('string');
//       //TODO: What method do we call to render the index page?
//     } else {





//         // TODO: When we don't already have the rawData,
//         // we need to retrieve the JSON file from the server with AJAX (which jQuery method is best for this?),
//         // cache it in localStorage so we can skip the server call next time,
//         // then load all the data into Article.all with the .loadAll function above,
//         // and then render the index page.
//         $.get('data/hackerIpsum.json', showFile);

//         function showFile(response) {

//         localStorage.setItem("rawData", JSON.stringify(response));
//         Article.loadAll(response);
//         articleView.initIndexPage();
//         }
//       }
//     }
