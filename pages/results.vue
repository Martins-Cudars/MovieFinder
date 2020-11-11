<template>
  <div class="results">
    <div v-if="resultsLoaded">
      <results-box :total-results="totalResults"></results-box>
      <movie-slider :slides="results" @beforeChange="beforeChange"></movie-slider>
    </div>
    <mf-loader v-else style="results__loader"></mf-loader>
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
      this.getMovieById(imdbId)
    }
  }
}
</script>

<style lang="scss" scoped>
.results {
  &__loader {
    height: calc(100vh - #{$header-height});
  }
}
</style>
