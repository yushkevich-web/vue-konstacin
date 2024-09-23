<template>
  <div :class="$style.container" id="contacts">
    <h2 :class="$style.title">Feel free to contact</h2>
    <h3 :class="$style.text">
      We speak Polish, English and German
      <a href="mailto:contact@konstancinhouse4sale.com">
        contact@konstancinhouse4sale.com
      </a>
    </h3>
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

      <button :class="$style.button">Submit</button>
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
        user_name: this.name,
        user_email: this.email,
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
  .text {
    text-align: center;
    font-size: 1.5rem;
    color: $darkText;
    margin: 0 0 2.5rem 0;
    @include custom(840) {
      font-size: 1.2rem;
    }
    @include custom(580) {
      font-size: 1rem;
    }
    & a {
      color: $darkText;
      text-decoration: underline;
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
