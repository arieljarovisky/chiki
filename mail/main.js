document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Previene que el formulario se envíe normalmente

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const servicio = document.getElementById("servicio").value;
    const mensaje = document.getElementById("mensaje").value;

    const numero = "5491136179702"; // <-- cambiá por tu número con código de país, sin + ni 0
    const texto = `Nombre y apellido: ${nombre}%0AEmail: ${email}%0AServicio: ${servicio}%0AMensaje: ${mensaje}`;

    const url = `https://wa.me/${numero}?text=${texto}`;
    window.open(url, "_blank");
});

function handleScroll() {
  if (window.matchMedia('(min-width: 992px)').matches) {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('#logoGrande');
    const scrolled = window.scrollY > 30;

    navbar.classList.toggle('scrolled', scrolled);
    logo?.classList.toggle('scrolled', scrolled);
  }
}

let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(handleScroll, 50);
});
window.addEventListener('resize', handleScroll);
  function abrirModal(titulo, descripcion) {
    document.getElementById('modalTitulo').innerText = titulo;
    document.getElementById('modalDescripcion').innerText = descripcion;
    document.getElementById('infoModal').classList.remove('hidden');
  }

  function cerrarModal() {
    document.getElementById('infoModal').classList.add('hidden');
  }