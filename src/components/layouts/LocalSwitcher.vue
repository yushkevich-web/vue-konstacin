<template>
  <div :class="$style.swither">
    <select v-model="$i18n.locale" :class="$style.select">
      <option value="en" :class="$style.option">En</option>
      <option value="pl" :class="$style.option">Pl</option>
    </select>
  </div>
</template>
<style lang="scss" module>
@import "@/assets/styles/common.scss";
.swither {
  .select {
    font-size: 1.5rem;
    opacity: 50%;
    color: $black;
    cursor: pointer;
    text-transform: uppercase;
    @include custom(610) {
      font-size: 1.2rem;
    }
    .option {
      font-size: 1.5rem;
      opacity: 50%;
      color: $black;
      @include custom(610) {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
