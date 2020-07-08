var usuario = document.getElementById('id_usr')
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
    if (usuario.value === "") 
    {
        alert("Escriba un nombre de Usuario")
        return false;
    }

}