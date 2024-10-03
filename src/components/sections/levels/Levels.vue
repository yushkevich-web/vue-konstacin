<template>
  <div :class="$style.wrapper">
    <Level
      :class="$style.container"
      v-for="(level, index) in levels"
      :key="index"
      :title="level.title"
      :area="level.area"
      :roomsCount="level.roomsCount"
      :height="level.height"
      :image="level.image"
      :areas="level.areas"
      :rooms="level.rooms"
    />
    <div :class="$style.installations">
      <div :class="$style.title">{{ $t("installationsTitle") }}</div>
      <ul :class="$style.list">
        <li v-for="item in installations" :key="item.text">{{ item.text }}</li>
      </ul>
    </div>
    <div :class="$style.media">
      <div :class="$style.title">Media</div>
      <ul :class="$style.list">
        <li v-for="item in media" :key="item.text">{{ item.text }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Level from "./Level.vue";
import dataEn from "../../../locales/en.json";
import dataPl from "../../../locales/pl.json";
export default {
  data() {
    return {
      levelsEn: dataEn.levels,
      levelsPl: dataPl.levels,
      levels: [],

      installEn: dataEn.installations,
      installPl: dataPl.installations,
      installations: [],

      mediaEn: dataEn.media,
      mediaPl: dataPl.media,
      media: [],
    };
  },
  mounted() {
    if (this.$i18n.locale === "en") {
      this.levels = this.levelsEn;
      this.installations = this.installEn;
      this.media = this.mediaEn;
    } else {
      this.levels = this.levelsPl;
      this.installations = this.installPl;
      this.media = this.mediaPl;
    }
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
  },
  watch: {
    locale() {
      if (this.$i18n.locale === "en") {
        this.levels = this.levelsEn;
        this.installations = this.installEn;
        this.media = this.mediaEn;
      } else {
        this.levels = this.levelsPl;
        this.installations = this.installPl;
        this.media = this.mediaPl;
      }
    },
  },
  components: {
    Level,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/common.scss";
.wrapper {
  margin: 0 0 10rem 0;
  @include custom(580) {
    margin: 0 0 4rem 0;
  }
  .container {
    &:first-child {
      border-top: 0.0625rem solid $black;
    }
    &:last-child {
      border-bottom: 0.0625rem solid $black;
    }
  }
  .installations {
    @include container;
    padding: 4rem 1rem;
    border-bottom: 0.0625rem solid $black;
    .title {
      margin: 0 0 1rem 0;
      font-size: 1.75rem;
    }
    .list {
      padding: 0 0 0 2rem;
      & li {
        list-style-type: disc;
        margin: 0 0 1rem 0;
        font-size: 1.3rem;
        @include custom(640) {
          font-size: 1.2rem;
        }
        @include custom(500) {
          font-size: 1rem;
        }
        &:last-child {
          margin: 0;
        }
      }
    }
  }
  .media {
    @include container;
    padding: 4rem 1rem;
    border-bottom: 0.0625rem solid $black;
    .title {
      margin: 0 0 1rem 0;
      font-size: 1.75rem;
    }
    .list {
      padding: 0 0 0 2rem;
      & li {
        list-style-type: disc;
        margin: 0 0 1rem 0;
        font-size: 1.3rem;
        @include custom(640) {
          font-size: 1.2rem;
        }
        @include custom(500) {
          font-size: 1rem;
        }
        &:last-child {
          margin: 0;
        }
      }
    }
  }
}
</style>
