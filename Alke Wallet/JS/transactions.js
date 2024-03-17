$(document).ready(function() {
    // Simular la obtención de transacciones recientes (reemplazar con API real)
    var transacciones = [
        {
            "fecha": "2024-03-01",
            "tipo": "deposito",
            "monto": 1000.50
        },
        {
            "fecha": "2024-02-28",
            "tipo": "envio",
            "monto": 500.00
        },
        {
            "fecha": "2024-02-25",
            "tipo": "deposito",
            "monto": 200.00
        }
    ];

    // Mostrar las transacciones en la tabla
    mostrarTransacciones(transacciones);

    // Filtrar las transacciones por tipo, fecha de inicio y fecha fin
    $("#filter-form").submit(function(event) {
        event.preventDefault();

        var tipo = $("#tipo").val();
        var fechaInicio = new Date($("#fecha-inicio").val());
        var fechaFin = new Date($("#fecha-fin").val());

        var transaccionesFiltradas = transacciones.filter(function(transaccion) {
            var fechaTransaccion = new Date(transaccion.fecha);
            return (transaccion.tipo === tipo || tipo === "") &&
                fechaTransaccion >= fechaInicio &&
                fechaTransaccion <= fechaFin;
        });

        mostrarTransacciones(transaccionesFiltradas);
    });

    // Función para mostrar las transacciones en la tabla
    function mostrarTransacciones(transacciones) {
        var tablaTransacciones = $("#Movimiento-table tbody");
        tablaTransacciones.empty();

        transacciones.forEach(function(transaccion) {
            var fila = "<tr>";
            fila += "<td>" + transaccion.fecha + "</td>";
            fila += "<td>" + transaccion.tipo + "</td>";
            fila += "<td>$" + transaccion.monto.toFixed(2) + "</td>";
            fila += "</tr>";

            tablaTransacciones.append(fila);
        });
    }
});
