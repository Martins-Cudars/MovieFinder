<template>
  <div class="results-box">
    <div class="container results-box__inner">
      <p v-if="totalResults">
        There were <strong>{{ totalResults }}</strong> results found. Showing <strong>{{ maxResults }}</strong> most relevant ones.
      </p>
      <p v-if="totalResults > 10">
        Please try more specific search term if you did not found what you were looking for.
      </p>
      <p v-if="!totalResults || totalResults === 0">
        No results found, please try different search term
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalResults: {
      type: Number,
      default: null
    }
  },

  computed: {
    maxResults () {
      return this.totalResults > 10 ? 10 : this.totalResults
    }
  }
}
</script>

<style lang="scss" scoped>
.results-box {
  padding: 1rem 0;
  font-size: .875rem;

  &__inner {
    background-color: $primary;
    color: $primary-contrast;
    border: 1px solid gray;
    padding: 1rem 1rem .5rem 1rem;
  }
}
</style>
