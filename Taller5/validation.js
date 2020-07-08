var pais = document.getElementById('id_pais')
var nombre = document.getElementById('nombre')
var apellido = document.getElementById('apellido')
var direccion = document.getElementById('direccion')
var ccusuario = document.getElementById('ccusuario')
var ccpaswd = document.getElementById('ccpaswd')
var email = document.getElementById('email')
var telefono = document.getElementById('telefono')

function validarFormulario()
{
    if (nombre.value === "" || nombre.value.length>25) 
    {
        alert("Escriba un nombre válido")
        return false;
    }

    if (apellido.value === "" || apellido.value.length>25) 
    {
        alert("Escriba un apellido válido")
        return false;
    }

    if ( (toLowerCase(direccion.value)).startsWith('cll') )
    {
        alert("La direccion no es válida")
        return false;
    }
}