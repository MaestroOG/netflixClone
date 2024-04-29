import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams, useNavigate } from 'react-router-dom'

const Player = () => {

    const [playerData, setPlayerData] = useState({
        name: "",
        key: "",
        published_at: "",
        type: ""
    })

    const { id } = useParams()
    const navigate = useNavigate()

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzE4NzU0ZDMxMDI5N2Y2M2VmYWU0MzZlYWRhMGE5NCIsInN1YiI6IjY1OWUzNDhjNzc3NmYwMDIwMTNiNGE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EYK4OwauP3u1_dWIKJzVpr1RCseJzgGQQBWFlBa6PLM'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(response => response.json())
            .then(response => setPlayerData(response.results[0]))
            .catch(err => console.error(err));
    }, [])

    return (
        <div className='player'>
            <img src={back_arrow_icon} alt="" onClick={() => navigate("/")} />
            <iframe src={`https://www.youtube.com/embed/${playerData.key}`} title="Trailer" frameborder="0" width="90%" height="90%" allowFullScreen></iframe>
            <div className="player-info">
                <p>{playerData.published_at.slice(0, 10)}</p>
                <p>{playerData.name}</p>
                <p>{playerData.type}</p>
            </div>
        </div>
    )
}

export default Player