function movieRemoveForm (movies) {

    this.remove = function () {
        var container = document.getElementById("movie-remove-container"),
            newElement = document.createElement("div"),
            template = "";

        template = ""
            + '<div class="form-container">'
            + '  <form>'
            + '  <h1>Remove movie</h1>'
            + '<div class="form-group">'
            + '<label class="control-label" for="select">Choose movie from the list</label><i class="bar"></i>'
            + '<select name="movie" id="movies-select">'
            + '<option>--- Choose ---</option>'
            + '</select>'
            + '</div>'
            + '</form>'
            + '<div class="button-container">'
            + '<button class="button" type="button" id="movieRemoveButton"><span>Delete</span></button>'
            + '</div>'
            + '</div>';

        newElement.innerHTML = template;
        container.appendChild(newElement);

    }
}