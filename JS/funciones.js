document.addEventListener('DOMContentLoaded', function ()
{

if (Notification.permission !== "granted")
{
Notification.requestPermission();
}

});

$(document).ready(function() {
  // Obtener el campo de fecha y hora
  var dateTimeField = $('#fecha-hora');

  // Actualizar el campo de fecha y hora cada segundo
  setInterval(function() {
    var date = new Date();
    var dateString = date.toLocaleDateString();
    var timeString = date.toLocaleTimeString();
    dateTimeField.val(dateString + ' ' + timeString);
  }, 1000);

  // Manejar el envío del formulario
  $('#commentform').submit(function(event) {
    event.preventDefault(); // prevenir que se envíe el formulario por defecto

    // Obtener los valores de los campos del formulario
    var name = $('#name').val();
    var comment = $('#comment').val();
    var dateTime = $('#fecha-hora').val();
    var email = $('#email').val();

    // Crear un nuevo elemento de comentario
    var newComment = $('<div>').addClass('comment');
    var commentHeader = $('<div>').addClass('comment-header');
    var commentAuthor = $('<h4>').addClass('comment-autor').text(name);
    var commentDate = $('<span>').addClass('comment-fecha').text(dateTime);
    var commentText = $('<p>').addClass('comment-text').text(comment);
    var commentEmail = $('<p>').addClass('comment-text').text(email);

    // Agregar el encabezado y el contenido del comentario al elemento de comentario
    commentHeader.append(commentAuthor).append(commentDate);
    newComment.append(commentHeader).append(commentEmail).append(commentText);

    // Agregar el nuevo comentario al contenedor de comentarios y restablecer el formulario
    $('#comments').prepend(newComment);
    $('#commentform')[0].reset();
  });

  $('#formmreserva').submit(function(event) {
    event.preventDefault(); // prevenir que se envíe el formulario por defecto

    // Obtener los valores de los campos del formulario

    var name = $('#name').val();
    var tel = $('#numerotel').val();
    var email = $('#correoelec').val();
    var date = $('#fechainput').val();
    var numpeople = $('#numpersonasselect').val();
    var sectionn = $('#seccionpreferida').val();
    var request = $('#solicitudesp').val();

    // Crear un nuevo elemento de comentario
    var newReceipt = $('<div>').addClass('recibo1');
    var receiptHeader = $('<div>').addClass('comment-header');
    var receiptName = $('<h4>').addClass('receipt-name').text('Nombre:  ' + name);
    var receiptNumber = $('<div>').addClass('receipt-numero').text('Número de Teléfono:  ' + tel);
    var receiptEmaill = $('<div>').addClass('receipt-email').text('Correo Electrónico:  ' + email);
    var receiptDates = $('<div>').addClass('receipt-fecha').text('Fecha:  ' + date);
    var receiptNumpeople = $('<div>').addClass('receipt-personas').text('Número de personas:  ' + numpeople);
    var receiptSectpref = $('<div>').addClass('receipt-seccion').text('Sección Preferida:  ' + sectionn);
    var receiptRequest = $('<div>').addClass('receipt-solicitud').text('Solicitud Especial:  ' + request);
    var receiptText = $('<p>').addClass('comment-receipt').text();


    // Agregar el encabezado y el contenido del comentario al elemento de comentario
    receiptHeader.append(receiptName).append(receiptNumber).append(receiptEmaill).append(receiptDates).append(receiptNumpeople).append(receiptSectpref).append(receiptRequest);
    newReceipt.append(receiptHeader).append(receiptText);

    // Agregar el nuevo comentario al contenedor de comentarios y restablecer el formulario
    $('#recibos').prepend(newReceipt);
    $('.formreserva')[0].reset();
    });

    $('#enviarform').click(function() {
      alert('Tu reserva ha sido correcta');
    });




    // $('#formmreserva').submit(function(event) {
    //   event.preventDefault(); // Evita el envío del formulario

    //   // Obtén los valores del formulario
    //   var name = $('#name').val();
    //   var tel = $('#numerotel').val();
    //   var email = $('#correoelec').val();
    //   var date = $('#fechainput').val();
    //   var numpeople = $('#numpersonasselect').val();
    //   var sectionn = $('#seccionpreferida').val();
    //   var request = $('#solicitudesp').val();

    //   // Crea la notificación
    //   if (Notification && Notification.permission === 'granted') {
    //     var options = {
    //       body: 'Nombre: ' + name + '\nNúmero: ' + tel + '\nEmail: ' + email + '\nFecha: ' + date + '\nPersonas: ' + numpeople + '\nSección: ' + sectionn + '\nSolicitud: ' + request,
    //       icon: 'img/icono.png' // Ruta a la imagen del icono de la notificación
    //     };

    //     var notificacion = new Notification('¡Tu reserva se ha hecho correctamente!', options);
    //   } else {
    //     alert('Las notificaciones no están habilitadas en este navegador.');
    //   }
    // });
      


  });

  

    function push(){

      var namee = $('#name').val();
      var tell = $('#numerotel').val();
      var emaill = $('#correoelec').val();
      var datee = $('#fechainput').val();
      var numpeoplee = $('#numpersonasselect').val();
      var sectionnn = $('#seccionpreferida').val();
      var requestt = $('#solicitudesp').val();

    Push.Permission.request();
    Push.create('¡Tu reserva ha sido hecha correctamente!',{
    body: namee + '-' + tell + '-' + emaill + '-' + datee + '-' + numpeoplee + '-' + sectionnn + '-' + requestt,
    icon: "IMG/icono.png",
    timeout: 1500000,
    vibrate: [100, 100, 100],
    onClick: function() {

      window.location="https://google.com";

      console.log(this);
        }
      });
    }

    
    // Push.Permission.request();
    // Push.create('¡Tu reserva ha sido hecha correctamente!',{
    // body: 'Nombre: ' + namee + '\nTeléfono: ' + tell + '\nCorreo: ' + emaill + '\nFecha: ' + datee + '\nPersonas: ' + numpeoplee + '\nSección: ' + sectionnn + '\nSolicitud: ' + requestt,
    // icon: "img/icono.png",
    // timeout: 1500000,
    // vibrate: [100, 100, 100],
    // onClick: function() {

    //   window.location="https://google.com";

    //   console.log(this);
    //     }
    //   });
    // }

     

  


  //   	var token="GA230522212545";
	// 	var api ="https://script.google.com/macros/s/AKfycbyoBhxuklU5D3LTguTcYAS85klwFINHxxd-FroauC4CmFVvS0ua/exec";

			
	// 	$("#enviarform").click(function() {
	// 		 var  payload = {"op": "registermessage","token_qr": token, "mensajes": [
	// 						{"numero": $("#numerotel").val(),"mensaje": "¡Tu reserva ha sido exitosa! A continuación verás un resumen con tus datos previamente introducidos*"+$("#name").val()+"*"+$("#numerotel").val()+"*"+$("#correoelec").val()+"*"+$("#fechainput").val()+"*"+$("#numpersonasselect").val()+"*"+$("#seccionpreferida").val()+"*"+$("#solicitudesp").val()+"*"}]};
  //             ///	{"numero": $("#numerotel").val(),"mensaje": "¡Tu reserva ha sido exitosa! A continuación verás un resumen con tus datos previamente introducidos:*"+$("#name").val()+$("#numerotel").val()+$("#correoelec").val()+$("#fechainput").val()+$("#numpersonasselect").val()+$("#seccionpreferida").val()+$("#solicitudesp").val()+"*"}]};
	// 		 $.ajax({
	// 			 url: api,
	// 			 jsonp: "callback",
	// 			 method: 'POST',
	// 			 data : JSON.stringify(payload),
	// 			 async: false,
	// 			 success: function(respuestaSolicitud) {
	// 					alert(respuestaSolicitud.message);
	// 			 }
	// 		 });
  //        });
  //   });	

	// function base64(file, callback){
	// 	  var coolFile = {};
	// 	  function readerOnload(e){
	// 		var base64 = btoa(e.target.result);
	// 		coolFile.base64 = base64;
	// 		callback(coolFile)
	// 	  };

	// 	  var reader = new FileReader();
	// 	  reader.onload = readerOnload;

	// 	  var file = file[0].files[0];
	// 	  coolFile.filetype = file.type;
	// 	  coolFile.size = file.size;
	// 	  coolFile.filename = file.name;
	// 	  reader.readAsBinaryString(file);
	// }
	// async function subirFoto(id){
	// 	var foto = await new Promise((resolve, reject) => {
	// 		base64( $('#'+id), function(data){
	// 			resolve(data.base64)
	// 		});
	// 	});
	// 	$("#"+id+"_base64").val(foto);
	// 	console.log(foto);
	// }
    
  




