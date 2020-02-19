import React from 'react';

const MoviesGrid = (props: any) => {
    interface movies {
        data: {
            Error?: String,
            Search?: Array<{
                Title: string,
                Year: string,
                imdbID: string,
                Type: string,
                Poster: string
            }>
        }
        
    }
    const movies = (props.movies as movies)
    if (!movies || !movies.data) {
        return (
            <div>
                Look for a movie
            </div>    
        )
    }
    if (movies.data && movies.data.Error) {
        return (
            <div>
                Error: {movies.data.Error}
            </div>    
        )
    }
    const moviesResult = movies.data.Search || []
    return (
        <div>
            {
                moviesResult?.map( movie => {
                    return (
                        <div key={movie.imdbID}>
                            <hr/>
                            <img src={movie.Poster}></img>
                            <p>{movie.Title} ({movie.Year})</p>
                            <p>{movie.Type}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default MoviesGrid