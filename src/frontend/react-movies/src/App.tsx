import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import IndividualMovie from './movies/IndividualMovie';
import { landingPageDTO, movieDTO } from './movies/movies.model';
import MoviesList from './movies/MovieList';
import Button from './utils/Button';


function App() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: 'Spider-Man: Far From Home',
            poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg',
          },
          {
            id: 2,
            title: 'Luca',
            poster: 'https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg',
          }
        ],
        upComingReleases: [
          {
            id: 3,
            title: 'Soul',
            poster: 'https://upload.wikimedia.org/wikipedia/en/3/39/Soul_%282020_film%29_poster.jpg',
          }
        ]
      })
    }, 1000);

    return () => clearTimeout(timerId);
  })

  const inTheaters: movieDTO[] = [
    {
      id: 1,
      title: 'Spider-Man: Far From Home',
      poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg',
    },
    {
      id: 2,
      title: 'Luca',
      poster: 'https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg',
    }
  ];

  const upComingReleases: movieDTO[] = [
    {
      id: 3,
      title: 'Soul',
      poster: 'https://upload.wikimedia.org/wikipedia/en/3/39/Soul_%282020_film%29_poster.jpg',
    }
  ];

  return (
    <>
      <div className='container'>
        <Button children={<>My Button</>}></Button>
        <h3>In Theatres</h3>
        <MoviesList movies={movies.inTheaters} />

        <h3>Upcoming Release</h3>
        <MoviesList movies={movies.upComingReleases} />

      </div>
    </>
  )
}

export default App;
