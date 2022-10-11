// llamada API reqres en el boton apretame
$(".btn").on("click", function() {
    alert("Después de apretar el Boton traré los datos de la API");
    $(this).text('Loading...');
    //Aquí comienza el llamado a la API
    $.ajax({
        type: 'GET', //tipo de llamado pedir información
        url: "https://reqres.in/api/users", //url de la API
        dataType: 'json', //tipo de datos que se espera recibir
        success: function(data) {
            $('.text').text(JSON.stringify(data));
        },
        error: function(error) {
            alert("Error");
        }
    });
});

//Llamada a la API de datos financieros
jQuery.fn.datosFinancieros = function() {
    var element = this; //elemento que se esta llamando
    $.ajax({ //Aqui parte el llamado a la API
        type: "GET",
        url: "https://mindicador.cl/api", //url de la API
        dataType: "json", //tipo de datos que se espera recibir
        success: function(data) {
            element.append(
                `<span>${data.uf.nombre}</span>
                <span>${data.uf.valor}</span>`
            )
        }
    });
    return this;
};


$(function() {
    $("#uf").datosFinancieros();
});