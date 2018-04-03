function load(selectedLink, element) {
    console.log(selectedLink)
    console.log(selectedLink.getAttribute("data-content-url"))
    var url = selectedLink.getAttribute("data-content-url")
    req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);
    //console.log(req.responseText)

    element.innerHTML = req.responseText;
    $("li").removeClass("active")
    selectedLink.classList.add('active')
}



function saveUser() {
    //debugger
    var userObject = {};
    userObject.userName = document.getElementById('user-name').value;
    userObject.userMail = document.getElementById('user-mail').value;
    userObject.pass = document.getElementById('user-pass').value;
    userObject.confPass = document.getElementById('confirm-user-pass').value;
    console.log(userObject)
    var sameValues = (userObject.pass === userObject.confPass);
    if (sameValues && userObject.userName != "") {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("alert-box").innerHTML = this.responseText;
                document.getElementById('alert-box').classList.remove('hidden')
                document.getElementById('alert-box').classList.remove('bg-warning')
                document.getElementById('alert-box').classList.add('bg-success')
            }
        };
        xhttp.open("POST", "https://www.w3schools.com/js/demo_post.asp", true);
        xhttp.send();
    } else { //los passwords no coinciden
        document.getElementById('alert-box').innerHTML = 'Los passwords no coinciden';
        document.getElementById('alert-box').classList.remove('hidden')
        return false
    }
    if (userObject.userName == "") { //el nombre esta vacío
        document.getElementById('alert-box').innerHTML = 'El nombre no puede estar vacío';
        document.getElementById('alert-box').classList.remove('hidden')
        return false
    }
}



var userDatos = {
    "userName":"",
    "userMail":"",
    "pass":"",
    "confPass":"",
    "userStreet":"",
    "userBlock":"",
    "userNumber":"",
    "userIntNumber":"",
    "userDeputation":"",
    "userCity":"",
    "invoiceUserStreet":"",
    "invoiceUserBlock":"",
    "invoiceUserNumber":"",
    "invoiceUserIntNumber":"",
    "invoiceUserDeputation":"",
    "invoiceUserCity":""

}

function completeForm(formToShow,currentBtn){//"#personal-data-form"
    var currentForm = $(currentBtn).closest("form")
    var inputCount = $(currentForm).children(".form-group.has-error").length;
    console.log(inputCount)
    if (formToShow == "#invoice-data-form") {
        DatosFiscales();
    }
    if(inputCount == 0){
        $("#form-wrapper form").addClass("hidden");
        $(formToShow).removeClass("hidden");

        userDatos.userName = document.getElementById('user-name').value;
        userDatos.userMail = document.getElementById('user-mail').value;
        userDatos.pass = document.getElementById('user-pass').value;
        userDatos.confPass = document.getElementById('confirm-user-pass').value;
        userDatos.userStreet = document.getElementById('user-street').value;
        userDatos.userBlock = document.getElementById('user-block').value;
        userDatos.userNumber = document.getElementById('user-number').value;
        userDatos.userIntNumber = document.getElementById('user-int-number').value;
        userDatos.userDeputation = document.getElementById('user-deputation').value;
        userDatos.userCity = document.getElementById('user-city').value;


        //var formIndex = $(currentForm).index();
        setActiveStep()
    } else {
        $("#alert-box").html("No puedes tener campos vacíos").removeClass("hidden");
        setTimeout(function(){$("#alert-box").addClass("hidden")}, 2000);
    }

}

function validateLength(validatingInput){
    var stringLength = $(validatingInput).val().length;
    console.log(stringLength);
    if(stringLength == 0){
        $(validatingInput).closest(".form-group").addClass("has-error")
    } else {
        $(validatingInput).closest(".form-group").removeClass("has-error")
    }

}

function clearError() {
    document.getElementById('alert-box').classList.add('hidden')
}

function setActiveStep(formIndex){
    $(".breadcrumb-step.active:last").next().addClass("active")
}

function getBreadcrumbs(){
    var stepsLength = $("#breadcrumb-wrapper").children(".breadcrumb-step").length
    console.log(stepsLength)
    $("#breadcrumb-wrapper").find(".breadcrumb-step:eq(1)").addClass("active")
}

function toggleChecked(checkbox){
    $(checkbox).toggleClass("checked")
    console.log("bind")
}



function DatosFiscales() {
    let verificacion = document.querySelector('.checkbox-wrapper').classList.contains('checked');

    if (verificacion) {
          
        userDatos.invoiceUserStreet = document.getElementById('user-street').value;
        userDatos.invoiceUserBlock = document.getElementById('user-block').value;
        userDatos.invoiceUserNumber = document.getElementById('user-number').value;
        userDatos.invoiceUserIntNumber = document.getElementById('user-int-number').value;
        userDatos.invoiceUserDeputation = document.getElementById('user-deputation').value;
        userDatos.invoiceUserCity = document.getElementById('user-city').value;

        document.getElementById('invoice-user-street').value = userDatos.invoiceUserStreet;
        document.getElementById('invoice-user-block').value = userDatos.invoiceUserBlock;
        document.getElementById('invoice-user-number').value = userDatos.invoiceUserNumber;
        document.getElementById('invoice-int-number').value = userDatos.invoiceUserIntNumber;
        document.getElementById('invoice-user-deputation').value = userDatos.invoiceUserDeputation;
        document.getElementById('invoice-user-city').value = userDatos.invoiceUserCity;
    }

}

function userAceptance(){
    $("#form-wrapper form").addClass("hidden");
    $("#mostrando-datos").removeClass("hidden");

    let seccion1 = '<td>' + userDatos.userName + '</td><td>' + userDatos.userMail + '</td>';
    let seccion2 = '<td>' + userDatos.userStreet + '</td><td>' + userDatos.userBlock +'</td>';
    seccion2 += '<td>' + userDatos.userNumber + '</td><td>' + userDatos.userIntNumber+ '</td>';
    seccion2 += '<td>' + userDatos.userDeputation + '</td><td>' + userDatos.userCity+ '</td>';
    let seccion3 = '<td>' + userDatos.invoiceUserStreet + '</td><td>' + userDatos.invoiceUserBlock +'</td>';
    seccion3 += '<td>' + userDatos.invoiceUserNumber + '</td><td>' + userDatos.invoiceUserIntNumber+ '</td>';
    seccion3 += '<td>' + userDatos.invoiceUserDeputation + '</td><td>' + userDatos.invoiceUserCity+ '</td>';


    document.getElementById("section1").innerHTML = seccion1;
    document.getElementById("section2").innerHTML = seccion2;
    document.getElementById("section3").innerHTML = seccion3;

}

function terminarCaptura() {
    
// En construcción

}

function iniciarCaptura(){

    // En construcción


}
