<template>
  <div :class="$style.content">
    <div :class="$style.info">
      <div :class="$style.column">
        <div :class="$style.top">lot</div>
        <div :class="$style.bottom">3800 <span>m2</span></div>
      </div>
      <div :class="$style.column">
        <div :class="$style.top">area</div>
        <div :class="$style.bottom">580 <span>m2</span></div>
      </div>
      <div :class="$style.column">
        <div :class="$style.top">bedrooms</div>
        <div :class="$style.bottom">5</div>
      </div>
      <div :class="$style.column">
        <div :class="$style.text">Ask for price</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "@/assets/styles/common.scss";
.content {
  margin: 0 0 6.25rem 0;
  min-height: 92vh;
  max-width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../../assets/images/fullscreen.jpg");
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .info {
    background-color: $lightGrey;
    color: $darkText;
    max-width: 42.5rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0.625rem;
    padding: 0 0 0 1rem;
    @include custom(400) {
      padding: 0 0 0 0.5rem;
      gap: 0.5rem;
    }
    .column {
      padding: 1.5rem 0;
      @include custom(670) {
        padding: 1rem 0;
      }
      @include custom(400) {
        padding: 0.5rem 0;
      }
      &:last-child {
        cursor: pointer;
        background-color: $white;
        padding: 1.5rem 1.75rem;
        @include custom(670) {
          padding: 1rem;
        }
        @include custom(400) {
          padding: 0.5rem;
        }
        white-space: nowrap;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .top {
        @include Font18-400;
        border-bottom: 0.0625rem solid $darkText;
        @include custom(670) {
          font-size: 1rem;
        }
        @include custom(400) {
          font-size: 0.8rem;
        }
      }
      .bottom {
        @include Font36-400;
        @include custom(670) {
          font-size: 1rem;
        }
        @include custom(400) {
          font-size: 0.8rem;
        }
        & span {
          @include Font18-400;
          @include custom(670) {
            font-size: 1rem;
          }
          @include custom(400) {
            font-size: 0.8rem;
          }
        }
      }
      .text {
        @include Font20-400;
        @include custom(670) {
          font-size: 1rem;
        }
        @include custom(400) {
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
