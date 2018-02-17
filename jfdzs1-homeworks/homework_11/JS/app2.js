
const moviesListController = {

    start: function (movies) {
        var view;
        view = new CreateMoviesList(movies);
        view.show();

    },
    cerateMovieForm : function () {
        var createform;
        createform = new createMovieForm();
        createform.form();
    },
    removeMovieForm : function () {
        var movies = moviesStore.getMoviesList();
        var removeForm;
        removeForm = new movieRemoveForm(movies);
        removeForm.remove();
    },
    editionMovieForm : function () {
        var editionForm;
        editionForm = new editFilmFromList();
        editionForm.edit();
    },
    movieOptions : function () {
        var movies = moviesStore.getMoviesList();
        var keys = Object.keys(movies),
            optionContainer = document.getElementById("movies-select");

        for (var i = 0; i < keys.length; i++) {
            var optionElement = document.createElement("option"),
                movie = movies[keys[i]];

            optionElement.text = movie.name;
            optionElement.value = keys[i];

            optionContainer.appendChild(optionElement);
        }
    },
    removeButton: function AttachRemoveButtonListener() {

        var movies = moviesStore.getMoviesList();
        var removeButton = document.getElementById("movieRemoveButton");

        removeButton.addEventListener("click", function () {
            var form = document.forms[0],
                movieName = form.movie.value,
                select = document.getElementById("movies-select");

            delete movies[movieName];
            select.remove(select.selectedIndex);
            moviesStore.save();
            moviesStore.reload();
        })
    },
    addMovie: function addNewMovie() {
        var movies = moviesStore.getMoviesList();
        var saveButton = document.getElementById("movieCreateButton");
        var newMovie;

        saveButton.addEventListener("click", function () {
            var form = document.getElementById("createForm");
            newMovie = {
                name: form.name.value,
                rating: form.rating.value,
                desc: form.desc.value,
                thumbnail: form.photo.value,
                movie_link: form.link.value
             };

            if (!newMovie.name) return alert("Add title");

            movies[newMovie.name] = newMovie;

            moviesStore.save();
            moviesStore.reload();

        });
    },
    putData : function PutDataToForm() {

        var movies = moviesStore.getMoviesList();
        var selectById = document.getElementById("movies-select");

        selectById.addEventListener('change', function(){
            var form = document.forms[0],
                movie = movies[selectById.value];

            form.name.value = movie.name;
            form.rating.value = movie.rating;
            form.desc.value = movie.desc;
            form.photo.value = movie.thumbnail;
        });
    },
    editButton : function SaveEditionButton() {

        var movies = moviesStore.getMoviesList();
        var saveButton = document.getElementById("movieEditionButton");

        saveButton.addEventListener("click", function () {
            var form = document.forms[0],
                selected = document.getElementById("movies-select");

            var editMovie = {
                name: form.name.value,
                rating: form.rating.value,
                desc: form.desc.value,
                thumbnail: form.photo.value,
            };

            movies[selected.value] = editMovie;

            moviesStore.save();
            moviesStore.reload();
        });
    }

}


function getActionFromUrl(action) {
    var pageUrl = window.location.href,
        name = action,
        regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(pageUrl);

    if (!results || !results[2]) return;
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function start () {
    var requestedAction = getActionFromUrl("jakasAkcja");

    switch (requestedAction) {
        case "removeMovie":
            moviesStore.load();
            moviesListController.removeMovieForm();
            moviesListController.movieOptions();
            moviesListController.removeButton();
            break;
        case "createMovie":
            moviesStore.load();
            moviesListController.cerateMovieForm();
            moviesListController.addMovie();
            break;
        case "editMovie":
            moviesStore.load();
            moviesListController.editionMovieForm();
            moviesListController.movieOptions();
            moviesListController.putData();
            moviesListController.editButton();
            break;
        case "showMovies":
            moviesStore.load();
            moviesListController.start(moviesStore.getMoviesList());
            break;
        case "clearStorage":
            moviesStore.clear();
            moviesStore.load();
            moviesListController.start(moviesStore.getMoviesList());
        default:
            moviesStore.load();
            moviesListController.start(moviesStore.getMoviesList());

    }
}

var moviesStore = new Store();


start();