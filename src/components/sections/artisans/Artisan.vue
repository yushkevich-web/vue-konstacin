<template>
  <div :class="$style.card">
    <div :class="$style.top">
      <div :class="$style.info">
        <div :class="$style.name">{{ name }}</div>
        <a :href="`tel:${tel}`" :class="$style.phone">{{ phone }}</a>
        <div :class="$style.email">{{ email }}</div>
        <div :class="$style.website">
          <a :href="website" target="_blank">{{ website }}</a>
        </div>
      </div>
      <div :class="$style.icon">
        <img :src="icon" alt="" />
      </div>
    </div>
    <div :class="$style.bottom">
      <div :class="$style.text">{{ text }}</div>
      <div :class="$style.work">{{ work }}</div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    name: String,
    phone: String,
    email: String,
    icon: String,
    text: String,
    work: String,
    tel: String,
    website: String,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/common.scss";
.card {
  border: 0.0625rem solid $black;

  .top {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .info {
      .name {
        margin: 0 0 0.5rem 0;
        font-size: 1.2rem;
        @include custom(400) {
          font-size: 1rem;
        }
      }
      .phone {
        color: $darkText;
        display: block;
        margin: 0 0 0.5rem 0;
        @include custom(400) {
          font-size: 0.8rem;
        }
      }
      .email {
        margin: 0 0 0.5rem 0;
        @include custom(400) {
          font-size: 0.8rem;
        }
      }
      .website {
        & a {
          color: $darkText;
          @include custom(400) {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
  .bottom {
    margin: 8rem 0 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem 0 0;
    @include custom(700) {
      margin: 4rem 0 0 0;
    }
    .text {
      border-right: 0.0625rem solid $black;
      border-top: 0.0625rem solid $black;
      padding: 1rem;
      @include custom(430) {
        flex: 0 0 50%;
        text-align: center;
        font-size: 0.8rem;
      }
    }
    .work {
      opacity: 70%;
      font-size: 1.125rem;
      @include custom(400) {
        font-size: 1rem;
      }
    }
  }
}
</style>
