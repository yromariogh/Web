const pais = document.getElementById('id_pais')
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const direccion = document.getElementById('direccion')
const ccusuario = document.getElementById('ccusuario')
const ccpaswd = document.getElementById('ccpaswd')
const ccpaswd2 = document.getElementById('ccpaswd2')
const email = document.getElementById('email')
const telefono = document.getElementById('telefono')
const username = document.getElementById('id_usr')
const gustosRadio = document.getElementsByName('gustosRadio')
const color = document.getElementById('id_color')
const marca = document.getElementById('id_marca')
const estilo = document.getElementById('id_estilo')
const divGustos = document.getElementById('id_divGustos')

function validarFormulario() {
    if (username.value === "") {
        setErrorFor(username, "Ingrese un username")
    } else if (username.value.length < 10 || username.value.length > 20) {
        setErrorFor(username, "Su username debe tener minimo 10 caracteres y maximo 20")
    } else {
        setSuccessFor(username)
    }

    if (pais.value == "xxx") {
        setErrorFor(pais, "Seleccione un pais")
    } else {
        setSuccessFor(pais)
    }

    if (nombre.value === "") {
        setErrorFor(nombre, "Ingrese su nombre")
    } else if (nombre.value.length > 25) {
        setErrorFor(nombre, "Su nombre debe tener maximo 25 caracteres")
    } else {
        setSuccessFor(nombre)
    }

    if (apellido.value === "") {
        setErrorFor(apellido, "Ingrese su apellido")
    } else if (apellido.value.length > 25) {
        setErrorFor(apellido, "Su apellido debe tener maximo 25 caracteres")
    } else {
        setSuccessFor(apellido)
    }

    if (direccion.value === "") {
        setErrorFor(direccion, "Ingrese su direccion")
    } else if (!(/\bcll|cra|av|anv|trans/i.test(direccion.value))) {
        setErrorFor(direccion, "Su direccion debe iniciar con cll, cra, av, anv ó trans")
    } else {
        setSuccessFor(direccion)
    }

    if (ccpaswd.value === "") {
        setErrorFor(ccpaswd, "Ingrese una contraseña")
    } else if (ccpaswd.value.length < 15 || ccpaswd.value.length > 20) {
        setErrorFor(ccpaswd, "Su contraseña debe tener entre 15 y 20 caracteres")
    } else if (!(/[A-Z]/g.test(ccpaswd.value))) {
        setErrorFor(ccpaswd, "Su contraseña debe incluir mayusculas")
    } else if (!(/\/|#|%|&/g.test(ccpaswd.value))) {
        setErrorFor(ccpaswd, "Su contraseña debe incluir simbolos especiales como: #,%,/,&")
    } else {
        setSuccessFor(ccpaswd)
    }

    if (email.value === '') {
        setErrorFor(email, 'Ingrese su email');
    } else if (email.value.length > 120) {
        setErrorFor(email, 'Su email debe tener menos de 120 caracteres');
    } else if (!isEmail(email.value)) {
        setErrorFor(email, 'Su email no es correcto');
    } else {
        setSuccessFor(email);
    }

    if (ccpaswd2.value == "") {
        setErrorFor(ccpaswd2, 'Ingrese la contraseña nuevamente')
    } else if (ccpaswd.value != ccpaswd2.value) {
        setErrorFor(ccpaswd2, 'Las contraseñas no coinciden')
    } else {
        setSuccessFor(ccpaswd2)
    }

    if (telefono.value.length != 7 && telefono.value.length != 10) {

        setErrorFor(telefono, "Su numero debe tener 7 o 10 caracteres (fijo ó móvil)")
    } else {
        setSuccessFor(telefono)
    }

    const pattern = new RegExp('^[A-Z]+$', 'i');
    if (ccusuario.value == "") {
        setErrorFor(ccusuario, "Ingrese su ccusuario")
    } else if (ccusuario.value.length < 10 || ccusuario.value.length > 20) {
        setErrorFor(ccusuario, "Su ccusuario debe tener entre 10 y 20 caracteres")
    } else if (!pattern.test(ccusuario.value)) {
        setErrorFor(ccusuario, "Su ccusuario no debe contener caracteres extraños")
    } else {
        setSuccessFor(ccusuario)
    }

    

    for (var i = 0, length = gustosRadio.length; i < length; i++) 
    {
        if (gustosRadio[i].checked) 
        {
            if (gustosRadio[i].value == "si")
            {
                showSection(divGustos, "Ingrese sus gustos antes de continuar")
                //Ahora se evaluan las entradas de gustos
                if (color.value == "xxx") {
                    setErrorFor(color, "Seleccione un color")
                } else {
                    setSuccessFor(color)
                }
            
                if (marca.value == "xxx") {
                    setErrorFor(marca, "Seleccione una marca")
                } else {
                    setSuccessFor(marca)
                }
            
                if (estilo.value == "xxx") {
                    setErrorFor(estilo, "Seleccione un estilo")
                } else {
                    setSuccessFor(estilo)
                }
            }
            else if (gustosRadio[i].value == "no")
            {
                hideSection(divGustos)
            }
            break;
        }
    }

    

    return false;
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-div error';
    small.innerText = message;
}

function showSection(input, message) {
    input.className = 'gustos-mostrar';
}

function hideSection(input) {
    input.className = 'gustos-ocultar';
}

function setFavoriteModel()
{
    if (color.value != "xxx" && marca.value != "xxx" && estilo.value != "xxx")
    {
        document.getElementById("modeloFavorito").value=`${marca.options[marca.selectedIndex].text} ${estilo.options[estilo.selectedIndex].text} ${color.options[color.selectedIndex].text}`;
    }
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-div success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}