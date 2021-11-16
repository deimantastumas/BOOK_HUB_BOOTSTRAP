function signup_request(){
    var request={
        name: document.getElementById("name-field").value,
        email: document.getElementById("email-field").value,
        password: document.getElementById("password-field").value
    };

    window.alert(request.name + " " + request.email + " " + request.password);
    return request;
}

function signIn_request(){
    var request={
        email: document.getElementById("email-field").value,
        password: document.getElementById("password-field").value
    };

    window.alert(request.name + " " + request.email + " " + request.password);
    return request;
}


//SEND REGISTRATION REQUEST
$('#submit-btn').on('click', function(){
    var request= signup_request();

    $.ajax({
        type: "POST",
        url: 'http://localhost:8100/api/v1/registration',
        data: JSON.stringify(request),
        contentType: "application/json; charset=utf-8",
        success:function(response){
            window.alert("REQUEST HAS BEEN ACCEPTED.")
            window.location.replace("confirmation-page.html");
        },
        error: function(){
            console.log("ERROR. COULD NOT SEND REGISTRATION REQUEST.");
        }
    })
})

//SEND CONFIRMATION CODE
$('#confirm-btn').on('click', function(){
    
    var confirmation_code={code: document.getElementById("confirmation-field").value};
    console.log(confirmation_code);

    $.ajax({
        type: "POST",
        url: 'http://localhost:8100/api/v1/confirm',
        data: JSON.stringify(confirmation_code),
        contentType: "application/json; charset=utf-8",
        success:function(response){
            window.alert("ACCOUNT HAS BEEN APPROVED.")
            window.location.replace("http://127.0.0.1:8887//index.html");
        },
        error: function(){
            console.log("ERROR. COULD NOT SEND CONFIRMATION CODE.");
        }
    })
})

//SEND LOGIN REQUEST
$('#login-btn').on('click', function(){
    var request= signIn_request();

    $.ajax({
        type: "POST",
        url: 'http://localhost:8100/api/v1/login',
        data: JSON.stringify(request),
        contentType: "application/json; charset=utf-8",
        success:function(response){
            window.alert("REQUEST HAS BEEN ACCEPTED.")
            window.location.replace("index.html");
        },
        error: function(){
            console.log("ERROR. COULD NOT SEND LOGIN REQUEST.");
        }
    })
})