<template>
  <div :class="$style.container">
    <h2 :class="$style.title">{{ $t("artisansSection.title") }}</h2>
    <div :class="$style.text">
      {{ $t("artisansSection.text") }}
    </div>
    <div :class="$style.artisan">
      <Artisan
        v-for="person in PEOPLE"
        :key="person.name"
        :name="person.name"
        :phone="person.phone"
        :email="person.email"
        :icon="person.icon"
        :text="person.text"
        :work="person.work"
        :tel="person.tel"
        :website="person.website"
      />
    </div>
  </div>
</template>

<script>
import Artisan from "./Artisan.vue";
export default {
  data() {
    return {
      PEOPLE: [
        {
          name: "Tomasz Stepniak",
          phone: "+48 519 673 771",
          tel: "+48519673771",
          email: "tomaszstepniak72@gmail.com",
          icon: "/img/icons/artisans/2.svg",
          text: "Stetom Electric",
          work: "Electrical",
        },
        {
          name: "Sławomir Mordzoń",
          phone: "+48 602 212 742",
          tel: "+48602212742",
          email: "biuro@acqua-serwis.pl",
          icon: "/img/icons/artisans/3.svg",
          text: "Sławomir Mordzoń",
          work: "Heating",
        },
        {
          name: "Tadeusz Harkabuz",
          phone: "+48 606 283 294",
          tel: "+48606283294",
          email: "biuro@ekodrewdom.com.pl",
          icon: "/img/icons/artisans/5.svg",
          text: "EkoDrewDom",
          work: "Roofing",
        },
        {
          name: "Jan Ślusarz",
          phone: "+48 502 332 367",
          tel: "+48502332367",
          email: "kowalstwobednarka@wp.pl",
          website: "http://www.kowalslusarz.art.pl/",
          icon: "/img/icons/artisans/1.svg",
          text: "Kowalstwo Artystyczne Bednarka",
          work: "Ironwork",
        },
        {
          name: "Kamil & Marcin Grochowski",
          phone: "+48 697 978 097",
          tel: "+48697978097",
          email: "kamagro@op.pl",
          website: "http://www.kamagro.com.pl",
          icon: "/img/icons/artisans/5.svg",
          text: "Kamagro",
          work: "Plumbing",
        },
      ],
    };
  },
  components: {
    Artisan,
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
    @include custom(600) {
      margin: 0 0 2.5rem 0;
    }
  }
  .text {
    @include Text;
    color: $darkText;
    line-height: 2rem;
    margin: 0 auto 4.125rem auto;
    max-width: 50rem;
    text-indent: 2em;
    text-align: justify;
    @include custom(840) {
      font-size: 1.2rem;
    }
    @include custom(580) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
  .artisan {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    @include custom(1040) {
      grid-template-columns: 1fr 1fr;
    }
    @include custom(700) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
