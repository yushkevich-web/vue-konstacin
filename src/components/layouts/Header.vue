<template>
  <div :class="$style.container">
    <header :class="$style.header">
      <nav :class="$style.menu">
        <a
          href="#description"
          @click="scrollTo('#description')"
          :class="$style.link"
          >{{ $t("headerMenu.firstLink") }}</a
        >
        <a
          href="#contacts"
          @click="scrollTo('#contacts')"
          :class="$style.link"
          >{{ $t("headerMenu.secondLink") }}</a
        >
        <a href="#points" @click="scrollTo('#points')" :class="$style.link">{{
          $t("headerMenu.thirdLink")
        }}</a>
      </nav>
      <a href="mailto:contact@konstancinhouse4sale.com" :class="$style.mail">
        contact@konstancinhouse4sale.com
      </a>
    </header>
  </div>
</template>
<script>
import VueScrollTo from "vue-scrollto";
export default {
  methods: {
    scrollTo(component) {
      VueScrollTo.scrollTo(component, {
        offset: -50,
        duration: 500,
      });
    },
  },
};
</script>

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
    @include custom(490) {
      flex-wrap: wrap;
    }
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
        @include custom(600) {
          font-size: 0.8rem;
        }
      }
    }
    .mail {
      color: $black;
      @include Font20-500;
      @include custom(740) {
        font-size: 1rem;
      }
      @include custom(600) {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
