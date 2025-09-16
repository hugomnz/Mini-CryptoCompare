# Mini-CryptoCompare
Aplicación web en HTML, CSS y JavaScript que consulta en tiempo real la cotización de criptomonedas frente a distintas monedas utilizando la API de CryptoCompare.

# 💰 Cotización de Criptomonedas

Este proyecto es una aplicación web interactiva que permite consultar en tiempo real la cotización de distintas criptomonedas frente a monedas tradicionales, utilizando la API de [CryptoCompare](https://www.cryptocompare.com).  

## 🚀 Características
- Selección de criptomoneda y moneda mediante menús desplegables.
- Consulta en tiempo real del precio y volumen de las últimas 24 horas.
- Muestra la fecha y hora exacta de la última actualización.
- Incluye el icono correspondiente de la criptomoneda seleccionada.
- Botón desactivado hasta que se elige un par válido (cripto y moneda).
- Manejo de errores en caso de fallo en la conexión con la API.

## 📁 Estructura del proyecto
📂 cotizacion-criptomonedas
├── 📄 index.html # Estructura de la página y formularios
├── 🎨 styles.css # Estilos con diseño limpio y degradados
└── ⚙️ script.js # Lógica con fetch API y validaciones

## 🖼️ Vista previa
La aplicación permite consultar pares como:  
- BTC/USD  
- ETH/EUR  
- LTC/GBP  
y muestra información como:  
- 💵 Precio actual formateado en la divisa seleccionada.  
- 📊 Volumen de las últimas 24 horas.  
- 🕒 Fecha y hora de la última actualización.  
- 🪙 Icono de la criptomoneda.  

## 💻 Tecnologías usadas
- **HTML5**  
- **CSS3**  
- **JavaScript (Fetch API)**  

## 🌍 Compatibilidad de navegadores
- Google Chrome ≥ v42  
- Mozilla Firefox ≥ v39  
- Microsoft Edge ≥ v14  
- Safari ≥ v10.1  
- Opera ≥ v29  

## 📦 Cómo usarlo
1. Clona este repositorio:  
   ```bash
   git clone https://github.com/hugomnz/mini-cryptocompare.git
2. Abre el archivo index.html en tu navegador.
3. Selecciona una criptomoneda y una moneda, luego pulsa Actualizar para ver los resultados.
