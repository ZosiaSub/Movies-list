function CreateMoviesList (movies) {

    this.show = function () {
        var container = document.getElementById("movies_list"),
            moviesKeys;

        moviesKeys = Object.keys(movies);
        console.log(moviesKeys);

        for (var i in movies) {
            var newElement = document.createElement("div"),
                selectedMovie = movies[i],
                template;

            template = ''
                + '<li class="list-group-item container">'
                + '    <figure class="col-xs-12 col-sm-3"><img src=' + selectedMovie.thumbnail + ' class="img-thumbnail">'
                + '</figure>'
                + '    <div class="col-xs-12 col-sm-9">'
                + '         <div class="stars">'
                + '             <span class="glyphicon glyphicon-star">' + selectedMovie.rating + '</span>'
                + '    </div>'
                + '    <p class="movieName">' + selectedMovie.name + '</p>'
                + '    <p>' + selectedMovie.desc + '</p>'
                + '    <a href=' + selectedMovie.movie_link + ' class="btn btn-default btn-sm active read-more" role="button">READ MORE</a>'

                + '    </div>'
                + '</li>'

            newElement.innerHTML = template;
            container.appendChild(newElement);
        }
    }
}





