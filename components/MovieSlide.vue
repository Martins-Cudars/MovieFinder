<template>
  <article class="slide">
    <transition name="fade">
      <div v-if="loaded" key="slide" class="container slide__content">
        <div class="slide__poster">
          <img :src="poster" :alt="title" width="300" height="435">
        </div>
        <div class="slide__info">
          <h1 class="slide__title">
            {{ title }} ({{ year }})
          </h1>
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
          <div class="slide__plot">
            {{ plot }}
          </div>
        </div>
      </div>
      <div v-else key="loader" class="slide__loader">
        <loader></loader>
      </div>
    </transition>
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
    },
    plot: {
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
  height: 476px;
  position: relative;

  @media (min-width: $md) {
    height: 476px;
  }

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
      height: 100%;
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
    margin-top: 2rem;
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

  &__plot {
    margin: 1rem 0;
    font-size: .875rem;
  }

  &__loader {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 300px;

    @media (min-width: $md) {
      height: 476px;
    }
  }
}
</style>
