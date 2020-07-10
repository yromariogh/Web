var pais = document.getElementById('id_pais')
var nombre = document.getElementById('nombre')
var apellido = document.getElementById('apellido')
var direccion = document.getElementById('direccion')
var ccusuario = document.getElementById('ccusuario')
var ccpaswd = document.getElementById('ccpaswd')
var email = document.getElementById('email')
var telefono = document.getElementById('telefono')
var username = document.getElementById('id_usr')

function validarFormulario()
{
    if ( ccpaswd.value === "" || ccpaswd.value.length < 15 || ccpaswd.value.length > 20)
    {
        setErrorFor(ccpaswd, "Bad password")
    }

    else{
        if (!(/[A-Z]/g.test(ccpaswd.value))){
            setErrorFor(ccpaswd, "NO caps")
        }
        if (!(/\/|#|%|&/g.test(ccpaswd.value))){
            setErrorFor(ccpaswd, "No special symbols")
        }
    }

    if (username.value === "" || username.value.length < 10 || username.value.length > 20)
    {
        setErrorFor(username, "Bad username")
        
    }

    if (nombre.value === "" || nombre.value.length > 25) 
    {
        setErrorFor(nombre, "Bad name")
        
    }

    if (apellido.value === "" || apellido.value.length > 25) 
    {
        setErrorFor(apellido, "Bad last name")
        
    }

    if ( !(/\bcll|cra|av|anv|trans/i.test(direccion.value)))
    {
        setErrorFor(direccion, "Bad address")
        
    }
    return false;
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'input-field col s12 error';
    small.innerText = message;
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}