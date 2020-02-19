import React from 'react';
import * as source from '../source'
import { timingSafeEqual } from 'crypto';

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
    }
    updateInputValue(evt: any) {
        this.setState({
          inputValue: evt.target.value
        });
    }
    getResult() {
        const movies: object = source.searchMovies(this.state.inputValue)
        this.setState({
            inputValue: this.state.inputValue,
            movies: movies
        });
    }
    render () {
        console.log(this.state.movies)
        return (
            <div>
                Serch movies by title:
                <input onChange={this.updateInputValue}/>
            </div>
        )
    }
}

export default MoviesSearch