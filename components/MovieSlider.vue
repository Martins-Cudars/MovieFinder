<template>
  <div class="slider">
    <VueSlickCarousel :arrows="false" :dots="true" @beforeChange="beforeChange">
      <movie-slide
        v-for="slide in slides"
        :key="slide.imdbID"
        :title="slide.Title"
        :year="slide.Year"
        :poster="slide.Poster"
        :director="slide.Director"
        :plot="slide.Plot"
        :loaded="slide.Loaded"
        :settings="settings"
      ></movie-slide>
    </VueSlickCarousel>
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
  data () {
    return {
      settings: {
        fade: true,
        lazyLoad: true
      }
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
/deep/ {
  .slick-dots {
    li {
      button:before {
        color: $primary;
      }
    }
  }
}

</style>
