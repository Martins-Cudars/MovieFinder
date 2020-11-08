<template>
  <div>
    <h1>Results</h1>
    <pre v-if="resultsLoaded">
      {{ results }}
    </pre>
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
    // eslint-disable-next-line no-console
    console.log(`searching for ${searchTitle}`)
    this.findMovieByTitle(searchTitle)
  },
  methods: {
    ...mapActions({
      findMovieByTitle: 'movies/findMovieByTitle'
    })
  }
}
</script>
