import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieSearch from './components/MovieSearch';
import MovieHeading from './components/MovieHeading';
import SearchBox from './components/SearchBox';
import {Routes, Route, useNavigate} from 'react-router-dom';


const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
    console.log(searchValue)
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTUwOTQxOGNiOTIxY2Y2NjZmZGY4NDBhYTY3YjkzYyIsInN1YiI6IjY0NzlmMjk5ZTMyM2YzMDBlNTIzZGU4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qtPRyrrrSkQRjRYYdlYFeDTl57J248_qcDU9Hm1bYgc'
      }
    };
    if(searchValue == ''){
      var url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
    }
    else{
      var url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`
    }
		const response = await fetch(url, options);
		const responseJson = await response.json();

    console.log(responseJson)

		if (responseJson.results) {
			setMovies(responseJson.results);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);


	return (
		<div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
        <MovieSearch movies={movies} />
			</div>
		</div>
	);
};

export default App;