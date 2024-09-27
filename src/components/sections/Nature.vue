<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.row">
        <div :class="$style.text">
          <div :class="$style.title">
            {{ $t("natureSection.title") }}
          </div>
          <div :class="$style.subtext">
            {{ $t("natureSection.text") }}
          </div>
        </div>
        <img src="/img/nature/1.jpg" alt="" />
      </div>

      <div :class="$style.row">
        <img src="/img/nature/4.jpg" alt="" />
        <img src="/img/nature/5.jpg" alt="" />
      </div>

      <div :class="$style.row">
        <img src="/img/nature/3.jpg" alt="" />
        <img src="/img/nature/2.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "@/assets/styles/common.scss";
.container {
  @include container;
  margin: 0 auto 10rem auto;
  .content {
    .row {
      display: grid;
      grid-template-columns: 2fr 1fr;
      margin: 0 0 2rem 0;
      gap: 2rem;
      @include custom(640) {
        grid-template-columns: 1fr;
        margin: 0 0 1rem 0;
        gap: 1rem;
      }
      &:last-child {
        grid-template-columns: 1fr 2fr;
        @include custom(640) {
          grid-template-columns: 1fr;
        }
      }
    }
    & img {
      width: 100%;
      height: 100%;
    }
    .title {
      @include SectionTitle;
      max-width: 46rem;
      margin: 0 0 2.5rem 0;
      @include custom(640) {
        margin: 0 0 1.5rem 0;
      }
    }
    .subtext {
      font-size: 1.5rem;
      line-height: 140%;
      max-width: 44rem;
      @include custom(740) {
        font-size: 1.2rem;
      }
      @include custom(640) {
        margin: 0 0 3rem 0;
        font-size: 1rem;
      }
    }
  }
}
</style>
