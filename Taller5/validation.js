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

function validarFormulario()
{
    if (username.value === "" || username.value.length < 10 || username.value.length > 20)
    {
        setErrorFor(username, "Bad username")
    }
    else
    {
        setSuccessFor(username)
    }

    if (pais.value == "xxx")
    {
        setErrorFor(pais, "Select a country")
    }
    else
    {
        setSuccessFor(pais)
    }

    if (nombre.value === "" || nombre.value.length > 25) 
    {
        setErrorFor(nombre, "Bad name")
    }
    else
    {
        setSuccessFor(nombre)
    }

    if (apellido.value === "" || apellido.value.length > 25) 
    {
        setErrorFor(apellido, "Bad last name")
    }
    else
    {
        setSuccessFor(apellido)
    }

    if ( !(/\bcll|cra|av|anv|trans/i.test(direccion.value)))
    {
        setErrorFor(direccion, "Bad address")
    }
    else
    {
        setSuccessFor(direccion)
    }

    if ( ccpaswd.value === "" || ccpaswd.value.length < 15 || ccpaswd.value.length > 20)
    {
        setErrorFor(ccpaswd, "Bad password")
    }
    else if (!(/[A-Z]/g.test(ccpaswd.value)))
    {
        setErrorFor(ccpaswd, "NO caps")
    }
    else if (!(/\/|#|%|&/g.test(ccpaswd.value)))
    {
        setErrorFor(ccpaswd, "No special symbols")
    }
    else
    {
        setSuccessFor(ccpaswd)
    }
    
    if(email.value === '' || !isEmail(email.value) || email.value.length > 120) 
    {
		setErrorFor(email, 'Bad email');
    } 
    else 
    {
		setSuccessFor(email);
    }
    
    if(ccpaswd2.value=="" || ccpaswd.value!=ccpaswd2.value)
    {
        setErrorFor(ccpaswd2, 'No confirmed password')
    }
    else
    {
        setSuccessFor(ccpaswd2)
    }

    if(telefono.value.length!=7 || telefono.value.length!=10)
    {
        setErrorFor(telefono, "Wrong phone number")
    }
    else
    {
        setSuccessFor(telefono)
    }

    const pattern = new RegExp('^[A-Z]+$', 'i');
    if(ccusuario.value=="" || ccusuario.value.length<10 || ccusuario.value.length>20 || !pattern.test(ccusuario.value))
    {
        setErrorFor(ccusuario, "Bad ccuser")
    }
    else
    {
        setSuccessFor(ccusuario)
    }

    return false;
}

function setErrorFor(input, message) 
{
	const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'input-field col s12 error';
    small.innerText = message;
}

function setSuccessFor(input) 
{
	const formControl = input.parentElement;
	formControl.className = 'input-field col s12 success';
}

function isEmail(email) 
{
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}