<template>
  <div class="results-box">
    <div class="container results-box__inner">
      <p>There were <strong>{{ totalResults }}</strong> results found.</p>
      <p v-if="totalResults > 10">
        Please try more specific search term if You dont find what you were looking for.
      </p>
      <p v-if="totalResults === 0">
        Please try different search term
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
  }
}
</script>

<style lang="scss" scoped>
.results-box {
  padding: 1rem 0;
  &__inner {
    background-color: $primary;
    color: $primary-contrast;
    border: 1px solid gray;
    padding: 1rem;
  }
}
</style>
