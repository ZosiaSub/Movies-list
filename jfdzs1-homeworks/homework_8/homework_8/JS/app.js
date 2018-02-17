

var movies = {};

function createMoviesData () {
    movies["Django1"] = {
        name: "DJANGO",
        rating: 5,
        thumbnail: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        desc: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
        movie_link: "http://www.filmweb.pl/film/Django-2012-620541",
        best_movie: true,
        worst_movie: false
    },

    movies["The_fifth_element2"] = {
        name: "THE FIFTH ELEMENT",
        rating: 5,
        thumbnail: "https://static.rogerebert.com/uploads/movie/movie_poster/the-fifth-element-1997/large_yph0ZQC0I56CzQANxEMxj3x78gb.jpg",
        desc: "In the colorful future, a cab driver unwittingly becomes the central figure in the search for a legendary cosmic weapon to keep Evil and Mr. Zorg at bay.",
        movie_link: "http://www.filmweb.pl/Piaty.Element",
        best_movie: true,
        worst_movie: false
    },

    movies["Amelia3"] = {
        name: "AMELIA",
        rating: 5,
        thumbnail: "https://i1.fdbimg.pl/wqs5ds/891x1292_kdgikr.jpg",
        desc: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
        movie_link: "http://www.filmweb.pl/Amelia",
        best_movie: false,
        worst_movie: false
    },
    movies["SinCity4"] = {
        name: "SIN CITY",
        rating: 5,
        thumbnail: "https://hellhorror.com/images/inTheaters/origs/66de5-sin-city-2005-poster.jpg",
        desc: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
        movie_link: "http://www.filmweb.pl/Sin.City",
        best_movie: true,
        worst_movie: false
    },

    movies["OgródLuizy5"] = {
        name: "OGRÓD LUIZY",
        rating: 5,
        thumbnail: "http://static.punkt44.pl/grafika/produkty/midi/10506_0004.jpg",
        desc: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
        movie_link: "http://www.filmweb.pl/film/Ogr%C3%B3d+Luizy-2007-370572",
        best_movie: false,
        worst_movie: false
    },

    movies["PanWolodyjowski6"] = {
        name: "PAN WOŁODYJOWSKI",
        rating: 5,
        thumbnail: "https://alchetron.com/cdn/Colonel-Wolodyjowski-film-images-32704c93-243f-438a-9110-b6aefefd645.jpg",
        desc: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
        movie_link: "http://www.filmweb.pl/film/Pan+Wo%C5%82odyjowski-1969-1203",
        best_movie: false,
        worst_movie: false,
    },

    movies["TygrysSmok7"] = {
        name: "PRZYCZAJONY TYGRYS UKRYTY SMOK",
        rating: 5,
        thumbnail: "https://4.bp.blogspot.com/-AqmUe1JikWw/WMEsAWGhPKI/AAAAAAAAJdI/8ZWDb1SERIEzfAEAxvNLbvZc6xVujh9owCLcB/s1600/crouching-tiger-hidden-dragon.jpg",
        desc: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
        movie_link: "http://m.filmweb.pl/film/Przyczajony+tygrys%2C+ukryty+smok-2000-1394",
        best_movie: false,
        worst_movie: false,
    },

    movies["300_8"] = {
        name: "300",
        rating: 5,
        thumbnail: "http://womenwriteaboutcomics.com/wp-content/uploads/2014/12/300.-Directed-by-Zack-Snyder.-2006.-Movie-Poster..jpg",
        desc: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
        movie_link: "http://www.filmweb.pl/300",
        best_movie: false,
        worst_movie: false,
    },

    movies["Matrix9"] = {
        name: "MATRIX",
        rating: 5,
        thumbnail: "https://i1.fdbimg.pl/tn4tz9/900x1286_kd317b.jpg",
        desc: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
        movie_link: "http://www.filmweb.pl/Matrix",
        best_movie: false,
        worst_movie: false,
    },

    movies["RozwaznaIRomantyczna10"] = {
        name: "ROZWAŻNA I ROMANTYCZNA",
        rating: 2,
        thumbnail: "https://image.tmdb.org/t/p/original/AcmA9ugmJCy3jlxIebjbma3xQ8L.jpg",
        desc: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
        movie_link: "http://www.filmweb.pl/Matrix",
        best_movie: false,
        worst_movie: true,
    },

    movies["WypiszWymaluj11"] = {
        name: "WYPISZ WYMALUJ MIŁOŚĆ",
        rating: 4,
        thumbnail: "http://kinoswiat.pl/wp-content/uploads/2014/10/Wypiszwymaluj_milosc_1str-DVD.jpg",
        desc: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
        movie_link: "http://www.filmweb.pl/film/Wypisz%2C+wymaluj...+mi%C5%82o%C5%9B%C4%87-2013-653659",
        best_movie: false,
        worst_movie: false,
    },

    movies["KillBill12"] = {
        name: "KILL BILL",
        rating: 4,
        thumbnail: "https://www.theplace2.ru/archive/kill_bill/img/KILLBILL.jpg",
        desc: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
        movie_link: "http://www.filmweb.pl/Kill.Bill",
        best_movie: false,
        worst_movie: false,
    },

    movies["NienawistnaOsemka13"] = {
        name: "Nienawistna Ósemka",
        rating: 3,
        thumbnail: "https://cont5.naekranie.pl/wp-content/uploads/2014/05/Nienawistna-%C3%B3semka-plakat.jpg",
        desc: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
        movie_link: "http://www.filmweb.pl/Kill.Bill",
        best_movie: false,
        worst_movie: true,
    },

    movies["Seksmisja14"] = {
        name: "Seksmisja",
        rating: 3,
        thumbnail: "http://static.punkt44.pl/grafika/produkty/midi/92881_0003.jpg",
        desc: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
        movie_link: "http://www.filmweb.pl/Seksmisja",
        best_movie: false,
        worst_movie: false,
    },

    movies["Mis15"] = {
        name: "MIŚ",
        rating: 3,
        thumbnail: "http://vignette4.wikia.nocookie.net/movies/images/e/ea/Mi%C5%9B_film.jpg/revision/latest?cb=20160322181857&path-prefix=pl",
        desc: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
        movie_link: "http://www.filmweb.pl/Mis",
        best_movie: false,
        worst_movie: false,
    },

    movies["LeonZawodowiec16"] = {
        name: "LEON ZAWODOWIEC",
        rating: 3,
        thumbnail: "https://i1.fdbimg.pl/hff6ds/800x1098_ketn0d.jpg",
        desc: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
        movie_link: "http://www.filmweb.pl/Leon.Zawodowiec",
        best_movie: false,
        worst_movie: false,
    },

    movies["Godzilla17"] = {
        name: "GODZILLA",
        rating: 1,
        thumbnail: "https://ae01.alicdn.com/kf/HTB1ndF0eosIL1JjSZPiq6xKmpXa5/DIY-ramka-3-SZTUK-WYBRA%C4%86-font-b-Godzilla-b-font-Science-fiction-Film-Plakat-plakaty-i.jpg",
        desc: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
        movie_link: "http://www.filmweb.pl/film/Godzilla-2014-565162",
        best_movie: false,
        worst_movie: true,
    },

    movies["NieLubiePoniedzialku18"] = {
        name: "NIE LUBIĘ PONIEDZIAŁKU",
        rating: 4,
        thumbnail: "http://static.punkt44.pl/grafika/produkty/midi/5045_0004.jpg",
        desc: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
        movie_link: "http://www.filmweb.pl/Nie.Lubie.Poniedzialku",
        best_movie: false,
        worst_movie: false,
    },

    movies["BekartyWojny19"] = {
        name: "BĘKARTY WOJNY",
        rating: 5,
        thumbnail: "https://abortionsforall.files.wordpress.com/2010/12/basterdsposter.jpg",
        desc: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
        movie_link: "http://www.filmweb.pl/Bekarty.Wojny",
        best_movie: false,
        worst_movie: false,
    },

    movies["PulpFiction20"] = {
        name: "PULP FICTION",
        rating: 4,
        thumbnail: "http://cdn.collider.com/wp-content/uploads/pulp-fiction-poster.jpg",
        desc: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
        movie_link: "http://www.filmweb.pl/Pulp.Fiction",
        best_movie: false,
        worst_movie: false,
    },

    saveToLocalStorage();
    window.location.href = "index.html";
};


