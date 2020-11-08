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
  }
}

export const actions = {
  async findMovieByTitle (context, title) {
    // eslint-disable-next-line no-console
    console.log('findMovieByTitle')
    const movies = await this.$axios.$get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${title}&page=1`)
    context.commit('SET_RESULTS', movies)
    // eslint-disable-next-line no-console
    this.movies = movies
  }
}
