<template>
  <button @click="clickButton"></button>
</template>

<script>
export default {
  methods: {
    clickButton () {
      this.$emit('clickButton')
    }
  }
}
</script>
