<template>
  <div>
    <h1>Results</h1>
    <div v-if="resultsLoaded">
      <pre>
        {{ results }}
      </pre> -->
      <movie-slider :slides="results" @beforeChange="beforeChange"></movie-slider>
    </div>
    <mf-loader v-else></mf-loader>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      resultsLoaded: 'movies/resultsLoaded',
      results: 'movies/results',
      totalResults: 'movies/totalResults'
    })
  },
  mounted () {
    const searchTitle = this.$route.query.title
    this.getMoviesListByTitle(searchTitle)
      .then(() => {
        this.getMovieById(this.results[0])
      })
  },
  methods: {
    ...mapActions({
      getMoviesListByTitle: 'movies/getMoviesListByTitle',
      getMovieById: 'movies/getMovieById'
    }),
    beforeChange (imdbId) {
      // eslint-disable-next-line no-console
      console.log(imdbId)
      this.getMovieById(imdbId)
    }
  }
}
</script>
