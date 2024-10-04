<template>
  <div :class="$style.popup" v-if="$store.state.isModalOpen">
    <div
      :class="$style.overlay"
      @click="$store.commit('setIsModalOpen', false)"
    ></div>
    <div :class="$style.content">
      <div :class="$style.body">
        <div>{{ $t("formResponse") }}</div>
      </div>
      <div
        :class="$style.close"
        @click="$store.commit('setIsModalOpen', false)"
      >
        close
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "@/assets/styles/common.scss";
@keyframes expand {
  from {
    transform: scale(0.7);
    opacity: 0;
    background: #5470b0;
  }
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  .overlay {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    transition: opacity 0.3ms;
    z-index: 100;
    animation: expand 0.3s ease-in-out;
  }
  .close {
    cursor: pointer;
    text-align: center;
  }
  .content {
    &::-webkit-scrollbar {
      width: 0.25rem;
      cursor: pointer;
    }
    overflow: auto;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-height: calc(100vh - 5rem);
    max-width: 37.5rem;
    width: 100%;
    background: $white;
    border-radius: 2.5rem;
    z-index: 100;
    animation: expand 0.2s ease-in-out;
    padding: 2.5rem;
    @include custom(632) {
      width: calc(100vw - 2rem);
      max-width: none;
    }
    @include custom(550) {
      padding: 1.5rem;
    }
  }
  .body {
    text-align: center;
    margin: 0 0 2rem 0;
    text-transform: uppercase;
  }
}
</style>
