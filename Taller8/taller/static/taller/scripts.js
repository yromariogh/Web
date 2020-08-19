const nacimiento = document.getElementById("id_fechanacimiento");
const documento = document.getElementById("id_documento");
const email = document.getElementById("id_email");
const telefono = document.getElementById("id_telefono");
const usuario = document.getElementById("id_usuario");
const password = document.getElementById("id_password");

function validarFormulario() {
    alert("entro");
    errores = 0;

    const pattern = new RegExp("^[A-Z]+$", "i");
    if (!pattern.test(usuario.value)) {
        setErrorFor(usuario, "Su usuario no debe contener caracteres extraños");
    } else {
        setSuccessFor(usuario);
    }

    if (password.value.length < 15 || password.value.length > 20) {
        setErrorFor(password, "Su contraseña debe tener entre 15 y 20 caracteres");
    } else if (!/[A-Z]/g.test(password.value)) {
        setErrorFor(password, "Su contraseña debe incluir mayusculas");
    } else if (!/\/|#|%|&/g.test(password.value)) {
        setErrorFor(password, "Su contraseña debe incluir simbolos especiales como: #,%,/,&");
    } else {
        setSuccessFor(password);
    }

    if (!isEmail(email.value)) {
        setErrorFor(email, "Su email no es correcto");
    } else {
        setSuccessFor(email);
    }

    if (telefono.value.length != 7 && telefono.value.length != 10) {
        setErrorFor(telefono, "Su numero debe tener 7 o 10 caracteres (fijo ó móvil)");
    } else {
        setSuccessFor(telefono);
    }

    if (errores > 0) {
        return false;
    }
    if (errores === 0) {
        alert("Se han registrado sus respuestas. Gracias por participar.");
        return true;
    }
}