<template>
  <div class="results">
    <div v-if="responseReady && !error">
      <results-box :total-results="totalResults"></results-box>
      <movie-slider v-if="totalResults > 0" :slides="results" @beforeChange="beforeChange"></movie-slider>
    </div>
    <div v-else-if="error">
      <error :error="error"></error>
    </div>
    <loader v-else class="results__loader"></loader>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      responseReady: 'movies/responseReady',
      resultsLoaded: 'movies/resultsLoaded',
      results: 'movies/results',
      error: 'movies/error',
      totalResults: 'movies/totalResults'
    })
  },
  mounted () {
    const searchTitle = this.$route.query.title
    this.getMoviesListByTitle(searchTitle)
      .then(() => {
        if (!this.error) {
          this.getMovieById(this.results[0])
        }
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
  padding: 1rem 0;
  min-height: calc(100vh - #{$header-height});

  &__loader {
    height: calc(100vh - #{$header-height});
  }
}
</style>
