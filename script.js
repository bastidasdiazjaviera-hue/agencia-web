function mostrarNombre() {
    let nombre = document.getElementById("nombre").value;

    if (nombre === "") {
        alert("Por favor ingresa tu nombre");
    } else {
        document.getElementById("resultado").innerText =
        "Hola " + nombre + ", te contactaremos pronto!";
    }
}