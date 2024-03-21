// Obtener referencias a los elementos del DOM
let botonEncriptar = document.getElementById("button_encrypt"); // Botón de encriptar
let botonDesencriptar = document.getElementById("button_decrypt"); // Botón de desencriptar
let botonCopiar = document.getElementById("button_copiar"); // Botón de copiar
let botones = document.getElementsByClassName(".button"); // Todos los botones
let textoEntrada = document.getElementById("input_text_encrypt"); // Área de texto de entrada
let textoSalida = document.getElementById("output_text_decrypt"); // Área de texto de salida
let contenedorPadre = document.querySelector(".result"); // Contenedor padre del resultado

// Función para habilitar los botones de encriptar y desencriptar
function habilitarBotones() {
    botonEncriptar.disabled = false;
    botonDesencriptar.disabled = false;
}

// Función para habilitar el botón de copiar
function habilitarCopiado() {
    botonCopiar.disabled = false;
}

// Función para actualizar la página
function actualizarPagina() {
    if(textoEntrada.value !== ""){
        contenedorPadre.classList.remove("no_texto");
    }
    textoEntrada.focus();
}

// Función para mostrar un alert personalizado
function myAlert(message) {
    var alert = document.getElementById('custom-alert');
    alert.innerHTML = message;
    alert.style.display = 'block';
    setTimeout(function() {
      alert.style.display = 'none';
    }, 2000); // Oculta el alert después de 2 segundos
}

// Función para enfocar el área de texto de entrada
function focusTextArea() {
    var textarea = document.getElementById("input_text_encrypt");
    textarea.focus();
}

// Función para encriptar un mensaje
function encriptarMensaje() {
    if (textoEntrada.value != "") {
        // Expresión regular para verificar minúsculas y espacios
        let regExp = /^[a-z\s]+$/;
        
        if (regExp.test(textoEntrada.value)) {
            // Reemplazar letras por palabras encriptadas
            let mensajeEncriptado = textoEntrada.value;
            mensajeEncriptado = mensajeEncriptado.replace(/e/gim, "enter");
            mensajeEncriptado = mensajeEncriptado.replace(/i/gim, "imes");
            mensajeEncriptado = mensajeEncriptado.replace(/a/gim, "ai");
            mensajeEncriptado = mensajeEncriptado.replace(/o/gim, "ober");
            mensajeEncriptado = mensajeEncriptado.replace(/u/gim, "ufat");
            textoSalida.innerHTML = mensajeEncriptado;
            textoSalida.value = mensajeEncriptado;
            actualizarPagina();
        } else {
            myAlert("Por favor escribe un texto válido, solo letras minúsculas y espacios.");
            focusTextArea();
        }
    } else {
        myAlert("Por favor escribe un texto");
        focusTextArea();
    }
}

// Función para desencriptar un mensaje
function desencriptarMensaje() {
    if (textoEntrada.value != "") {
        let mensajeDesencriptado = textoEntrada.value;
        mensajeDesencriptado = mensajeDesencriptado.replace(/enter/gim, "e");
        mensajeDesencriptado = mensajeDesencriptado.replace(/imes/gim, "i");
        mensajeDesencriptado = mensajeDesencriptado.replace(/ai/gim, "a");
        mensajeDesencriptado = mensajeDesencriptado.replace(/ober/gim, "o");
        mensajeDesencriptado = mensajeDesencriptado.replace(/ufat/gim, "u");
        textoSalida.innerHTML = mensajeDesencriptado;
        textoSalida.value = mensajeDesencriptado;
        actualizarPagina();
    } else {
        myAlert("Para desencriptar un mensaje, usa la caja de texto");
        focusTextArea();
    }
}

// Función para copiar un mensaje en el portapapeles
function copiarMensaje() {
    if (textoSalida.value != "") {
        navigator.clipboard.writeText(textoSalida.value);
        myAlert("Mensaje copiado");
    } else {
        myAlert("Nada que copiar");
    }
}

// Asignar eventos a los botones y al área de texto de entrada
botonEncriptar.onclick = encriptarMensaje;
botonDesencriptar.onclick = desencriptarMensaje;
botonCopiar.onclick = copiarMensaje;
textoEntrada.onclick = habilitarBotones;
