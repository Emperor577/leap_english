<template>
  <div class="feedback-carousel-wrapper">
    <div class="feedback-carousel-content">
      <div
        v-for="(feedback, index) in feedbacks"
        :key="index"
        class="content-item"
      >
        <div class="content-item-inner">
          <p>{{ feedback.text }}</p>
          <div class="item-footer">
            <img :src="feedback.by.img" alt="" />
            <div class="user-info">
              <h3>{{ feedback.by.name }}</h3>
              <small>{{ feedback.by.profession }}</small>
            </div>
          </div>
        </div>
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
  name: 'FeedbackCarousel',
  data: () => {
    return {
      currentPosition: 0,
      swipeQty: 0,
      translateX: 0,
      feedbacks: [
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad\n' +
            '          debitis dolor ipsum magni quia ratione voluptas? Accusamus aliquid\n' +
            '          animi ducimus enim illum labore laudantium quis soluta? Consequatur,\n' +
            '          deleniti, ut.',
          by: {
            name: 'Jane Doe',
            profession: 'Student of the Inha',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          },
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad\n' +
            '          debitis dolor ipsum magni quia ratione voluptas? Accusamus aliquid\n' +
            '          animi ducimus enim illum labore laudantium quis soluta? Consequatur,\n' +
            '          deleniti, ut.',
          by: {
            name: 'Jane Doe',
            profession: 'Student of the Inha',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          },
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad\n' +
            '          debitis dolor ipsum magni quia ratione voluptas? Accusamus aliquid\n' +
            '          animi ducimus enim illum labore laudantium quis soluta? Consequatur,\n' +
            '          deleniti, ut.',
          by: {
            name: 'Jane Doe',
            profession: 'Student of the Inha',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          },
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad\n' +
            '          debitis dolor ipsum magni quia ratione voluptas? Accusamus aliquid\n' +
            '          animi ducimus enim illum labore laudantium quis soluta? Consequatur,\n' +
            '          deleniti, ut.',
          by: {
            name: 'Jane Doe',
            profession: 'Student of the Inha',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          },
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad\n' +
            '          debitis dolor ipsum magni quia ratione voluptas? Accusamus aliquid\n' +
            '          animi ducimus enim illum labore laudantium quis soluta? Consequatur,\n' +
            '          deleniti, ut.',
          by: {
            name: 'Jane Doe',
            profession: 'Student of the Inha',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          },
        },
      ],
      prePage: null,
      itemWidth: null,
      margins: 40,
      carouselContentWidth: null,
    }
  },
  mounted() {
    if (window.outerWidth < 768) {
      this.prePage = 1
    } else {
      this.prePage = 3
    }
    const wrapperWidth = document.getElementsByClassName(
      'feedback-carousel-wrapper'
    )[0].clientWidth
    this.itemWidth = wrapperWidth / this.prePage
    document.querySelectorAll('.content-item').forEach((elem) => {
      elem.setAttribute('style', `width: ${wrapperWidth / this.prePage}px`)
    })
    this.carouselContentWidth =
      this.feedbacks.length * this.itemWidth +
      this.margins * this.feedbacks.length
    document
      .getElementsByClassName('feedback-carousel-content')[0]
      .setAttribute('style', `width: ${this.carouselContentWidth}px`)
    this.swipeQty = this.feedbacks.length - this.prePage
  },
  methods: {
    nextSlide() {
      if (this.feedbacks.length - this.prePage > 0) {
        this.currentPosition++
        if (this.swipeQty + 1 > this.currentPosition) {
          const margin =
            this.currentPosition * this.itemWidth +
            this.currentPosition * this.margins
          document
            .getElementsByClassName('feedback-carousel-content')[0]
            .setAttribute(
              'style',
              `margin-left: -${margin}px; width: ${this.carouselContentWidth}px`
            )
        }
      } else if (this.feedbacks.length - this.prePage === 0) {
        if (this.feedbacks.length - 1 - this.prePage > 0) {
          this.currentPosition++
          if (this.swipeQty + 1 > this.currentPosition) {
            const margin =
              this.currentPosition * this.itemWidth +
              this.currentPosition * this.margins
            document
              .getElementsByClassName('feedback-carousel-content')[0]
              .setAttribute(
                'style',
                `margin-left: -${margin}px; width: ${this.carouselContentWidth}px`
              )
          }
        }
      }
    },
    previousSlide() {
      if (this.currentPosition > 0) {
        this.currentPosition--
        const margin =
          this.currentPosition * this.itemWidth +
          this.currentPosition * this.margins
        document
          .getElementsByClassName('feedback-carousel-content')[0]
          .setAttribute(
            'style',
            `margin-left: -${margin}px; width: ${this.carouselContentWidth}px`
          )
      }
    },
  },
}
</script>

<style scoped lang="scss">
.feedback-carousel-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .feedback-carousel-content {
    height: 100%;
    display: flex;
    position: relative;
    align-items: center;
    transition: all 0.6s ease-in-out;
    .content-item {
      height: 400px;
      padding: 20px;
      margin: 0 20px;
      box-shadow: 0 0 6px 0 rgba(9, 9, 16, 0.2);
      transition: all 0.6s ease-in-out;
      cursor: pointer;
      border-radius: 15px;
      &:hover {
        -webkit-transform: scale(1.06);
        transform: scale(1.06);
        box-shadow: 0 10px 20px 0 rgba(9, 9, 16, 0.15);
      }
      .content-item-inner {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          width: 100%;
          height: 70%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .item-footer {
          width: 100%;
          height: 25%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
          }
          .user-info {
            width: calc(100% - 70px);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            h2 {
              font-size: 22px;
            }
            small {
              color: #aaa;
            }
          }
        }
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
    border-radius: 25px;
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
    border-radius: 25px;
  }
}
</style>
