
function load(selectedLink, element) {

    console.log(selectedLink);
    console.log(selectedLink.getAttribute("data-content-url"));

    var url = selectedLink.getAttribute("data-content-url");
    
    req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);

  
    element.innerHTML = req.responseText;
    let cambio = document.getElementsByClassName('active');
    
    // 'cambio' es un Objeto, con solo un elemento, con una propiedad "class",que con este setter podemos finalmente remover la clase 'active'
   
    cambio[0].classList.remove('active');


    // $("li").removeClass("active");  ESTE FUE EL TEXTO DE LA CLASE


    selectedLink.classList.add('active');

}

var userObject = {};

function saveUser() {

    userObject.userName = document.getElementById('user-name').value;    
    userObject.userMail = document.getElementById('user-mail').value;
    userObject.pass = document.getElementById('user-pass').value;
    userObject.confPass = document.getElementById('confirm-user-pass').value;

    console.log(userObject);
    

    var sameValues = (userObject.pass === userObject.confPass);
    
    let caso = 0;
    let reg =/[@]/;
    let datos = userObject.userMail;
    console.log(typeof(datos));
    console.log(datos);
    
    
    let result = reg.test(userObject.userMail);
    console.log(result);

    if (userObject.userName === ""){
        caso = 1;
    } else if (userObject.userMail === "" || !result) {
        caso = 2;
    } else if (userObject.pass === "" || userObject.confPass === ""){
        caso = 3;
    } else if (userObject.pass !== userObject.confPass) {
        caso = 4;
    } else {
        successfulRegister();
        document.getElementById("registroForm").reset();
        return;
    }

    alerta(caso);

}


function alerta(caso){
    let cajaAlerta = document.getElementById('alert-box');

   if (caso === 1){
        cajaAlerta.innerHTML = "<hr><p class=\"text-center\">No capturaste tu nombre</p>";
    } else if (caso === 2){
        cajaAlerta.innerHTML = "<hr><p class=\"text-center\">No capturaste un correo válido</p>";
    } else if (caso === 3){
        cajaAlerta.innerHTML = "<hr><p class=\"text-center\">No capturaste una contraseña!</p>";
    } else if (caso === 4) {
        cajaAlerta.innerHTML = "<hr><p class=\"text-center\">Tu contraseña no coincide</p>";
    } else {
        return;
    }
   
    cajaAlerta.classList.remove('hidden');

    setTimeout(function(){cajaAlerta.classList.add('hidden')}, 3000);

    return;

}

function successfulRegister() {
    
    let url = "https://www.w3schools.com/js/demo_post.asp";
    let resultados = document.getElementById('alert-box');
    let req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("alert-box").innerHTML = this.responseText;
        resultados.classList.remove("hidden");
      }
    };
    req.open("POST", url, false);
    req.send(JSON.stringify(userObject));

    setTimeout(function(){resultados.classList.add('hidden')}, 3000);
    alert("usuario registrado");
    

}
