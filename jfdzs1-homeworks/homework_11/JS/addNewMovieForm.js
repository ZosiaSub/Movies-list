function createMovieForm() {

    this.form = function() {
        var container = document.getElementById("movies-create-region"),
            newElement = document.createElement("div"),
            template = "";

        template = ""
            + '<div class="container">'
            + ' <form class="movie" id="createForm">'
            + '     <div class="col-xs-12 col-sm-8 col-sm-offset-2">'
            + '       <p>Add your favourite movie</p>'
            + '       <div class="form-group">'
            + '         <label for="InputTitle">Movie title</label>'
            + '         <input type="title" name="name" class="form-control" id="InputTitle" placeholder="Title">'
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
    }

}