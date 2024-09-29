<template>
  <footer :class="$style.footer">
    <div :class="$style.container">
      <img
        src="/img/icons/arrow-top.svg"
        alt=""
        :class="$style.button"
        @click="scrollUp"
      />
      <router-link to="/privacy-policy" :class="$style.privacy">
        {{ $t("policy") }}
      </router-link>
      <a href="mailto: agata.sliwka@hamiltonmay.com" :class="$style.email">
        agata.sliwka@hamiltonmay.com
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollUp() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/common.scss";
.footer {
  border-top: 0.0625rem solid $black;
  .container {
    @include container;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include custom(420) {
      padding: 0.5rem 0;
      flex-direction: column;
      gap: 0.5rem;
    }
    .button {
      cursor: pointer;
      padding: 1rem 3rem;
      background-color: $black;
      @include custom(670) {
        padding: 0.5rem 1rem;
      }
      @include custom(450) {
        width: 4rem;
        height: 4rem;
        padding: 0.5rem;
      }
    }
    .privacy {
      font-size: 1.125rem;
      color: rgba(1, 1, 7, 0.42);
      @include custom(600) {
        font-size: 0.8rem;
      }
      @include custom(420) {
        display: block;
        text-align: right;
      }
    }

    .email {
      font-size: 1.125rem;
      color: $darkText;
      @include custom(600) {
        font-size: 0.8rem;
      }
      @include custom(420) {
        display: block;
        text-align: left;
      }
    }
  }
}
</style>
