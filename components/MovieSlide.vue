<template>
  <div class="slide">
    <div v-if="loaded" class="slide__content">
      {{ title }}
      <img :src="poster" :alt="title">
      {{ director }}
    </div>
  </div>
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
