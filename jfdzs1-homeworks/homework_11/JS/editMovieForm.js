function editFilmFromList () {

    this.edit = function(){

        var container = document.getElementById("movie-edition-container"),
            newElement = document.createElement("div"),
            template = "";

        template = ""
            + ' <div class="container">'
            + '  <form class="movie">'
            + '   <div class="col-xs-12 col-sm-8 col-sm-offset-2">'
            + '       <p>Edit movie</p>'
            + '       <div class="form-group">'
            + '         <label for="InputTitle">Movie title</label>'
            + '         <select name="movie" id="movies-select">'
            + '<option>--- Choose ---</option>'
            + '</select>'
            + '       </div>'
            + '       <div class="form-group">'
            + '         <label for="InputRating">Title</label>'
            + '         <input name="name" class="form-control" id="InputStars" placeholder="Movie title">'
            + '      </div>'
            + '       <div class="form-group">'
            + '         <label for="InputRating">Opinion (max. 5*)</label>'
            + '         <input name="rating" class="form-control" id="InputStars" placeholder="Amount of stars">'
            + '      </div>'
            + '      <div class="form-group">'
            + '         <label for="InputDesc">Description</label>'
            + '         <input name="desc" class="form-control" id="InputStars" placeholder="Movie description">'
            + '      </div>'
            + '      <div class="form-group">'
            + '         <label for="InputPhoto">Poster</label>'
            + '         <input name="photo" class="form-control" id="InputStars" placeholder="Movie poster">'
            + '      </div>'
            + '      <button id="movieEditionButton" type="submit" class="btn btn-danger">Submit</button>'
            + '     </div>'
            + ' </form>'
            + '</div>';

        newElement.innerHTML = template;
        container.appendChild(newElement);

        // InsertMovieOptions();
        // PutDataToForm();
        // SaveEditionButton();
    }
}