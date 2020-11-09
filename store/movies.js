import Vue from 'vue'

export const state = () => ({
  results: null
})

export const getters = {
  totalResults: (state) => {
    return state.results.totalResults
  },
  results: (state) => {
    return state.results.Search
  },
  resultsLoaded: (state) => {
    return state.results && state.results.Response === 'True'
  }
}

export const mutations = {
  SET_RESULTS (state, payload) {
    state.results = payload
  },
  SET_DIRECTOR (state, payload) {
    const resultIndex = state.results.Search.findIndex(movie => movie.imdbID === payload.imdbID)
    Vue.set(state.results.Search[resultIndex], 'Director', payload.Director)
  },
  SET_MOVIE_LOADING_STATUS (state, payload) {
    const resultIndex = state.results.Search.findIndex(movie => movie.imdbID === payload.imdbID)
    Vue.set(state.results.Search[resultIndex], 'Loaded', true)
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
    context.commit('SET_RESULTS', movies)
  },

  async getMovieById (context, id) {
    const movie = await this.$axios.$get('/', {
      params: {
        i: id
      }
    })
    context.commit('SET_DIRECTOR', movie)
    context.commit('SET_MOVIE_LOADING_STATUS', movie)
  }
}
