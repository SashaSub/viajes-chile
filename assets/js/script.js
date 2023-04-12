const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// alert mensaje con el boton Enviar
$(document).ready(function(){
    $("#enviarMensaje").click(function(){
        alert("El mensaje fue enviado!");
    });
});

// cambio de color a rojo de los links de la barra de navegación con click
$(document).ready(function(){
    $(".nav-link").on("click", function(){
        $(this).css({
            "color": "red"
        });
    });
});

// toggle el texto de la seccion QUIENES SOMOS
$("#quienes-somos h2").click(function(){
    $("p").toggle();
});