<template>
  <article class="slide">
    <div v-if="loaded" class="container slide__content">
      <div class="slide__poster">
        <img :src="poster" :alt="title">
      </div>
      <div class="slide__info">
        <h1 class="slide__title">{{ title }} ({{ year }})</h1>
        <table class="slide__table">
          <tbody>
            <tr>
              <td>Year:</td>
              <td>{{ year }}</td>
            </tr>
            <tr>
              <td>Director:</td>
              <td>{{ director }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else class="slide__loader">
      Loading
    </div>
  </article>
</template>

<script>
export default {
  props: {
    loaded: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    year: {
      type: String,
      default: null
    },
    poster: {
      type: String,
      default: null
    },
    director: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.slide {
  display: flex;
  padding: 1rem 0;

  &:focus {
    outline: 0;
    border: 0;
  }

  &__content {
    background: white;
    padding: 0;

    @media (min-width: $md) {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: 300px 1fr;
    }
  }

  &__poster {
    padding: 1rem 0;

    img {
      display: block;
      max-width: 100%;
      height: auto;
      margin: 0 auto;
    }
  }

  &__info {
    padding: 1rem;
  }

  &__title {
    margin-bottom: 1rem;
  }

  &__table {
    font-size: .875rem;

    tr {
      td {
        padding: .125rem .5rem .125rem 0;
      }
    }
  }

  &__loader {
    height: 100%;
  }
}
</style>
