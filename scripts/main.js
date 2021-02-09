var valido = false;

function goToLogin() {
    //history.pushState(null, "index", "index.html");
    window.history.pushState("http://example.ca", "login", "index.html");
}


function goToRegister() {
    window.history.pushState("http://example.ca", "Registro", "register.html");
}

function goToRecoverPass() {
    history.pushState("http://example.ca", "Recuperar contraseña", "recover-pass.html");
}


function validar(event) {
    console.log()
}
document.addEventListener()