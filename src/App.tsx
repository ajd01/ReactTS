import React from 'react';
import './App.css';
import MoviesSearch from './components/Movies'

function App() {
  let uno = {
    name: 'unotalks',
    place: 'Kraken GastroPub'
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          :o Typescript o:
        </p>
        <p>
          { uno.name }: { uno.place } {/* uno.date */}
        </p>
        <MoviesSearch/>
      </header>
    </div>
  )
}

export default App;
