import { Component } from 'react';
import { Dropdown, Container } from 'react-bootstrap';
import { Grid, Grid3x3 } from 'react-bootstrap-icons';
import FilmsList from './FilmsList';

class Main extends Component {
  render() {
    return (
      <Container fluid className='px-4'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex'>
            <h2 className='mb-4'>TV Shows</h2>
            <div className='btn-group' role='group'>
              {/* <div className='dropdown ms-4 mt-1'>
                <Button
                  type='button'
                  className='btn btn-secondary btn-sm dropdown-toggle rounded-0'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                  style={{ backgroundColor: '#221f1f' }}
                >
                  Genres
                </Button>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Comedy
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Drama
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Thriller
                    </a>
                  </li>
                </ul>
              </div> */}

              <Dropdown className='ms-4 mt-1'>
                <Dropdown.Toggle
                  variant='secondary'
                  size='sm'
                  className='rounded-0'
                  id='dropdown-basic'
                  style={{ backgroundColor: '#221f1f' }}
                >
                  Genres
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href='#'>Comedy</Dropdown.Item>
                  <Dropdown.Item href='#'>Drama</Dropdown.Item>
                  <Dropdown.Item href='#'>Thriller</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div>
            <Grid className='icons'></Grid>
            <Grid3x3 className='icons'></Grid3x3>
          </div>
        </div>

        <h4>Trending Now</h4>
        <FilmsList query='Star Wars' />

        <h4>Watch it Again</h4>
        <FilmsList query='Fast and Furious' />

        <h4>New Releases</h4>
        <FilmsList query='Harry Potter' />
      </Container>
    );
  }
}

export default Main;