function saveToLocalStorage() {
    var moviesToString = JSON.stringify(movies);
    localStorage.setItem("moviesList", moviesToString);
};

function loadFromLocalStorage() {
    var moviesList = localStorage.getItem("moviesList"),
        stringToObject = JSON.parse(moviesList);
    movies = stringToObject;
};


function CreateMoviesList () {


    var container = document.getElementById("movies_list"),
        moviesKeys;

    loadFromLocalStorage();

    if(!movies){
        movies = {}
    } else {
        document.getElementById('empty_list').classList.add('hidden');
        document.getElementById('clear-storage').classList.remove('hidden');
    }

    moviesKeys = Object.keys(movies);
    console.log(moviesKeys);

    for (var i=0; i < moviesKeys.length; i++) {
        var newElement = document.createElement("div"),
            selectedMovie = movies[moviesKeys[i]],
            template;

        template = ''
            + '<li class="list-group-item container">'
            + '    <figure class="col-xs-12 col-sm-3"><img src=' + selectedMovie.thumbnail + ' class="img-thumbnail">'
            + '</figure>'
            + '    <div class="col-xs-12 col-sm-9">'
            + '         <div class="stars">'
            + '             <span class="glyphicon glyphicon-star">' + selectedMovie.rating + '</span>'
            + '    </div>'
            + '    <p>' + selectedMovie.name + '</p>'
            + '    <p>' + selectedMovie.desc + '</p>'
            + '    <a href=' + selectedMovie.movie_link + ' class="btn btn-default btn-sm active read-more" role="button">READ MORE</a>'

            + '    </div>'
            + '</li>'

        newElement.innerHTML = template;
        container.appendChild(newElement);
    }

};
CreateMoviesList();

function clearStorage(){
    var clear = document.getElementById('clear-storage'),
        hideMovies = document.getElementById('movies_list');
    clear.classList.add('hidden');
    hideMovies.classList.add('hidden');
    document.getElementById('empty_list').classList.remove('hidden');
    localStorage.removeItem("moviesList");
};

