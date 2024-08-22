<template>
  <div :class="$style.container">
    <router-link to="/" :class="$style.back">
      <div :class="$style.icon">
        <img src="/img/icons/backArrow.svg" alt="" />
      </div>
      <div :class="$style.text">Back</div>
    </router-link>
    <div :class="$style.content">
      <div :class="$style.title">{{ getRooms.title }}</div>

      <div
        :class="$style.wrapper"
        @mouseover="stopSlider"
        @mouseleave="startSlider"
      >
        <div
          :class="$style.slider"
          :style="{ transform: `translateX(${-100 * chosenSlide}%)` }"
        >
          <div
            :class="$style.slide"
            v-for="item in getRooms.images"
            :key="item.img"
          >
            <img :class="$style.image" :src="item.img" alt="" />
          </div>
        </div>
        <div @click="prevSlide" :class="$style.prev">
          <img src="/img/icons/sliderArrow.svg" alt="" />
        </div>
        <div @click="nextSlide" :class="$style.next">
          <img src="/img/icons/sliderArrow.svg" alt="" />
        </div>
      </div>

      <div :class="$style.text">{{ getRooms.text }}</div>
    </div>
    <Form />
  </div>
</template>

<script>
import Form from "@/components/sections/Form.vue";
export default {
  data() {
    return {
      chosenSlide: 0,
      interval: null,
    };
  },
  computed: {
    getRooms() {
      return this.$store.state.rooms;
    },
  },
  mounted() {
    this.startSlider();
  },

  methods: {
    prevSlide() {
      if (this.chosenSlide > 0) {
        this.chosenSlide--;
      }
    },
    nextSlide() {
      if (this.chosenSlide >= this.getRooms.images.length - 1) {
        this.chosenSlide = 0;
      } else {
        this.chosenSlide++;
      }
    },

    stopSlider() {
      clearInterval(this.interval);
    },
    startSlider() {
      let vm = this;
      this.interval = setInterval(() => {
        vm.nextSlide();
      }, 2000);
    },
  },
  components: {
    Form,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/common.scss";

.container {
  @include container;
  .back {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 2rem 0 0 0;
    margin: 0 0 4rem 0;
    .icon {
      max-width: 2rem;
      max-height: 2rem;
      transform: rotate(180deg);
      & img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      font-size: 1.8rem;
      color: $darkGrey;
    }
  }
  .content {
    .title {
      @include SectionTitle;
      text-align: center;
      margin: 0 0 2rem 0;
    }

    .wrapper {
      max-width: 65rem;
      margin: 0 auto 3rem auto;
      overflow: hidden;
      position: relative;
      .slider {
        display: flex;
        transition: all ease 1.5s;
        .slide {
          flex: 0 0 100%;
          .image {
            width: 100%;
            height: 100%;
          }
        }
      }
      .prev {
        max-width: 3rem;
        max-height: 3rem;
        position: absolute;
        top: 50%;
        left: 1rem;
        transform: rotate(180deg);
        cursor: pointer;
        & img {
          width: 100%;
          height: 100%;
        }
      }
      .next {
        cursor: pointer;
        max-width: 3rem;
        max-height: 3rem;
        position: absolute;
        top: 50%;
        right: 1rem;
        & img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .text {
      max-width: 65rem;
      font-size: 1.5rem;
      line-height: 140%;
      margin: 0 auto 5rem auto;
      @include custom(600) {
        font-size: 1.2rem;
        line-height: 100%;
        margin: 0 auto 3rem auto;
      }
      @include custom(400) {
        font-size: 1rem;
      }
    }
  }
}
</style>
