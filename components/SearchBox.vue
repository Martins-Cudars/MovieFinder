<template>
  <div class="search">
    <!-- <text-input></text-input> -->
    <input v-model="title" type="text">
    <button @click="search">
      Search
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: null,
      error: null
    }
  },
  methods: {
    search () {
      this.$router.push({ path: '/results', query: { title: this.title } })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
