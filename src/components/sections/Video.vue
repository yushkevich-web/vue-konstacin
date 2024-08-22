<template>
  <div :class="$style.container">
    <h2 :class="$style.title">Watch the presentation</h2>
    <div :class="$style.video">
      <video controls preload="auto" ref="video">
        <source src="/video/test.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "@/assets/styles/common.scss";
.container {
  @include container;
  margin: 0 auto 6.25rem auto;
  .title {
    @include SectionTitle;
    text-align: center;
    margin: 0 0 2.5rem 0;
  }
  .video {
    max-width: 100%;
    height: auto;
    & video {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
