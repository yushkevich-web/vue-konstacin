<template>
  <div :class="$style.container">
    <header :class="$style.header">
      <nav :class="$style.menu">
        <a href="" :class="$style.link">{{ $t("headerMenu.firstLink") }}</a>
        <a href="" :class="$style.link">{{ $t("headerMenu.secondLink") }}</a>
        <a href="" :class="$style.link">{{ $t("headerMenu.thirdLink") }}</a>
      </nav>
      <a href="mailto:contact@konstancinhouse4sale.com" :class="$style.mail">
        contact@konstancinhouse4sale.com
      </a>
    </header>
  </div>
</template>

<style lang="scss" module>
@import "@/assets/styles/common.scss";

.container {
  @include container;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .menu {
      display: flex;
      align-items: center;
      gap: 3.125rem;
      @include custom(820) {
        gap: 1rem;
      }
      .link {
        @include Font20-400;
        color: $black;
        @include custom(740) {
          font-size: 1rem;
        }
      }
    }
    .mail {
      color: $black;
      @include Font20-500;
      @include custom(740) {
        font-size: 1rem;
      }
    }
  }
}
</style>
