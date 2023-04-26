import React from 'react';
import {BsCalendarFill,BsFillStarFill} from 'react-icons/bs'
import './FeaturedCover.css';


const FeaturedCover =  ({item}) => {

 let formattedDate = new Date(item.release_date);
 


    return (
        <section className="featuredcover" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
            
            <div className="featuredcover--vertical">
                <div className="featuredcover--horizontal">
                 <div className="featuredcover--title">{item.title}</div>
                 <div className="featuredcover--overview">{item.overview}</div>
                 <div className="featuredcover--vote"><BsFillStarFill/>{item.vote_average.toFixed(1)} pontos</div>
                 <div className="featuredcover--date"><BsCalendarFill/>{formattedDate.getFullYear()}</div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedCover;


