
const url = 'https://geekshubs-b97d3.firebaseio.com/viajesJGR.json'

$( function() {

	$('form').submit( function(event) {
		event.preventDefault();
		console.log(event);
		let formData = {
			'destino' : $('input[name=destino]').val(),
			'cost' : $('input[name=cost]').val(),
			'oferta' : $('input[name=oferta]').val(),
			'imagen' : $('input[name=imagen]').val()
		};
		formData = JSON.stringify(formData);

		localStorage.setItem('objTemporal', formData);
		postAJAX(formData);
		
	});


});


var postAJAX = function (data) {

	$.ajax({
		type:'POST',
		url: url,
		data: data
	})
	// .done(function (success) {
	// 	console.log(success);
	// 	successPOST(success.name);
	// })
	// .fail(function (error) {
	// 	console.log(error);
	// 	alert('ocurrio un error');
	// });
}

var getAJAX = function () {

	$.ajax({
		type:'GET',
		url: url

	})

		.done(function (success) {
		console.log(success);
		successGET(success.name);
	})
		.fail(function (error) {
		console.log(error);
		alert('ocurrio un error');
	})
}



var deleteAJAX = function (key) {

      $.ajax({
		type: 'DELETE',
		url: 'https://geekshubs-b97d3.firebaseio.com/viajesJGR/' + key + '.json',
		
	  })
	  .done(function (success) {
		console.log(success);
	})
		.fail(function (error) {
		console.log(error);
		alert('ocurrio un error');
	})
    }


var putAJAX = function (key, value) {

	
		$.ajax({
		  type: 'PATCH',
		  url: 'https://geekshubs-b97d3.firebaseio.com/viajesJGR/' + key + '.json',
		  data: JSON.stringify(value)
		})

		.done(function (success) {
		  console.log(success);
	  })
		  .fail(function (error) {
		  console.log(error);
		  alert('ocurrio un error');
	  })
	
	}
  
