$(".btn").on("click", function() {
    alert("Trayendo objeto");
    $(this).text('Loading...');
    $.ajax({
        type: 'GET',
        url: "https://reqres.in/api/users",
        dataType: 'json',
        success: function(data) {
            $('.text').text(JSON.stringify(data));
        },
        error: function(error) {
            alert("Error");
        }
    });
});


jQuery.fn.datosFinancieros = function() {
    var element = this;
    $.ajax({
        type: "GET",
        url: "https://mindicador.cl/api",
        dataType: "json",
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