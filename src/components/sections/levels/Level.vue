<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.info">
        <div :class="$style.title">{{ title }}</div>
        <div :class="$style.params">
          <div :class="$style.area">{{ area }} <span>m²</span></div>
          <div :class="$style.rooms">
            {{ roomsCount }} <span>{{ $t("rooms") }}</span>
          </div>
          <div :class="$style.height">
            {{ height }} <span>{{ $t("height") }}</span>
          </div>
        </div>
        <ul :class="$style.areas">
          <li :class="$style.item" v-for="(item, index) in areas" :key="index">
            <div :class="$style.area">{{ item.value }}</div>
            <div :class="$style.text">{{ item.title }}</div>
          </li>
        </ul>
      </div>
      <div :class="$style.image">
        <img :src="image" alt="" />
      </div>
    </div>
    <div :class="$style.rooms">
      <div
        :class="item.noImg ? $style.roomRow : $style.room"
        v-for="(item, index) in rooms"
        :key="index"
        @click="setRooms(item)"
      >
        <div :class="$style.left">
          <div :class="$style.title">{{ item.title }}</div>
          <div :class="$style.text">{{ item.text }}</div>
          <button
            :class="$style.button"
            v-if="item.images && item.images.length > 1"
          >
            {{ $t("levelsButton") }}
          </button>
        </div>
        <div :class="$style.right">
          <img
            :class="item.noImg ? $style.noImg : $style.image"
            :src="item.mainImage"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    area: String,
    roomsCount: String,
    height: String,
    areas: Array,
    image: String,
    rooms: Array,
  },
  methods: {
    setRooms(item) {
      if (item.images.length > 1) {
        this.$store.commit("setRooms", item);
        this.$router.push("/room");
        this.$nextTick(() => {
          window.scrollTo(0, 0);
        });
      }
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/common.scss";

.container {
  @include container;
  border-bottom: 1px solid #000;
  .content {
    display: flex;
    @include custom(760) {
      flex-direction: column;
    }
    .info {
      flex: 0 0 50%;
      padding: 4rem 0;
      border-right: 0.0625rem solid $black;
      @include custom(760) {
        border: none;
        padding: 1rem 0;
        order: 2;
      }
      .title {
        font-size: 3rem;
        color: $darkText;
        margin: 0 0 2rem 0;
        @include custom(920) {
          font-size: 1.8rem;
        }
        @include custom(760) {
          margin: 0 0 1rem 0;
        }
      }
      .params {
        display: flex;
        align-items: center;
        gap: 2rem;
        font-size: 1.8rem;
        color: $darkText;
        margin: 0 0 3rem 0;
        @include custom(920) {
          font-size: 1rem;
        }
        @include custom(760) {
          margin: 0 0 2rem 0;
        }
        & span {
          opacity: 70%;
        }
      }
      .areas {
        color: $darkText;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        @include custom(450) {
          grid-template-columns: 1fr;
        }
        .item {
          display: flex;
          align-items: center;
          gap: 1rem;
          .area {
            font-size: 1.2rem;
          }
          .text {
            opacity: 70%;
            font-size: 1.2rem;
            @include custom(920) {
              font-size: 1rem;
            }
          }
        }
      }
    }
    .image {
      flex: 0 0 50%;
      max-width: 38.75rem;
      max-height: 30rem;
      padding: 4rem 0;
      margin: 0 auto;
      @include custom(760) {
        max-width: 28rem;
        max-height: 25rem;
        padding: 2rem 0;
        margin: 0;
        order: 1;
      }
      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .rooms {
    .room {
      cursor: pointer;
      padding: 4rem 0;
      border-top: 0.0625rem solid $black;
      display: flex;
      justify-content: space-between;
      @include custom(930) {
        gap: 1rem;
      }
      @include custom(740) {
        flex-direction: column;
      }
      .left {
        flex: 0 0 50%;
        padding-right: 1rem;
        @include custom(740) {
          order: 2;
        }
        .title {
          font-size: 1.75rem;
          margin: 0 0 2.5rem 0;
          @include custom(400) {
            font-size: 1.5rem;
            margin: 0 0 1rem 0;
          }
          @include custom(340) {
            font-size: 1.2rem;
          }
        }
        .text {
          font-size: 1.3rem;
          max-width: 37rem;
          margin: 0 0 2.5rem 0;
          line-height: 140%;
          @include custom(930) {
            font-size: 1.2rem;
          }
          @include custom(400) {
            font-size: 1rem;
          }
        }
        .button {
          border: 0.0625rem solid $black;
          outline: none;
          background: none;
          font-size: 1.25rem;
          padding: 1rem 3.5rem;
          color: $black;
          transition: 0.2s;
          &:hover {
            background-color: $black;
            color: $white;
          }
          @include custom(400) {
            font-size: 1rem;
          }
        }
      }
      .right {
        flex: 0 0 50%;
        @include custom(930) {
          padding: 0 1rem 0 0;
        }
        @include custom(740) {
          order: 1;
          padding: 0;
          margin: 0 0 1rem 0;
        }
        .image {
          width: 100%;
          height: 100%;
        }
      }
    }
    .roomRow {
      display: block;
      padding: 4rem 0;
      border-top: 0.0625rem solid $black;
      .title {
        font-size: 1.75rem;
        margin: 0 0 2.5rem 0;
        @include custom(400) {
          font-size: 1.5rem;
          margin: 0 0 1rem 0;
        }
        @include custom(340) {
          font-size: 1.2rem;
        }
      }
      .text {
        font-size: 1.3rem;
        line-height: 140%;
        @include custom(930) {
          font-size: 1.2rem;
        }
        @include custom(400) {
          font-size: 1rem;
        }
      }
      .noImg {
        display: none;
      }
    }
  }
}
</style>
