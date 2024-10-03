<template>
  <div :class="$style.container" id="points">
    <h2 :class="$style.title">{{ $t("nearbyPointsTitle") }}</h2>
    <div :class="$style.content">
      <div :class="$style.places">
        <a
          :href="item.link"
          target="_blank"
          :class="$style.place"
          v-for="item in nearbyPoints"
          :key="item.title"
        >
          <div :class="$style.image">
            <img :src="item.image" alt="" />
          </div>
          <div :class="$style.info">
            <div :class="$style.subtitle">{{ item.title }}</div>
            <div :class="$style.text">{{ item.text }}</div>
          </div>
          <div :class="$style.link">
            <img src="/img/icons/arrow-right.svg" alt="" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import dataEn from "../../locales/en.json";
import dataPl from "../../locales/pl.json";
export default {
  data() {
    return {
      nearbyPointsEn: dataEn.nearbyPoints,
      nearbyPointsPl: dataPl.nearbyPoints,
      nearbyPoints: [],
    };
  },
  mounted() {
    if (this.$i18n.locale === "en") {
      this.nearbyPoints = this.nearbyPointsEn;
    } else {
      this.nearbyPoints = this.nearbyPointsPl;
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
        this.nearbyPoints = this.nearbyPointsEn;
      } else {
        this.nearbyPoints = this.nearbyPointsPl;
      }
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/common.scss";
.container {
  @include container;
  margin: 0 auto 16rem auto;
  .title {
    @include SectionTitle;
    margin: 0 0 3.75rem 0;
    text-align: center;
  }
  .content {
    .places {
      .place {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 3.125rem 0;
        gap: 1rem;
        border-top: 0.0625rem solid $darkText;
        @include custom(800) {
          display: block;
        }
        &:last-child {
          border-bottom: 0.0625rem solid $darkText;
        }
        .image {
          flex: 0 0 33.333%;
          @include custom(800) {
            max-width: 31.25rem;
            max-height: 18.75rem;
            margin: 0 auto 1.5rem auto;
          }

          & img {
            width: 100%;
            height: 18rem;
            @include custom(1100) {
              height: 15rem;
            }
            @include custom(800) {
              height: 18rem;
              width: 100%;
            }
            @include custom(400) {
              height: 15rem;
            }
            @include custom(370) {
              height: 12rem;
            }
          }
        }
        .info {
          text-align: left;
          color: $darkText;
          flex: 0 1 50%;
          .subtitle {
            font-size: 2.25rem;
            margin: 0 0 1rem 0;
            @include custom(930) {
              font-size: 1.5rem;
            }
            @include custom(800) {
              text-align: center;
              margin: 0 0 2rem 0;
            }
          }
          .text {
            max-width: 31.25rem;
            font-size: 1.125rem;
            margin: 0 0 1rem 0;
            line-height: 140%;
            @include custom(930) {
              font-size: 1rem;
            }
            @include custom(800) {
              text-align: center;
              margin: 0 auto 2rem auto;
            }
          }
        }
        .link {
          background-color: $grey;
          border-radius: 50%;
          padding: 1.5rem;
          @include custom(900) {
            padding: 1rem;
            display: inline-block;
          }
          @include custom(900) {
            max-width: 3.5rem;
            max-height: 3.5rem;
            & img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
