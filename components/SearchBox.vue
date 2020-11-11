<template>
  <div class="search">
    <!-- <text-input></text-input> -->
    <div class="search__box">
      <input v-model="title" type="text" class="search__box__input" placeholder="Type in movie title">
      <button class="button search__box__submit" @click="search">
        Search
      </button>
    </div>
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
  .search {
    display: flex;
    align-items: center;
    height: calc(100vh - #{$header-height});
    background-image: url('~assets/img/search-bg-2.jpg');
    background-size: cover;
    background-repeat: no-repeat;

    &__box {
      display: flex;
      align-items: center;
      max-width: 720px;
      margin: 0 auto;
    }

    &__box__input {
      height: 3rem;
      font-size: 1.25rem;
      border: 0;
      outline: 0;
      padding: .5rem 1rem;
      margin: 0;
      font-weight: 300;
      width: 12rem;

      @media (min-width: $md) {
        width: 16rem;
      }

      &::placeholder {
        color: #777;
      }
    }

    &__box__submit {
      height: 3rem;
    }
  }
</style>
