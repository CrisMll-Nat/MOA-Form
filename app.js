console.log("HOLAAAAA QUE TAAAAL ");

/* funcion para actualizar la cifra de la reserva en el form*/
document.addEventListener('DOMContentLoaded', function() {
    function actualizarTotalReserva() {
        const hotelSelect = document.getElementById('hotel');
        const numHabitaciones = document.getElementById('numHabitaciones').value;
        const precioHabitacion = hotelSelect.options[hotelSelect.selectedIndex].getAttribute('data-precio');
        const monedaSelect = document.getElementById('moneda');
        const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].textContent;

        /* debug*/
        console.log("Hotel seleccionado:", hotelSelect.value);
        console.log("Número de habitaciones:", numHabitaciones);
        console.log("Precio de la habitación:", precioHabitacion);
        console.log("Moneda seleccionada:", monedaSeleccionada);

        if (precioHabitacion && numHabitaciones) {
            const totalReserva = parseFloat(precioHabitacion) * parseInt(numHabitaciones);
            document.getElementById('totalReserva').value = totalReserva.toFixed(2);
            document.getElementById('totalReservaText').textContent = totalReserva.toFixed(2);
            document.getElementById('monedaSeleccionada').textContent = monedaSeleccionada;
            console.log("Total reserva calculado:", totalReserva);
        } else {
            document.getElementById('totalReservaText').textContent = '0';
            document.getElementById('monedaSeleccionada').textContent = '';
            console.log("No se pudo calcular el total de la reserva");
        }
    }

    document.getElementById('hotel').addEventListener('change', actualizarTotalReserva);
    document.getElementById('numHabitaciones').addEventListener('change', actualizarTotalReserva);
    document.getElementById('moneda').addEventListener('change', actualizarTotalReserva);
});


/* funcion para comprobar el DNI y el Email en el form*/
