
import React,{useState} from 'react';
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";

import './MoviesCard.css';
import { NavLink } from 'react-router-dom';

const MoviesCard =  ({title, items }) => {
  const [scrollx, setScrollx] = useState(-400);

  const handleLeftArrow = () => {
    let x = scrollx + Math.round(window.innerWidth / 2);
    if(x > 0){
      x = 0;
    }
  
    setScrollx(x);
  }

  const handleRightArrow = () => {
    let x = scrollx - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 250;
    if ((window.innerWidth - listW) > x){
      x = (window.innerWidth - listW) -78;
    }
    setScrollx(x);
  }

    return (
        <div className="movieCard">
            <h2>{title}</h2>
            <div className="movieCard--left" onClick={handleLeftArrow}><BsCaretLeft/></div>
            <div className="movieCard--right" onClick={handleRightArrow}><BsCaretRight/></div>

            <div className="movieCard--listarea">
             <div className="movieCard--list" style={{
              marginLeft: scrollx,
              width: items.results.length * 250
              }}>
                {items.results.length > 0 && items.results.map((item, key) => (
                  <div key={key} className="movieCard--item" >
                   <NavLink to={`/details/${item.id}`}><img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/></NavLink>
                  </div>
                ))}
             </div>
            </div>
        </div>
    );
}
export default MoviesCard;

