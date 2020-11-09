<template>
  <div>
    <site-header></site-header>
    <Nuxt></Nuxt>
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
