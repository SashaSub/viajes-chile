const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function(){
    $("#enviarMensaje").click(function(){
        alert("El mensaje fue enviado!");
    });
});

$(document).ready(function(){
    $(".nav-link").on("click", function(){
        $(this).css({
            "color": "red"
        });
    });
});