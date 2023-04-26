import React, {useEffect, useState} from 'react'
import api from "../../assets/services/Api";
import MoviesCard from '../moviesCard/MoviesCard';
import FeaturedCover from '../featuredcover/FeaturedCover';
import "./CoversAndCards.css"


const CoversAndCards = () => {
  const [movielist, setMovieList] = useState([]);
  const [featureddata, setFeaturedData] = useState(null);


 useEffect(()=> {
  const loadAll = async () => {
    let list = await api.getHomeList();
    setMovieList(list);

   let familys = list.filter(i=>i.slug === 'Family');
   let randomCover = Math.floor(Math.random() * (familys[0].items.results.length -1))
   let  randomMovie = familys[0].items.results[randomCover];
   let randomMovieId = await api.getMovieInfo(randomMovie.id,'movie');
   setFeaturedData(randomMovieId);

   console.log(randomMovie);
  }

  loadAll();

 }, []);



  return (
    <div>
      {featureddata && 
      <FeaturedCover item={featureddata}/>}
      
      <section>
        {movielist.map((item, key) => (
          <div>
            <MoviesCard key={key} title={item.title}items={item.items}/>
          </div>

        ))}
      </section>
    </div>
  );
}
export default CoversAndCards;

