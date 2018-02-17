function Store () {
    /*
    * ====================================
    * STORE DEFAULTS
    * ====================================
     */
    var movies = {};

    this.createNewMovie = createNewMovie,
    this.getMoviesList = getMoviesList,
    this.save = save,
    this.load = load,
    this.clear = clear


    /*
    * ======================================
    * BASE FUNCTIONS THAT CAN BE ACCESSED
    * ======================================
     */

    function createNewMovie(name, rating, thumbnail, desc, movie_link) {
        movies[name] = new Movie(name, rating, thumbnail, desc, movie_link);
        save();
    }

    function getMoviesList() {
        return movies;
    }

    function save() {
        const moviesToString = JSON.stringify(movies);
        localStorage.setItem("moviesList", moviesToString);
    }

    function load() {
        const moviesList = localStorage.getItem("moviesList"),
            stringToObject = JSON.parse(moviesList);

        if (!stringToObject) return _createMockData();

        movies = stringToObject;
    }

    function clear() {
        const clearStorage = document.getElementById('clear-storage'),
              hideMovies = document.getElementById('movies_list');
        clearStorage.classList.add('hidden');
        hideMovies.classList.add('hidden');
        localStorage.removeItem("moviesList");
        reloadPage();
    }


    /*
    * ======================================
    * HELPER, PRIVATE FUNCTIONS
    * ======================================
     */

    function _createMockData() {
        createNewMovie("DJANGO", 5, "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg", "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.", "http://www.filmweb.pl/film/Django-2012-620541");
        createNewMovie("THE FIFTH ELEMENT", 5, "https://static.rogerebert.com/uploads/movie/movie_poster/the-fifth-element-1997/large_yph0ZQC0I56CzQANxEMxj3x78gb.jpg", "In the colorful future, a cab driver unwittingly becomes the central figure in the search for a legendary cosmic weapon to keep Evil and Mr. Zorg at bay.", "http://www.filmweb.pl/Piaty.Element");
        createNewMovie("SIN CITY", 5, "https://hellhorror.com/images/inTheaters/origs/66de5-sin-city-2005-poster.jpg", "A film that explores the dark and miserable town, Basin City, and tells the story of three different people, all caught up in violent corruption.", "http://www.filmweb.pl/Sin.City");
        createNewMovie("OGRÓD LUIZY", 4, "http://static.punkt44.pl/grafika/produkty/midi/10506_0004.jpg", "A young girl living in her own fantasy world and a gangster on psychiatric observation meet and fall in love in a mental asylum.", "http://www.filmweb.pl/film/Ogr%C3%B3d+Luizy-2007-370572");

        reloadPage();
    }

    function reloadPage() {
        window.location.href = "index2.html";
    }


    /*
    * ======================================
    * MOVIE CONSTRUCTOR
    * ======================================
     */

    function Movie(name, rating, thumbnail, desc, movie_link) {
        this.name = name;
        this.rating = rating;
        this.thumbnail = thumbnail;
        this.desc = desc;
        this.movie_link = movie_link
    }
}
