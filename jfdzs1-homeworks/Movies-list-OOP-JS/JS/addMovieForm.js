
function addMovieFormActions (movies) {

    var newMovie = {};

    this.create = function createAddMovieForm() {

        var container = document.getElementById("movies-create-region"),
            newElement = document.createElement("div"),
            template = "";

        template = ""
            + '<div class="container">'
            + ' <form class="movie">'
            + '     <div class="col-xs-12 col-sm-8 col-sm-offset-2">'
            + '       <p>Add your favourite movie</p>'
            + '       <div class="form-group">'
            + '         <label for="InputTitle">Movie title</label>'
            + '         <input name="title" class="form-control" id="InputTitle" placeholder="Title">'
            + '       </div>'
            + '       <div class="form-group">'
            + '         <label for="InputStars">Your Opinion (max. 5*)</label>'
            + '         <input name="rating" class="form-control" id="InputStars" placeholder="Amount of stars">'
            + '      </div>'
            + '      <div class="form-group">'
            + '         <label for="InputStars">Description</label>'
            + '         <input name="desc" class="form-control" id="InputStars" placeholder="Movie description">'
            + '      </div>'
            + '      <div class="form-group">'
            + '         <label for="InputStars">Poster</label>'
            + '         <input name="photo" class="form-control" id="InputStars" placeholder="Movie poster">'
            + '      </div>'
            + '      <div class="form-group">'
            + '         <label for="InputStars">Movie link</label>'
            + '         <input name="link" class="form-control" id="InputStars" placeholder="Movie link">'
            + '      </div>'
            + '      <button id="movieCreateButton" type="submit" class="btn btn-danger">Submit</button>'
            + '     </div>'
            + ' </form>'
            + '</div>';

        newElement.innerHTML = template;
        container.appendChild(newElement);
    };

    this.save = function addNewMovieButtonListener () {

        var saveButton = document.getElementById("movieCreateButton");


        saveButton.addEventListener("click", function () {
            var form = document.forms[0];
            newMovie = {
                name: form.title.value,
                rating: form.rating.value,
                desc: form.desc.value,
                thumbnail: form.photo.value,
                movie_link: form.link.value

            };
        });

        return newMovie;
    };

    this.append = function addNewMovieToList() {

        if (!newMovie.name) return alert("Add title");

        movies[newMovie.name] = newMovie;

    }

}




