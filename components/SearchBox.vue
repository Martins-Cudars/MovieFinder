<template>
  <div class="search" @keyup.enter="search">
    <!-- <text-input></text-input> -->
    <div class="search__box">
      <input v-model="title" type="text" class="search__box__input" placeholder="Type in movie title">
      <button class="button search__box__submit" @click="search">
        Search
      </button>
    </div>
    <div class="search__error-wrapper">
      <transition name="fade">
        <div v-if="error" class="search__error">
          {{ error }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      error: null
    }
  },
  computed: {
    searchTermValid () {
      return this.title.length > 3
    }
  },
  methods: {
    search () {
      if (this.searchTermValid) {
        this.error = null
        this.$router.push({ path: '/results', query: { title: this.title } })
      } else {
        this.error = 'Please type in at least 4 characters'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .search {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - #{$header-height});
    background-image: url('~assets/img/search-bg-2.jpg');
    background-size: cover;
    background-repeat: no-repeat;

    &__box {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 280px;
      margin: 0 auto;
      padding: 0 1rem;

      @media(min-width: $md) {
        width: 420px;
        flex-wrap: nowrap;
      }
    }

    &__box__input {
      height: 3rem;
      font-size: 1.25rem;
      border: 0;
      outline: 0;
      padding: .5rem 1rem;
      margin: 0;
      font-weight: 300;
      max-width: 100%;
      flex: 1;

      @media (min-width: $md) {
        // width: 16rem;
      }

      &::placeholder {
        color: #777;
      }
    }

    &__box__submit {
      height: 3rem;
      margin-top: 1rem;
      flex: 1;

      @media (min-width: $md) {
        margin-top: 0;
      }
    }

    &__error-wrapper {
      width: 280px;
      height: 49px;
      padding: 0 1rem;

      @media(min-width: $md) {
        width: 420px;
      }
    }

    &__error {
      background-color: $red;
      color: $white;
      padding: .5rem;
      font-size: 0.875rem;
      margin-top: 1rem;
    }
  }
</style>
