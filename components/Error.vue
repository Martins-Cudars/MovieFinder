<template>
  <div class="error">
    <div class="container error__inner">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  &__inner {
    padding: 1rem;
    background-color: $red;
    color: $white;
  }

}
</style>
