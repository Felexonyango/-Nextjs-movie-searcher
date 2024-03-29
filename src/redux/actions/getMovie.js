import * as actionTypes from "./actionTypes";

export function getMovieSuccess(movie) {
    return {
        type: actionTypes.GET_MOVİE_SUCCESS,
        payload:movie
    }
}

export function getMovie(name,year,type) {
     const apikey=procee.env.apikey
    return function (dispatch) {
      let url = `http://www.omdbapi.com/?s=${name}&type=${type}&y=${year}&apikey=d03ca61b`;
      return fetch(url)
        .then((response) => response.json())
        .then((result) => dispatch(getMovieSuccess(result)));
        
    };
  }
