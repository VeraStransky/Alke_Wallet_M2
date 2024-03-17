$(document).ready(function(){
    //evento submit formulario
    $("#deposit-form").submit(function(event){
        event.preventDefault();

        // obtener dinero
        var monto= $("#monto").val();

        //no se debe depositar montos negativos
        if(isNaN(monto) || monto<=0){
            alert("El monto a depositar debe ser un número positivo.");
            return;
        }
             
        //mostrar un mensaje de depósito exitoso
        $(".mensaje-exito").show();
    });
});
