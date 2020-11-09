<template>
  <div>
    <VueSlickCarousel :arrows="false" :dots="true" @beforeChange="beforeChange">
      <movie-slide
        v-for="slide in slides"
        :key="slide.imdbID"
        :title="slide.Title"
        :year="slide.Year"
        :poster="slide.Poster"
        :director="slide.Director"
        :loaded="slide.Loaded"
      ></movie-slide>
    </VueSlickCarousel>
    <pre>
      {{ slides }}
    </pre>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    VueSlickCarousel
  },
  props: {
    slides: {
      type: Array,
      default: null,
      required: true
    }
  },
  methods: {
    beforeChange (oldSlideIndex, newSlideIndex) {
      this.$emit('beforeChange', this.slides[newSlideIndex])
    }
  }
}
</script>

<style lang="scss" scoped>
.slide {
  background: orange;
  color: blue;
}
</style>
