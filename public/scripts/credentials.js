

$("#authentication").click(function(event) {
      event.preventDefault();
      console.log("something");
      let credentials = {
          email: $("#email").val(),
          password: $("#password").val()
        }
        $.post('/signin', credentials)
        .then(response => {
            console.log(response);
        })
 });




