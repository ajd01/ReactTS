import React from 'react';
import * as source from '../source'
import MoviesGrid from './MoviesGrid'

class MoviesSearch extends React.Component<{}, { 
    inputValue: string ,
    movies: object
}> {
    constructor(props: any) {
        super(props)
        this.state = {
            inputValue: '',
            movies: {}
        }
        this.updateInputValue = this.updateInputValue.bind(this);
        this.getResult = this.getResult.bind(this);
    }

    updateInputValue(evt: any) {
        this.setState({
          inputValue: evt.target.value
        });
    }
    
    async getResult() {
        const movies: object = await source.searchMovies(this.state.inputValue)
        this.setState({
            inputValue: this.state.inputValue,
            movies: movies
        });
    }
    render () {
        const moviesResult = {
            movies: this.state.movies
        }
        return (
            <div>
                <h2>Serch movies by title:</h2>
                <input onChange={this.updateInputValue}/>
                <button onClick={this.getResult}>Search</button>
                <MoviesGrid {...moviesResult}/>
            </div>
        )
    }
}

export default MoviesSearch