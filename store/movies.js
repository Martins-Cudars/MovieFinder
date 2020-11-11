import Vue from 'vue'

export const state = () => ({
  results: null,
  totalResults: null
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
  }
}

export const mutations = {
  SET_TOTAL_RESULTS (state, payload) {
    state.totalResults = parseInt(payload)
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
      Loaded: true
    })
  }
}

export const actions = {
  async getMoviesListByTitle (context, title) {
    const movies = await this.$axios.$get('/', {
      params: {
        s: title,
        page: 1
      }
    })

    /**
      Since this endpoint does not provide Director,
      Only imdbID's are stored as there's no point
      of mixing information between two endpoints.
      Better to have single source of truth
    **/
    const imdbIDs = movies.Search.map(movie => movie.imdbID)

    context.commit('SET_MOVIE_IDS', imdbIDs)
    context.commit('SET_TOTAL_RESULTS', movies.totalResults)
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
