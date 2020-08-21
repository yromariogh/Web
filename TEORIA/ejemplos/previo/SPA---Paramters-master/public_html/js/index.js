/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global registro, registros */

$(document).ready(function (){
    
    var btn_consulta, btn_registro;
    
    btn_consulta = $('#consultar');
    btn_registro = $('#btn-registrar');
    
    btn_registro.on('click', CapturaDatos);
    
    function CapturaDatos(){        
        
        var c_nombre, c_apellido, c_telefono, c_correo, mensaje, usuario, usuarios;
        
        usuarios = [];
        
        c_nombre = $('#nombretxt').val();
        c_apellido = $('#apellidotxt').val();
        c_telefono = $('#telefonotxt').val();
        c_correo = $('#correotxt').val();
        
        mensaje = $('#mensaje');
        
        if(c_nombre === '' || c_apellido === '' || c_telefono === '' || c_correo === ''){
            mensaje.empty();
            mensaje.append('<p class="red-text">Debe llenar todos los campos</p>');
        }else{
            
            usuario = {
                nombre: c_nombre,
                apellido: c_apellido,
                telefono: c_telefono,
                correo: c_correo
            };
            
            //console.log(usuario);
            usuarios.push(usuario);
            registro.setUser(usuarios);
            LimpiarCampos();
            mensaje.empty();
            mensaje.append('<p class="green-text">Usuario guardado</p>');

            
        }
        
        
    };
    
    function LimpiarCampos(){
        
        $('#nombretxt').val('');
        $('#apellidotxt').val('');
        $('#telefonotxt').val('');
        $('#correotxt').val('');
        
    };
    
    btn_consulta.on('click', LoadRegistros);
    
    function LoadRegistros(){
        
        var component = 'registros.html';
        
        $.ajax({
            mimeType: 'text/html; charset=utf-8', 
            url: component,
            type: 'GET',
            dataType: "html",
            async: true,
            success: function(data) {
                $('#contenedor').html(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });        
    };
    
});


