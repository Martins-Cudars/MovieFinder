<template>
  <header class="site-header">
    <div class="site-header__inner container">
      <div class="site-header__logo">
        <nuxt-link to="/">
          <img src="@/assets/img/logo.svg">
          <span>MovieFinder</span>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>

.site-header {
  height: $header-height;
  background-color: $header-bg-color;
  box-shadow: 0 2px 5px 0 transparentize($black, 0.85);

  &__logo {
    a {
      display: flex;
      align-items: center;
      padding: 10px 0;
      text-decoration: none;
      color: inherit;
    }

    img {
      max-height: 100%;
    }

    span {
      font-size: 32px;
      font-weight: 700;
      letter-spacing: 1px;
    }
  }
}
</style>
