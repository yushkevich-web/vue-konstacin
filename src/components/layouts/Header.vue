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
        <LocalSwitcher />
      </nav>
      <a href="mailto:contact@konstancinhouse4sale.com" :class="$style.mail">
        contact@konstancinhouse4sale.com
      </a>
    </header>
  </div>
</template>
<script>
import LocalSwitcher from "./LocalSwitcher.vue";
import VueScrollTo from "vue-scrollto";
export default {
  components: {
    LocalSwitcher,
  },
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
    @include custom(640) {
      flex-wrap: wrap;
    }
    .menu {
      display: flex;
      align-items: center;
      gap: 3.125rem;
      @include custom(900) {
        gap: 1rem;
      }
      .link {
        @include Font20-400;
        color: $black;
        @include custom(770) {
          font-size: 1rem;
        }
      }
    }
    .mail {
      color: $black;
      @include Font20-500;
      @include custom(770) {
        font-size: 1rem;
      }
    }
  }
}
</style>
