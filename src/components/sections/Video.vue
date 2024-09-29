<template>
  <div :class="$style.container" id="presentation">
    <h2 :class="$style.title">{{ $t("videoSection.title") }}</h2>
    <div :class="$style.video">
      <video
        controls
        poster="/img/video-preview.jpg"
        ref="video"
        src="/video/en.mp4"
        type="video/mp4"
        preload="none"
        v-if="$i18n.locale === 'en'"
      ></video>
      <video
        controls
        poster="/img/video-preview.jpg"
        ref="video"
        src="/video/pl.mp4"
        type="video/mp4"
        preload="none"
        v-if="$i18n.locale === 'pl'"
      ></video>
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
