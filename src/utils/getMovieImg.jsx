import placeholder from '../img/movienotfound.png'


export function getMovieImg(path,width) {
    
    return path? `https://image.tmdb.org/t/p/w${width}${path}`:placeholder
}

//const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path