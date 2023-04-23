function encriptar() {
    
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    
    let textoCifrado = texto
    .replace(/e/gi, "和")
    .replace(/i/gi, "哟")
    .replace(/a/gi, "到")
    .replace(/o/gi, "任何一个") 
    .replace(/u/gi, "或者");

    if (texto.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = " ";
        muñeco.src = "./img/encriptado.png";
    
    } else {
        muñeco.src = "./img/buscar.png";
        tituloMensaje.textContent = "Ningun Mensaje Encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        
    }
                   
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
    .replace(/和/gi, "e")
    .replace(/哟/gi, "i")
    .replace(/到/gi, "a")
    .replace(/任何一个/gi, "o") 
    .replace(/或者/gi, "u");

    if (texto.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado";
        parrafo.textContent = "";
        muñeco.src = "./img/desencriptado.png";
    } else {
        muñeco.src = "./img/buscar.png";
        tituloMensaje.textContent = "Ningun Mensaje Encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        

    }     
}