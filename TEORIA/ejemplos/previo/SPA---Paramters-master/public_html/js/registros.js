/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global registros, registro */

$(document).ready(function (){
    
    var btn_registrar;
    
    btn_registrar = $('#registrar');
    
    btn_registrar.on('click', LoadIndex);
    
    function LoadIndex(){
        
        var component = 'formulario.html';
        
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
    
        
    function LoadUsuarios(){
        
        var usuarios, tabla, html;
        
        usuarios = registro.getUser();
        tabla = $('#table_user');
        
        if(usuarios === undefined){
             
             tabla.empty();
             html = '<tr>';
             html += '<td class="row">';
             html += '<div class="col s12">No hay usuarios</div>';
             html += '</td>';
             html += '</tr>';
             
             tabla.append(html);
        
        }else{
            
             //console.log(usuarios[0].nombre);
            
             tabla.empty();
             html = '<tr>';
             html += '<td class="row">';
             html += '<div class="col s12">'+ usuarios[0].nombre +'</div>';
             html += '<div class="col s12">'+ usuarios[0].apellido +'</div>';
             html += '<div class="col s12">'+ usuarios[0].telefono +'</div>';
             html += '<div class="col s12">'+ usuarios[0].correo +'</div>';
             html += '</td>';
             html += '</tr>';
             
             tabla.append(html);
            
        }
        
    };
    
    LoadUsuarios();
    
    
    
});


