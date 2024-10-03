<template>
  <div :class="$style.container" id="contacts">
    <h2 :class="$style.title">{{ $t("formSection.title") }}</h2>
    <div :class="$style.contacts">
      <div :class="$style.item">
        <img src="/img/icons/whatsapp.svg" alt="" />
        <a href="tel:++48513107913">+48 513 107 913</a>
      </div>
      <div :class="$style.item">
        <img src="/img/icons/tg.svg" alt="" />
        <a href="tel:+48505177027">+48 505 177 027</a>
      </div>
    </div>
    <form :class="$style.form" @submit.prevent="sendEmail">
      <div :class="$style.input">
        <input required type="text" placeholder="Name" v-model="name" />
      </div>
      <div :class="$style.input">
        <input required type="text" placeholder="Email" v-model="email" />
      </div>
      <div :class="$style.input">
        <input required type="text" placeholder="Message" v-model="message" />
      </div>

      <button :class="$style.button">{{ $t("formSection.button") }}</button>
    </form>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail() {
      const templateParams = {
        from_name: this.name,
        email_id: this.email,
        message: this.message,
      };

      emailjs
        .send(
          "service_w4glk9v",
          "template_3m8pu0h",
          templateParams,
          "RTqNTuNNUqEKSke7k"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            if (response.status === 200) {
              this.name = "";
              this.email = "";
              this.message = "";
            }
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
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
    text-align: center;
    margin: 0 0 2.5rem 0;
  }
  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10rem;
    margin: 0 0 2rem 0;
    @include custom(590) {
      gap: 2rem;
    }
    @include custom(438) {
      flex-direction: column;
      gap: 0;
    }
    .item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      & img {
        width: 2rem;
        height: 2rem;
        margin: 0 auto;
      }
      & a {
        color: $black;
        font-size: 1.2rem;
      }
    }
  }
  .form {
    max-width: 44rem;
    margin: 0 auto;
    .input {
      color: $darkText;
      border-bottom: 0.0625rem solid $darkText;
      padding: 0 0 1rem 0;
      margin: 0 0 3.125rem 0;
      font-size: 1.125rem;
      & input {
        width: 100%;
      }
    }
    .button {
      text-align: center;
      background-color: $darkText;
      color: $white;
      font-size: 1.125rem;
      padding: 2rem;
      width: 100%;
    }
  }
}
</style>
