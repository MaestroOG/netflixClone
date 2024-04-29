import React, { useState, useEffect } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({ cardHeader = "Popular on Netflix", category }) => {
    // const cardsRef = useRef();

    // const handleWheel = (event) => {
    //     event.preventDefault();
    //     cardsRef.current.scrollLeft += event.deltaY;
    // }

    const [apiData, setApiData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzE4NzU0ZDMxMDI5N2Y2M2VmYWU0MzZlYWRhMGE5NCIsInN1YiI6IjY1OWUzNDhjNzc3NmYwMDIwMTNiNGE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EYK4OwauP3u1_dWIKJzVpr1RCseJzgGQQBWFlBa6PLM'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => setApiData(response.results))
            .catch(err => console.error(err));
    }, [])

    return (
        <div className='title-cards'>
            <h2>{cardHeader}</h2>
            <div className="card-list">
                {apiData && apiData.map((card, index) => {
                    return (
                        <Link to={`/player/${card.id}`} className="card" key={card.id}>
                            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
                            <p>{card.original_title}</p>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default TitleCards