<template>
  <div :class="$style.container" id="description">
    <h2 :class="$style.title">{{ $t("descriptionSection.title") }}</h2>
    <p :class="$style.text">
      {{ $t("descriptionSection.text") }}
    </p>
  </div>
</template>

<style lang="scss" module>
@import "@/assets/styles/common.scss";
.container {
  @include container;
  margin: 0 auto 2.5rem auto;

  .title {
    @include SectionTitle;
    text-align: center;
    margin: 0 0 2.5rem 0;
  }
  .text {
    text-indent: 2em;
    text-align: justify;
    max-width: 85rem;
    margin: 0 auto;
    font-size: 1.5rem;
    line-height: 140%;
    @include custom(840) {
      font-size: 1.2rem;
    }
    @include custom(580) {
      font-size: 1rem;
    }
  }
}
</style>
