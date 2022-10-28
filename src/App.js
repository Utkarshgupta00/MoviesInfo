import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Movies from './Movies';
import Icon from './search.jpg';

const API_URL = 'http://www.omdbapi.com?apikey=b7cea956';
const App = () =>{
    const[movies,setMovies] = useState([]);
    const[searchTerm,setsearchTerm] = useState('');


    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
        setMovies(data.Search);
    }
    useEffect(() => {
    searchMovies('avengers');
    },[])
    return(
        <div className="container">
            <h1 className='names'>Movie<span>Info</span></h1>
            <div className = "center">
            <div className = "search center">
                <input placeholder="Search A Movie Name Bhaya"
                autocomplete ="on"
                value = {searchTerm}
                onChange={(e)=>setsearchTerm(e.target.value)}
                />
                <img
                className='icon'
                src = {Icon}
                alt="search"
                onClick={()=>searchMovies(searchTerm)}
                />
            </div>                
            </div>

            {
                movies?.length > 0
                ? (<div className="center">
                    <div className='movie-area'>
                        {movies.map((movie)=>(
                            <Movies movie={movie}/>
                        ))}               
                    </div>                    
                </div>
                    
                )
                :
                (
                    <div>
                        <h2 className='nomatch center'>no such movies found</h2>
                    </div>
                )
            }



        </div>
    )
}

export default App;