<template>
  <div :class="$style.container">
    <router-link to="/" :class="$style.back">
      <div :class="$style.icon">
        <img src="/img/icons/backArrow.svg" alt="" />
      </div>
      <div :class="$style.text">Back</div>
    </router-link>
    <h2 :class="$style.title">Privacy Statement</h2>
    <p :class="$style.subtext">
      This Privacy Statement outlines how we collect, use, andprotect any
      personal information you provide while using our website.
    </p>
    <div :class="$style.point" v-for="item in INFO" :key="item.title">
      <h3 :class="$style.subtitle">{{ item.title }}</h3>
      <p :class="$style.text">
        {{ item.text }}
      </p>
      <ul :class="$style.list">
        <li :class="$style.item" v-for="el in item.list" :key="el.item">
          {{ el.item }}
        </li>
      </ul>
      <div :class="$style.bottomText">{{ item.subtext }}</div>
      <a href="tel:+48000000000" :class="$style.contact">{{ item.contact }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      INFO: [
        {
          title: "Personal Information We Collect",
          text: "We may collect the following personal information:",
          list: [
            {
              item: "Name",
            },
            {
              item: "Contact Information (email address, phone number)",
            },
          ],
        },
        {
          title: "How We Use Your Information",
          text: "We use the information collected for the following purposes:",
          list: [
            {
              item: "To respond to your inquiries and provide you with information you request about our services.",
            },
            {
              item: "To schedule property tours as requested.",
            },
            {
              item: "Internal recordkeeping.",
            },
            {
              item: "To improve our services and website.",
            },
          ],
        },
        {
          title: "Security",
          text: "We are committed to ensuring that your information is secure. We have implemented appropriate physical, electronic, and managerial procedures to safeguard and secure the information we collect online.",
        },
        {
          title: "Data Retention",
          text: "We will retain your personal information for as long as necessary to fulfil the purposes outlined in this Privacy Statement or as required bylaw.",
        },
        {
          title: "Your Rights",
          text: "Under the General Data Protection Regulation (GDPR), you have the right to:",
          list: [
            {
              item: "Access the personal information we hold about you.",
            },
            {
              item: "Correct any inaccurate or incomplete personal information.",
            },
            {
              item: "Delete your personal information.",
            },
            {
              item: "Restrict the processing of your personal information.",
            },
          ],
          subtext:
            "To exercise these rights or if you have concerns about how we handle your personal data, please contact us using the information provided at the end of this Privacy Statement.",
        },
        {
          title: "Third Parties",
          text: "We do not sell, trade, or transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website or providing services, as long as they agree to keep this information confidential.",
        },
        {
          title: "Compliance with GDPR and Data Protection Laws",
          text: "We are committed to complying with the principles of the General Data Protection Regulation (GDPR) and relevant data protection laws concerning your personal information. This means that your personal information is:",
          list: [
            {
              item: "Processed lawfully, fairly, and transparently.",
            },
            {
              item: "Adequate, relevant, and limited to what is necessary for the purposes for which it is processed.",
            },
            {
              item: "Accurate and, where necessary, kept up to date.",
            },
            {
              item: "Stored in a form that permits identification for no longer than is necessary for the purposes for which the personal information is processed.",
            },
          ],
        },
        {
          title: "Changes to this Privacy Statement",
          text: "We may update this Privacy Statement from time to time by posting a new version on our website. You should visit this page occasionally to review any changes.",
        },
        {
          title: "Contact Us",
          text: "If you have any questions or concerns about this Privacy Statement or how we handle your personal information, please contact us at:",
          contact: "contact@konstancinhouse4sale.com",
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
  margin: 0 auto 2.5rem auto;
  padding-top: 2rem;
  line-height: 140%;
  .back {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    .icon {
      max-width: 1.5rem;
      max-height: 1.5rem;
      transform: rotate(180deg);
      & img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      font-size: 1.5rem;
      color: $darkGrey;
    }
  }

  .title {
    @include SectionTitle;
    text-align: center;
    margin: 0 0 2.5rem 0;
  }
  .subtext {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    @include custom(920) {
      font-size: 1.2rem;
    }
    @include custom(450) {
      font-size: 1rem;
    }
  }
  .point {
    padding: 2rem 0;
    border-bottom: 0.0625rem solid $black;
    @include custom(450) {
      padding: 1.5rem 0;
    }
    &:last-child {
      border: none;
    }
    .subtitle {
      font-size: 1.75rem;
      margin: 0 0 1rem 0;
      @include custom(920) {
        font-size: 1.5rem;
      }
      @include custom(450) {
        font-size: 1.2rem;
      }
    }
    .text {
      font-size: 1.2rem;
      margin: 0 0 1rem 0;
      @include custom(920) {
        font-size: 1rem;
      }
      @include custom(450) {
        font-size: 0.8rem;
      }
    }
    .list {
      padding: 0 0 0 3rem;
      @include custom(450) {
        padding: 0 0 0 1rem;
      }
      .item {
        list-style-type: disc;
        font-size: 1.2rem;
        margin: 0 0 0.5rem 0;
        &:last-child {
          margin: 0;
        }
        @include custom(920) {
          font-size: 1rem;
        }
        @include custom(450) {
          font-size: 0.8rem;
        }
      }
    }
    .bottomText {
      margin: 1rem 0 0 0;
    }
    .contact {
      margin: 1rem 0 0 0;
      text-decoration: underline;
      color: $darkText;
    }
  }
}
</style>
