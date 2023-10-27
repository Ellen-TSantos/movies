const api_key = process.env.REACT_APP_API_KEY;
const API_BASE = process.env.REACT_APP_API_URL;
const language = "language=pt-BR";
const basisFech = async (endpoint) => {
  try {
    const req = await fetch(`${API_BASE}${endpoint}`);

    if (!req.ok) {
      throw new Error(`Erro na requisição: ${req.status} ${req.statusText}`);
    }

    const json = await req.json();
    console.log(json);

    return json;
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    throw error;
  }
};
const Api = {
  getHomeList: async () => {
    try {
      const homeList = [
        {
          slug: "Family",
          title: "Família",
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
          slug: "Action",
          title: "Ação",
          items: await basisFech(`/discover/movie?api_key=${api_key}&with_genres=28&${language}`),
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

      return homeList;
    } catch (error) {
      console.error("Erro ao buscar lista de filmes:", error);
      throw error;
    }
  },
  getMovieInfo: async (movieId, type) => {
    try {
      let info = {};

      if (movieId) {
        switch(type) {
          case 'movie':
            info = await basisFech(`/movie/${movieId}?api_key=${api_key}&${language}`);
            break;
          case 'tv':
            info = await basisFech(`/tv/${movieId}?api_key=${api_key}&${language}`);
            break;
          default:
            info = null;
        }
      }

      return info;
    } catch (error) {
      console.error("Erro ao buscar informações do filme/TV:", error);
      throw error;
    }
  }

 

};

export default Api;



    
 
  

