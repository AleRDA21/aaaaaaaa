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

    // Crear un nuevo elemento de comentario
    var newComment = $('<div>').addClass('comment');
    var commentHeader = $('<div>').addClass('comment-header');
    var commentAuthor = $('<h4>').addClass('comment-autor').text(name);
    var commentDate = $('<span>').addClass('comment-fecha').text(dateTime);
    var commentText = $('<p>').addClass('comment-text').text(comment);

    // Agregar el encabezado y el contenido del comentario al elemento de comentario
    commentHeader.append(commentAuthor).append(commentDate);
    newComment.append(commentHeader).append(commentText);

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
});




