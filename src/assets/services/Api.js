const api_key =  process.env.REACT_APP_API_KEY                            
const API_BASE = process.env.REACT_APP_API_URL  
const language = "language=pt-BR";

const basisFech = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}
export default {
  getHomeList: async () => {
    return [
      {
        slug: "Family",
        title: "Familia",
        items: await basisFech(`/discover/movie?api_key=${api_key}&with_genres=10751&${language}`),
      },
      {
        slug: "Animation",
        title: "Animação",
        items: await basisFech(`/discover/movie?api_key=${api_key}&with_genres=16&${language}`),
      },
      {
        slug: "Trending",
        title: "Recomendados para Você",
        items: await basisFech(`/trending/all/week?api_key=${api_key}&${language}`),
      },
      {
        slug: "Toprated",
        title: "Em Alta",
        items: await basisFech(`/movie/top_rated?api_key=${api_key}&${language}`),
      },
     
      {
        name: "Horror",
        title: "Terror",
        items: await basisFech(`/discover/movie?api_key=${api_key}&with_genres=27&${language}`),
      },
      {
        slug: "War",
        title: "Guerra",
        items: await basisFech(`/discover/movie?api_key=${api_key}&with_genres=10752&${language}`),
      },
      {
        slug: "Western",
        title: "Faroeste",
        items: await basisFech(`/discover/movie?api_key=${api_key}&with_genres=37&${language}`),
      },

    ];
  },
  getMovieInfo: async (movieId, type) => {

    let info = {};

    if (movieId) {
      switch(type) {
        case 'movie':
          info = await basisFech(`/movie/${movieId}?api_key=${api_key}&${language}`)
          break;
          case 'tv':
            info = await basisFech(`/tv/${movieId}?api_key=${api_key}&${language}`)
            break;
            default:
              info = null;
      }
    }

   return info;
  }

}



  
















    
 
  

