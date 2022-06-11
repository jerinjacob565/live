var name, email, message
function reader() {
    name = document.forms["MyForm"]["name"].value;
    email = document.forms["MyForm"]["email"].value;
    message = document.forms["MyForm"]["message"].value;
    var flag = 1
    let regex = /([a-zA-Z])$/;
    if (regex.test(name) == false) {
        flag = 0;
    }

    regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if (regex.test(email) == false) {
        flag = 0;
        console.log(flag)
    }

    if (flag == 1) {
        message = "Name: " + name + " Email: " + email + " Message: " + message;
        var url = "https://api.telegram.org/bot5339363664:AAHaW0Uyq1_C83HWxqJ23Q5U6lWhvaoVqfk/sendMessage?chat_id=-1001589912941&text=" + message
        var request = new XMLHttpRequest();
        request.open("POST", url, false);
        request.send(null);
        window.location.href = "thankyou.html"
    }
}