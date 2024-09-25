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
    font-size: 1rem;
    color: $black;
    cursor: pointer;
    text-transform: uppercase;
    .option {
      font-size: 1rem;
      color: $black;
      cursor: pointer;
    }
  }
}
</style>
