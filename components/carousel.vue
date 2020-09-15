<template>
  <div class="carousel-wrapper">
    <div class="carousel-content">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="carousel-item"
        @click="openDialogForm()"
      >
        <div class="layer"></div>
        <img src="~@/assets/images/home-bg.jpg" alt="" />
        <h1>{{ slide.text }}</h1>
      </div>
    </div>
    <div class="carousel-arrow-btn">
      <div class="arrow-right" @click="nextSlide()">
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </div>
      <div class="arrow-left" @click="previousSlide()">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data: () => {
    return {
      currentPosition: 0,
      translateX: 0,
      slides: [
        {
          img: '~@/assets/images/home-bg.jpg',
          text: 'slide 0',
        },
        {
          img: '~@/assets/images/home-bg.jpg',
          text: 'slide 1',
        },
        {
          img: '~@/assets/images/home-bg.jpg',
          text: 'slide 2',
        },
      ],
      wrapperWidth: null,
    }
  },
  mounted() {
    this.wrapperWidth = document.getElementsByClassName(
      'carousel-wrapper'
    )[0].clientWidth
    document.querySelectorAll('.carousel-item').forEach((elem) => {
      elem.setAttribute('style', `width: ${this.wrapperWidth}px`)
    })
  },
  methods: {
    nextSlide() {
      if (this.currentPosition < this.slides.length - 1) {
        this.currentPosition++
        this.translateX += -100
        document.querySelectorAll('.carousel-item').forEach((elem) => {
          elem.setAttribute(
            'style',
            `transform: translateX(${this.translateX}%); width: ${this.wrapperWidth}px`
          )
        })
      }
    },
    previousSlide() {
      if (this.currentPosition > 0) {
        this.currentPosition--
        this.translateX += 100
        document.querySelectorAll('.carousel-item').forEach((elem) => {
          elem.setAttribute(
            'style',
            `transform: translateX(${this.translateX}%); width: ${this.wrapperWidth}px`
          )
        })
      }
    },
    openDialogForm() {
      this.$store.commit('toggleDialogForm')
    },
  },
}
</script>

<style scoped lang="scss">
.carousel-wrapper {
  width: 100%;
  height: 80%;
  position: relative;
  overflow: hidden;
  .carousel-content {
    width: 100000px;
    height: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    .carousel-item {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: all 0.8s ease-in-out;
      .layer {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      h1 {
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
      }
    }
  }
  .arrow-right {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0;
    z-index: 2;
    top: calc(50% - 20px);
    color: #fff;
    background: rgb(0, 208, 160);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .arrow-left {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0;
    z-index: 2;
    top: calc(50% - 20px);
    color: #fff;
    background: rgb(0, 208, 160);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}
</style>
