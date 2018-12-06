
userLogged = {}
idUser = {}
$("#authentication").click(function(event) {
      event.preventDefault();
      let credentials = {
          email: $("#email").val(),
          password: $("#password").val()
        }
        $.post('/signin', credentials)
        .then(response => {
            if(!response){
                console.log('no response');
            }
            console.log(response);
            localStorage.setItem("user", JSON.stringify(response));
            localStorage.setItem("user_id", JSON.stringify(response.user_id));

            userLogged = response;
        })
        .fail(error => {
            if(error.status == 401){
                console.error("invalid username or password");
                alert("invalid username or password");
            } else  {
                 console.log(error);

            } 
        })
     
 });




