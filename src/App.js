import React from 'react';
import './App.css';
import Film from './components/Film/Film';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      loaded: false
    }
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(res => res.json())
      .then(json => {
        this.setState({
          loaded: true,
          films: json,
        })
      });
  }

  render() {
    let { loaded, films } = this.state;
    if(!loaded) {
      return <div>LOADING...</div>
    } else {
      return (
        <div className="App">
          <div className="bannerTitulo">
            <h1>Studio Ghibli Films</h1>
          </div>
          <div className="fichas">
            {films.map(film => (
              <Film film={film} key={film.id} />
            ))}
          </div>
        </div>
      )
    }
  }
}

export default App;
