import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const MovieDetail = (props) => {
    let {id} = useParams();
    console.log(id)
    const [data, setData] = useState({});

	const getMovieDetails = async () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTUwOTQxOGNiOTIxY2Y2NjZmZGY4NDBhYTY3YjkzYyIsInN1YiI6IjY0NzlmMjk5ZTMyM2YzMDBlNTIzZGU4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qtPRyrrrSkQRjRYYdlYFeDTl57J248_qcDU9Hm1bYgc'
        }
      };
        var url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`
        const response = await fetch(url, options);
        const responseJson = await response.json();
        setData(responseJson)
    }

    useEffect(() => {
		getMovieDetails();
	}, []);
  return (
    <div className="flex py-2">
      <img
        src={'https://image.tmdb.org/t/p/w500' + data.poster_path}
        height={300}
        width={200}
        alt=""
        className="w-[120px] h-[176px] rounded-lg "
      />
        <div className="ml-3 flex flex-col justify-between ">
            <div>
                <div className="mt-1">
                    <p className="text-[19px] ">{'Title : ' + data.title} </p>
                </div>

                <div className="mt-1">
                    <p className="text-[19px] ">{'Summary : ' +data?.overview} </p>
                </div>
                <div className="mt-1">
                    <p className="text-[19px] ">{'Runtime : ' + data?.runtime} </p>
                </div>
                <div className="mt-1">
                    <p className="text-[19px] ">{'Release Date : ' + data?.release_date} </p>
                </div>
            </div>    
        </div>
    </div>
  );
};

export default MovieDetail;
