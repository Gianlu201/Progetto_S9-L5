import { Component } from 'react';
import { Row } from 'react-bootstrap';

import '../../public/assets/css/filmList.css';

const URL = 'http://www.omdbapi.com/?apikey=d2993ad1&s=';

class FilmsList extends Component {
  state = {
    filmList: [],
  };

  getFilmList = async () => {
    try {
      const response = await fetch(URL + this.props.query);
      if (response.ok) {
        const data = await response.json();
        this.setState({ filmList: data.Search });
      } else {
        throw new Error("Errore nella lettura dell'API");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getFilmList();
  }

  render() {
    return (
      <Row className='filmList mb-4'>
        {this.state.filmList.map((film, i) => {
          if (i < 6) {
            return (
              <div key={film.imdbID} className='singleFilm mb-2 px-1'>
                <img
                  src={film.Poster}
                  alt={film.Title}
                  className='filmPoster'
                />
              </div>
            );
          }
        })}
      </Row>
    );
  }
}

export default FilmsList;
