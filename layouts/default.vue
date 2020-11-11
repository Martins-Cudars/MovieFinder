<template>
  <div>
    <site-header></site-header>
    <main class="site-content">
      <Nuxt></Nuxt>
    </main>
  </div>
</template>

<script>
import SiteHeader from '~/components/site/Header'

export default {
  components: {
    SiteHeader
  }
}
</script>

<style lang="scss" scoped>
.site-content {
  min-height: calc(100vh - #{$header-height});
}
</style>
