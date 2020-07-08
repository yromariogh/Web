var usuario = document.getElementById('id_usr').value
var pais = document.getElementById('id_pais').value
var nombre = document.getElementById('nombre').value
var apellido = document.getElementById('apellido').value
var direccion = document.getElementById('direccion').value
var ccusuario = document.getElementById('ccusuario').value
var ccpaswd = document.getElementById('ccpaswd').value
var email = document.getElementById('email').value
var telefono = document.getElementById('telefono').value

function validarFormulario()
{
    if (usuario === "" || usuario.length<=25) 
    {
        alert("Escriba un usuario válido")
        return false;
    }

}