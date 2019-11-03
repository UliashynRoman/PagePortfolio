function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    // TODO:
    $('form').on('submit' , (e) => {
        e.preventDefault();

        console.log("Nice");
        const email = $('#email').val().trim();
        const subject = $('#subject').val().trim();
        const text = $('#text').val().trim();

        data = {
            email,
            subject,
            text
        };
        if(email != "" && validateEmail(email)){
            console.log(email + " is valid")
            $.post('/email',data,function() {
               console.log('Server recieved our data');
           }); 
        }
        else{
            console.log(email + " is not valid")
        }
    });