document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Previene que el formulario se envíe normalmente

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const servicio = document.getElementById("servicio").value;
    const mensaje = document.getElementById("mensaje").value;

    const numero = "5491154616161"; // <-- cambiá por tu número con código de país, sin + ni 0
    const texto = `Nombre y apellido: ${nombre}%0AEmail: ${email}%0AServicio: ${servicio}%0AMensaje: ${mensaje}`;

    const url = `https://wa.me/${numero}?text=${texto}`;
    window.open(url, "_blank");
});