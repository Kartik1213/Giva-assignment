import React from 'react';
import { Link } from 'react-router-dom';



const MovieSearch = (props) => {
    
	return (
		<>
			{props.movies.map((movie, index) => (
                <Link to ={`details/${movie.id}`}>
                
				<div className='image-container d-flex justify-content-start align-items-center m-3'>
					<img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt='movie' height="300" width="200"></img>
                    <div className='overlay d-flex align-items-center justify-content-center'>
						{'Release Date : ' + movie.release_date }
					</div>
                    <h2>{movie.original_title}</h2>
				</div>
                </Link>
			))}

            
		</>
	);
};

export default MovieSearch;