import Vue from 'vue'

export const state = () => ({
  results: null,
  totalResults: null,
  responseReady: false,
  error: null
})

export const getters = {
  totalResults: (state) => {
    return state.totalResults
  },
  results: (state) => {
    return state.results
  },
  resultsLoaded: (state) => {
    return state.results !== null
  },
  responseReady: (state) => {
    return state.responseReady
  },
  error: (state) => {
    return state.error
  }
}

export const mutations = {
  SET_TOTAL_RESULTS (state, payload) {
    state.totalResults = parseInt(payload)
  },
  SET_RESPONSE_READY (state, payload) {
    state.responseReady = payload
  },
  SET_ERROR (state, payload) {
    state.error = payload
  },
  SET_MOVIE_IDS (state, payload) {
    state.results = payload
  },
  SET_MOVIE_DATA (state, payload) {
    const resultIndex = state.results.findIndex(imdbID => imdbID === payload.imdbID)
    Vue.set(state.results, resultIndex, {
      Title: payload.Title,
      Year: payload.Year,
      Director: payload.Director,
      Poster: payload.Poster,
      Plot: payload.Plot,
      Loaded: true
    })
  },
  RESET_STATE (state) {
    state.results = null
    state.totalResults = null
    state.responseReady = false
    state.error = null
  }
}

export const actions = {
  resetState (context) {
    context.commit('RESET_STATE')
  },

  async getMoviesListByTitle (context, title) {
    const movies = await this.$axios.$get('/', {
      params: {
        s: title,
        page: 1
      }
    })
      .catch(() => {
      // something bad happened to request, set error
        const errorMsg = 'Request error, please try again later'
        context.commit('SET_ERROR', errorMsg)
        throw new Error(errorMsg)
      })

    /**
      Since this endpoint does not provide Director,
      Only imdbID's are stored as there's no point
      of mixing information between two endpoints.
      Better to have single source of truth
    **/

    if (movies && movies.Response.toLowerCase() === 'true') {
      // if response is good, add movies imdb id's to store results
      const imdbIDs = movies.Search.map(movie => movie.imdbID)
      context.commit('SET_RESPONSE_READY', true)
      context.commit('SET_MOVIE_IDS', imdbIDs)
      context.commit('SET_TOTAL_RESULTS', movies.totalResults)
    } else if (movies && movies.Response.toLowerCase() === 'false') {
      // if response is false, set no movies found error
      context.commit('SET_RESPONSE_READY', true)
      const errorMsg = `No movies found with search term ${title}`
      context.commit('SET_ERROR', errorMsg)
      throw new Error(errorMsg)
    } else {

    }
  },

  async getMovieById (context, id) {
    const movie = await this.$axios.$get('/', {
      params: {
        i: id
      }
    })
    context.commit('SET_MOVIE_DATA', movie)
  }
}
