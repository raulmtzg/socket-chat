var socket = io();

//Obtiene los parametros de la URL
var params = new URLSearchParams(window.location.search);

//Valida que en la url venga el parametro nombre
if( !params.has('nombre') || !params.has('sala') ) {

    window.location = 'index.html';
    throw new Error ('El nombre y sala son es necesarios para iniciar el chat');

}

var usuario =  {
    nombre: params.get('nombre'),
    sala: params.get('sala')
}

socket.on('connect', function() {
    console.log('Conectado al servidor');

    socket.emit('entrarChat', usuario, function( resp ){
        console.log('Usuarios conectados: ', resp);
    });

});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

    

});


// Enviar información
// socket.emit('crearMensaje', {
//     nombre: 'Fernando',
//     mensaje: 'Hola Mundo'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });

// Escuchar información
socket.on('crearMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);
});

//Escuchar cambios de usuarios
//Cuando un usuario entra o sale del chat
socket.on('listaPersonas', function(personas) {

    console.log( personas);
});


//Mensajes Privados
socket.on('mensajePrivado', function(mensaje){
    console.log('Mensaje Privado: ', mensaje);
});