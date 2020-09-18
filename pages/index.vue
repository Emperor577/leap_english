<template>
  <div class="container">
    <section id="home" class="home">
      <div class="home-wrapper">
        <div class="home-content">
          <div class="bg-layout">
            <div class="on-img-layer"></div>
            <img src="~@/assets/images/home-bg.jpg" alt="home" />
          </div>
          <div class="bg-content">
            <h1>Keep moving and leap forward</h1>
            <p>
              Leap English, o’zbek tilidagi eng sifatli ingliz tili
              darsliklarini taqdim etadi. Sizda hohish, sabr va harakat bo’lsa
              bas, qolgani bizdan.
            </p>
            <span class="play-btn" @click="openDialogVideo()">
              <font-awesome-icon :icon="['fas', 'play']" />
            </span>
          </div>
        </div>
      </div>
      <dialog-video v-if="dialogVideo"></dialog-video>
    </section>
    <section id="course" class="course">
      <div class="course-wrapper">
        <div class="course-content">
          <div class="course-title">
            <h1>Ingiliz tilini nega o'rganmoqchisiz?</h1>
          </div>
          <carousel></carousel>
        </div>
      </div>
      <dialog-form v-if="dialogForm"></dialog-form>
    </section>
    <section id="price" class="price">
      <div class="price-wrapper">
        <div class="price-content">
          <h2>Our prices</h2>
          <price-tab />
        </div>
      </div>
    </section>
    <section id="feedback" class="feedback">
      <div class="feedback-wrapper">
        <div class="feedback-content">
          <div class="content-title">
            <h2>What our students say</h2>
            <span>Reviews from our happy students</span>
          </div>
          <div class="content-body">
            <feedback-carousel></feedback-carousel>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Carousel from '~/components/carousel'
import FeedbackCarousel from '~/components/feedbackCarousel'
import dialogForm from '~/components/dialogForm'
import dialogVideo from '~/components/dialogVideo'
import PriceTab from '~/components/price-tab'
export default {
  components: {
    Carousel,
    dialogForm,
    dialogVideo,
    FeedbackCarousel,
    PriceTab,
  },
  computed: {
    dialogForm() {
      return this.$store.state.dialogForm
    },
    dialogVideo() {
      return this.$store.state.dialogVideo
    },
  },
  methods: {
    openDialogVideo() {
      this.$store.commit('toggleDialogVideo')
    },
  },
}
</script>

<style scoped lang="scss">
@import 'assets/scss/sections/home.scss';
@import 'assets/scss/sections/course.scss';
@import 'assets/scss/sections/price.scss';
@import 'assets/scss/sections/feedback.scss';
@import 'assets/scss/responsive.scss';
.container {
  margin: 0 auto;
  position: relative;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
