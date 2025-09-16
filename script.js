// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const criptoSelect = document.getElementById("cripto");
    const monedaSelect = document.getElementById("moneda");
    const boton = document.getElementById("boton");
  
    // Campos para mostrar resultados
    const campoFecha = document.getElementById("fecha");
    const campoCripto = document.getElementById("nombreCripto");
    const campoMoneda = document.getElementById("nombreMoneda");
    const campoPrecio = document.getElementById("precio");
    const campoVolumen = document.getElementById("volumen");
    const imagen = document.getElementById("imagenCripto");
  
    // Función para verificar si ambos select tienen valores válidos
    function verificarSeleccion() {
      const criptoValida = criptoSelect.value !== "";
      const monedaValida = monedaSelect.value !== "";
      boton.disabled = !(criptoValida && monedaValida);
    }
  
    // Verificar al cambiar selección
    criptoSelect.addEventListener("change", verificarSeleccion);
    monedaSelect.addEventListener("change", verificarSeleccion);
  
    // Al hacer clic en "Actualizar"
    boton.addEventListener("click", () => {
      const cripto = criptoSelect.value;
      const moneda = monedaSelect.value;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const infoRAW = data.RAW[cripto][moneda];
          const infoDISPLAY = data.DISPLAY[cripto][moneda];
  
          // Obtener datos numéricos
          const precioNumerico = infoRAW.PRICE;
          const volumenNumerico = infoRAW.VOLUME24HOURTO;
  
          // Formatear para mostrar
          const precioFormateado = precioNumerico.toLocaleString('es-ES', {
            style: 'currency',
            currency: moneda
          });
  
          const volumenFormateado = volumenNumerico.toLocaleString('es-ES', {
            style: 'currency',
            currency: moneda
          });
  
          // Fecha actual formateada
          const fecha = new Date().toLocaleString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          });
  
          // Mostrar en el DOM
          campoFecha.textContent = fecha;
          campoCripto.textContent = cripto;
          campoMoneda.textContent = moneda;
          campoPrecio.textContent = precioFormateado;
          campoVolumen.textContent = volumenFormateado;
          imagen.src = "https://www.cryptocompare.com" + infoDISPLAY.IMAGEURL;
          imagen.alt = `Imagen de ${cripto}`;
        })
        .catch(error => {
          alert("Ocurrió un error al obtener los datos. Intenta de nuevo.");
          console.error(error);
        });
    });
  });  