<template>
  <div :class="$style.container">
    <h2 :class="$style.title">Nearby points of interest</h2>
    <div :class="$style.content">
      <div :class="$style.places">
        <a
          :href="item.link"
          target="_blank"
          :class="$style.place"
          v-for="item in PLACES"
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
export default {
  data() {
    return {
      PLACES: [
        {
          image: "/img/places/1.jpg",
          title: "Villa La Fleur Museum",
          text: "The museum features a splendid private collection of the works of Polish and Jewish artists associated with the École de Paris as well as temporary exhibitions",
          link: "https://villalafleur.com/",
        },
        {
          image: "/img/places/2.jpg",
          title: "Stara Papiernia Shopping Center",
          text: "A beautiful, modern shopping center situated in a renovated 19th century paper mill with a shopping street characteristic of small towns where cultural events, concerts and shows are organized.",
          link: "http://starapapiernia.pl/en",
        },
        {
          image: "/img/places/3.jpg",
          title: "Konstancin Farmers Market",
          text: "On Wednesdays and Saturdays, the area across from Stara Papiernia on al. Wojska Polskiego, turns into a bustling and colorful market square for a few hours. Local producers of poultry, meats, cheeses and fruits & vegetables offer a wide variety of food and handcrafted products.",
          link: "https://www.kensingtonfarmersmarket.org/",
        },
        {
          image: "/img/places/4.jpg",
          title: "Stefan Żeromski Museum",
          text: "The former home of Stefan Zeromski (1864-1925), a well-known Polish writer, offers free guided tours which can be arranged at a specific time.",
          link: "https://mnki.pl/zeromski/eng/the_museum/about_museum",
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
        @include custom(670) {
          display: block;
        }
        &:last-child {
          border-bottom: 0.0625rem solid $darkText;
        }
        .image {
          max-width: 31.25rem;
          max-height: 18.75rem;
          & img {
            width: 100%;
            height: 100%;
          }
          @include custom(670) {
            margin: 0 auto 1rem auto;
          }
        }
        .info {
          color: $darkText;
          .subtitle {
            font-size: 2.25rem;
            margin: 0 0 1rem 0;
            @include custom(800) {
              font-size: 1.5rem;
            }
            @include custom(670) {
              text-align: center;
              margin: 0 0 2rem 0;
            }
          }
          .text {
            max-width: 31.25rem;
            font-size: 1.125rem;
            margin: 0 0 1rem 0;
            @include custom(800) {
              font-size: 1rem;
            }
          }
        }
        .link {
          background-color: $grey;
          border-radius: 50%;
          padding: 1.5rem;
          @include custom(800) {
            padding: 1rem;
            display: inline-block;
          }
          @include custom(500) {
            max-width: 3rem;
            max-height: 3rem;
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
