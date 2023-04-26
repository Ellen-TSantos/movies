
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import"./Details.css"
import { BsChevronLeft, BsFillStarFill } from "react-icons/bs";

const apiKey = process.env.REACT_APP_API_KEY
 
function Details () {
    const {id} = useParams()
    const [item , setItem] = useState([])
    
    const imagePath = "https://image.tmdb.org/t/p/w400"

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then (data => {
            const {title, poster_path, overview, vote_average ,popularity} = data
            const item ={
                id,
                title,
                image:`${imagePath}${poster_path}`,
                sinopse:overview,
                vote_average:vote_average.toFixed(1),
                popularity: popularity,
            }
            setItem(item)
        })
    }, [id])

    return (
        <div className="item--movie">
        <NavLink to="/"><button className="item--button"><BsChevronLeft/>Voltar</button></NavLink>
        <img src={item.image} alt={item.sinopse}/>
        <div className="item--h1">
         <h1>{item.title}</h1>
         <div>{item.sinopse}</div>
         <div className="item--vote_average"><BsFillStarFill/>{item.vote_average}:Votos</div>
         <div className="item--popularity">Popularidade:{item.popularity}</div>
        </div>
        </div>
    )
}
export default Details;