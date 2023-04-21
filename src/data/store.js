import { reactive } from 'vue';

export const store = reactive({
  movieList: [],
  seriesList: [],
  baseUrl: 'https://api.themoviedb.org/3/',
  endPoint: {
    movie: 'search/movie',
    seriesTv: 'search/tv'
  },
  parmas: {
    api_key: '89c7f1ba90f3019cad1eea7dc6b189d2',
    query: ''
  },
  imageUrl: 'https://image.tmdb.org/t/p/',
  imgSize: 'w342',
  errors: {
    movie: '',
    tv: ''
  },
  loaders: {
    movie: false,
    tv: false
  }
});