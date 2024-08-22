<template>
  <div :class="$style.container">
    <h2 :class="$style.title">Project Team</h2>
    <div :class="$style.cards">
      <div :class="$style.card" v-for="item in TEAM" :key="item.name">
        <div :class="$style.info">
          <div :class="$style.name">{{ item.name }}</div>
          <div :class="$style.phone">{{ item.phone }}</div>
          <div :class="$style.email">{{ item.email }}</div>
          <div :class="$style.role">{{ item.role }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TEAM: [
        {
          name: "Kiryl Yushkevich",
          phone: "+48 577 342 724",
          email: "yushkevich.kiryl@gmail.com",
          role: "Web-Design",
        },
        {
          name: "Celestyna Krol",
          phone: "",
          email: "celestynakrol.com",
          role: "Photography",
        },
        {
          name: "Marta Petryk",
          phone: "",
          email: "kontakt@pokaloka.pl",
          role: "Videography",
        },
        {
          name: "Aleksandra Pardus",
          phone: "",
          email: "biuro@alxinteriordesign.pl",
          role: "Renderings",
        },
      ],
    };
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/common.scss";
.container {
  @include container;
  margin: 0 auto 10rem auto;
  .title {
    @include SectionTitle;
    margin: 0 0 4.125rem 0;
    text-align: center;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    @include custom(940) {
      grid-template-columns: 1fr 1fr;
    }
    @include custom(670) {
      grid-template-columns: 1fr;
    }
    .card {
      padding: 1rem;
      border: 0.0625rem solid $black;
      .info {
        margin: 0 0 5rem 0;
        display: flex;
        flex-direction: column;
        min-height: 100%;
        .name {
          margin: 0 0 0.5rem 0;
          font-size: 1.2rem;
          @include custom(400) {
            font-size: 1rem;
          }
        }
        .phone {
          margin: 0 0 0.5rem 0;
          @include custom(400) {
            font-size: 0.8rem;
          }
        }
        .email {
          flex: 1 1 auto;
          @include custom(400) {
            font-size: 0.8rem;
          }
        }
        .role {
          text-align: right;
          opacity: 70%;
          font-size: 1.125rem;
        }
      }
    }
  }
}
</style>
