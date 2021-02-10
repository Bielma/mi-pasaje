var valido = false;

function goToLogin() {
    //history.pushState(null, "index", "index.html");
    window.history.pushState("", "login", "index.html");
}


function goToRegister() {
    window.history.pushState("", "Registro", "register.html");
}

function goToRecoverPass() {
    history.pushState("", "Recuperar contraseña", "recover-pass.html");
}