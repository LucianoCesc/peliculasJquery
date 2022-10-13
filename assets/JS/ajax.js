let filmes = function(titulo, search) {
    $.ajax({ 
        type: "GET",
        url: "http://www.omdbapi.com/?apikey=9881254f&s="+search, 
        dataType: "json",
        success: function(data) {
            $('#contenido-ficha').append(`<h2 class="text-center">Saga de ${titulo}</h2>`)
            // $('#contenido-ficha').append(`<div class="d-flex row">`)
            data.Search.forEach(peli => {
                $('#contenido-ficha').append(
                    `<div class="card col-12 col-sm-8 col-md-3">
                        <img class="card-img-top" src="${peli.Poster}" alt="${peli.Title}">
                        <div class="card-body">
                            <h3 class="card-title text-bg-light">${peli.Title}</h5>
                            <p class="card-text text-black">Año: ${peli.Year}</p>
                            <a href="https://www.imdb.com/title/${peli.imdbID}" target="_blank" class="btn btn-primary">Ver ficha en IMDB</a>
                        </div>
                    
                    </div>
                    `
                );
            // $('#contenido-ficha').append(`</div>`)
            });

        }
    });
    // return this;
};

$(function() {
    // $("#starwars").on("click",
    //     filmes('Star Wars','star+wars')
    //     console.log("HOLA")
    // );
    
});