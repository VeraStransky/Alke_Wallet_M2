$(document).ready(function(){

    //Eventos de los click en los botones
    $("#ver-transacciones").click(function(){
        //Eedirigir a la página de transacciones
        window.location.href = "transactions.html";
    });

    //Déposito 
    $("#realizar-deposito").click(function(){
        window.location.href = "deposit.html";
    });

    //envio dinero
    $("#enviar-dinero").click(function(){
        window.location.href = "sendmoney.html";
    });

})
 