const TMDB_ENDPOINT = 'https://api.themoviedb.org/3';
const APIKEY = 'f1460f8cb5482860662cf7d7e599e2ff';
const IMG_PREFIX = 'https://image.tmdb.org/t/p/w500';
let xhr;

function carregaFilmes () {
    xhr = new XMLHttpRequest ();

    xhr.open ('GET', TMDB_ENDPOINT + '/movie/popular' + '?api_key=' + APIKEY, true);
    xhr.onload = exibeFilmes;
    xhr.send();
}

function carregaFilmesImg () {
    xhr = new XMLHttpRequest ();

    xhr.open ('GET', TMDB_ENDPOINT + '/movie/popular' + '?api_key=' + APIKEY, true);
    xhr.onload = exibeFilmesImg;
    xhr.send();
}

function carregaFilmesImg2 () {
    xhr = new XMLHttpRequest ();

    xhr.open ('GET', TMDB_ENDPOINT + '/movie/popular' + '?api_key=' + APIKEY, true);
    xhr.onload = exibeFilmesImg2;
    xhr.send();
}

function pesquisaFilmes () { 
    
    xhr = new XMLHttpRequest ();

    query = document.getElementById('pesquisa').value;

    xhr.open ('GET', TMDB_ENDPOINT + '/search/movie' + '?api_key=' + APIKEY + '&query=' + query, true);
    xhr.onload = exibeFilmes;
    xhr.send();
}


function exibeFilmes () {
    
    let data = JSON.parse (xhr.responseText);
    let textoHTML = '';

    for (let i = 0; i < data.results.length; i++) {
        let nomeFilme = data.results[i].title;
        let sinopse = data.results[i].overview;
        let imagem = IMG_PREFIX + data.results[i].poster_path;

        textoHTML += `<div class="card col-md-4">
            <img src="${imagem}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${nomeFilme}</h5>
                <p class="card-text">${sinopse}</p>
            </div>
        </div>`
    }
    

    document.getElementById('tela').innerHTML = textoHTML;
}

function exibeFilmesImg () {
    
    let data = JSON.parse (xhr.responseText);
    let textoHTML = '';

    for (let i = 0; i < 4; i++) {
        let nomeFilme = data.results[i].title;
        let sinopse = data.results[i].overview;
        let imagem = IMG_PREFIX + data.results[i].poster_path;

        textoHTML += `<div class="card-filmes col-4">
            <img src="${imagem}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${nomeFilme}</h5>
            </div>
        </div>`
    }
    

    document.getElementById('tela1').innerHTML = textoHTML;
}

function exibeFilmesImg2 () {
    
    let data = JSON.parse (xhr.responseText);
    let textoHTML = '';

    for (let i = 0; i < data.results.length; i++) {
        let nomeFilme = data.results[i].title;
        let sinopse = data.results[i].overview;
        let imagem = IMG_PREFIX + data.results[i].poster_path;

        textoHTML += `<div class="card-filmes col-4">
            <img src="${imagem}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${nomeFilme}</h5>
            </div>
        </div>`
    }
    

    document.getElementById('tela1').innerHTML = textoHTML;
}