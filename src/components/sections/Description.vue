<template>
  <div :class="$style.container">
    <h2 :class="$style.title">Description of the Property</h2>
    <p :class="$style.text">
      Located only 23 km from the center of Warsaw, this property provides the
      perfect balance of a peaceful retreat amidst nature reserves and farmland,
      while still being in close proximity to all the conveniences of a bustling
      metropolis.
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
    max-width: 85rem;
    margin: 0 auto;
    text-align: center;
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
