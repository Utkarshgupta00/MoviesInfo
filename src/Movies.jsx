import React from 'react';
import './App.css';

const Movies = ({movie}) =>{
    return(
        <div className = "rows">
            
                <div className="movie">
                    <div className="banner">
                        <img className='poster' src={movie.Poster}/>  
                    </div>
            
                    <div className='movie-description'>
                        <div>{movie.Title}</div>
                        <p>Year : {movie.Year}</p>
                        <span>imdb : {movie.imdbID}</span>
                        <div>{movie.Type}</div>                       
                    </div>
                </div>
            

        </div>


)}
export default Movies;