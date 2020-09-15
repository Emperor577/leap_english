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
          <div class="price-table">
            <div class="column">
              <div class="row">class</div>
              <div class="row">Hours</div>
              <div class="row">Individual (1 kishi)</div>
              <div class="row">Couple (2 kishi)</div>
              <div class="row">Group (3 kishi)</div>
              <div class="row">Consultation</div>
              <div class="row">
                <span class="main">Academic Support</span>
                <span class="secondary">(for student only)</span>
              </div>
            </div>
            <div class="column">
              <div class="row">Newbie</div>
              <div class="row">1 hour</div>
              <div class="row">50 000</div>
              <div class="row">40 000</div>
              <div class="row">35 000</div>
              <div class="row">Free</div>
              <div class="row">
                <font-awesome-icon :icon="['fas', 'check']" />
              </div>
            </div>
            <div class="column">
              <div class="row">Amateur</div>
              <div class="row">8 hours</div>
              <div class="row">
                <span class="last-price">400 000</span>
                <span class="current-price">390 000</span>
              </div>
              <div class="row">
                <span class="last-price">320 000</span>
                <span class="current-price">315 000</span>
              </div>
              <div class="row">280 000</div>
              <div class="row">Free</div>
              <div class="row">
                <font-awesome-icon :icon="['fas', 'check']" />
              </div>
            </div>
            <div class="column">
              <div class="row">Month</div>
              <div class="row">12 hours</div>
              <div class="row">
                <span class="last-price">600 000</span>
                <span class="current-price">585 000</span>
              </div>
              <div class="row">
                <span class="last-price">480 000</span>
                <span class="current-price">470 000</span>
              </div>
              <div class="row">
                <span class="last-price">420 000</span>
                <span class="current-price">415 000</span>
              </div>
              <div class="row">
                Free
              </div>
              <div class="row">
                <font-awesome-icon :icon="['fas', 'check']" />
              </div>
            </div>
            <div class="column">
              <div class="row">Intensive</div>
              <div class="row">20 hours</div>
              <div class="row">
                <span class="last-price">1 000 000</span>
                <span class="current-price">950 000</span>
              </div>
              <div class="row">
                <span class="last-price">800 000</span>
                <span class="current-price">760 000</span>
              </div>
              <div class="row">
                <span class="last-price">700 000</span>
                <span class="current-price">665 000</span>
              </div>
              <div class="row">
                Free
              </div>
              <div class="row">
                <font-awesome-icon :icon="['fas', 'check']" />
              </div>
            </div>
          </div>
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
export default {
  components: {
    Carousel,
    dialogForm,
    dialogVideo,
    FeedbackCarousel,
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
