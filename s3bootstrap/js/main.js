$( document ).ready(function(){
// 	var registeredName = localStorage.getItem("userName");
// 	console.log("Registered Name "+registeredName)

// 	if(!registeredName){
// 		//alert("No has registrado un nombre")
// 	} else {
// 		$("#name-receiver").text(registeredName)
// 	}


});

var destinos = [{
    "id": 0,
	"nombre": "israel",
	"destino":"MExico",
    "precio": 0
}, {
    "id": 1,
	"nombre": "oscar",
	"destino": "Paris",
    "precio": 20
}, {
    "id": 2,
	"nombre": "javier",
	"destino": "Moscu",
    "precio": 30
}, {
    "id": 3,
	"nombre": "paquirri",
	"destino": "Tokio",
    "precio": 40
}];


// function printName(){
// 	//var selectedInput = $("#user-name")
// 	var name = $("#user-name").val();
// 	console.log(name);
// 	$("#name-receiver").text(name);
// 	localStorage.setItem("userName",name);

// }

// function inversePrintName(){
// 	debugger
// 	var name = $("#name-receiver").text();
// 	console.log(name);
// 	$("#user-name").val(name)
// }

// function styleName(referencia){
// 	var parentDiv = $(referencia).closest("#myForm")
// 	$(parentDiv).css({
// 		"background":"lightblue"
// 	})
// 	$(parentDiv).find("p").css({
// 		"border":"1px solid black"
// 	})
// 	$(parentDiv).find("#anotherId").text("I'm another Id")
// 	//console.log(parentForm)
// }

// function createDestiny(destinos){
// 	var panelHtml ="";
// 	/*funcion para iterar entre los diferentes destinos y pintarlos en el Dom*/

// 	for (i=0; i < destinos.length; i++) {
// 		console.log("Entramos a la función de pintar");
		
// 		var panelHtml = ("<p>Destino:" + $(destinos[i]).text(nombre) + "</p>");
// 		$("#destiny-wrapper").append(panelHTML);
// 	}
// }

function registro() {}




function cambiosHTML(){ 
		for (var i = 0; i < destinos.length; i++) { 
			console.log("Entramos a función");
			
			let agregaHTML = "<div class=\"panel panel-default\"><div class=\"panel-body recargado\">";
			agregaHTML += "<p>"+destinos[i].id+"</p><p>"+destinos[i].nombre;
			agregaHTML += "</p><p>"+destinos[i].destino+"</p><p>"+destinos[i].precio;
			agregaHTML += "</p></div></div>";
			console.log(agregaHTML);
			
			$("#destiny-wrapper").append(agregaHTML);

		};
};


/*Remind parameters*/
//sintaxis jquery que recibe un identificador para saber a donde imprimirá los elementos de cada objeto del arreglo
//append es un metodo de jquery para manipular el dom, 
//en este caso se uso para imprimir 
//elementos html en un identificador especifico
//jquery recibe html mediante strings por lo que se utiliza el +
//para concatenar
// se concatena cada elemento del objeto para que se imprima cadq uno
//de forma independiente 
