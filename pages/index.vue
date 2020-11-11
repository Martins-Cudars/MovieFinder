<template>
  <div>
    <search-box></search-box>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted () {
    this.resetState()
  },
  methods: {
    ...mapActions({
      resetState: 'movies/resetState'
    })
  }
}
</script>

<style>

</style>
