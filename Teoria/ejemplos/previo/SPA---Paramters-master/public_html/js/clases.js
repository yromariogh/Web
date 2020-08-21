/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var registro = new Registro;

function Registro(){
    
    Registro.prototype.setUser = function (persona){
        personas = persona;
        //console.log(personas);
    };

    Registro.prototype.getUser = function (){
        return personas;
    };   
    
    Registro.prototype.Formulario = function (){
        
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

    var personas;
    
}

registro.Formulario();






