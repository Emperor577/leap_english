<template>
  <div class="price-tab-wrapper">
    <div class="tab-list">
      <span
        :class="{
          'tabs active-tab': activeTabName === 'individual',
          tabs: activeTabName !== 'individual',
        }"
        @click="changeActiveTab('individual')"
      >
        Individual (1 kishi)
      </span>
      <span
        :class="{
          'tabs active-tab': activeTabName === 'couple',
          tabs: activeTabName !== 'couple',
        }"
        @click="changeActiveTab('couple')"
      >
        Couple (2 kishi)
      </span>
      <span
        :class="{
          'tabs active-tab': activeTabName === 'group',
          tabs: activeTabName !== 'group',
        }"
        @click="changeActiveTab('group')"
      >
        Group (3 kishi)
      </span>
    </div>
    <div class="tab-content-list">
      <div class="tab-content">
        <div class="price-card">
          <div class="price-header">
            <span>{{ getActivePriceItem().name }}</span>
            <span><small>uzs</small>{{ getActivePriceItem().cost }}</span>
          </div>
          <div class="price-body">
            <div class="body-img">
              <img src="~@/assets/images/individual.jpg" alt="" />
            </div>
            <ul class="body-text">
              <li>
                <font-awesome-icon :icon="['fas', 'check']" />
                <span>Consultation</span>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'check']" />
                <span>Academic Support <small>(for students only)</small></span>
              </li>
            </ul>
          </div>
          <div class="price-footer">
            <span class="footer-btn">Get Started</span>
          </div>
        </div>
        <div class="price-thermometer-wrap">
          <div class="thermometer">
            <div class="thermometer-layout">
              <div class="fill fill-1-4"></div>
            </div>
          </div>
          <div class="thermometer-rate">
            <span
              class="rate active-rate"
              @mouseover="changeThermometerRate('fill-1-4', $event, '1 hour')"
            >
              1 hour
            </span>
            <span
              class="rate"
              @mouseover="changeThermometerRate('fill-2-4', $event, '8 hours')"
            >
              8 hours
            </span>
            <span
              class="rate"
              @mouseover="changeThermometerRate('fill-3-4', $event, '12 hours')"
            >
              12 hours
            </span>
            <span
              class="rate"
              @mouseover="changeThermometerRate('fill-4-4', $event, '20 hours')"
            >
              20 hours
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PriceTab',
  data: () => {
    return {
      activeTabName: 'individual',
      prices: [
        {
          name: 'individual',
          price_item: [
            {
              name: 'Newbie',
              hour: '1 hour',
              cost: '50 000',
            },
            {
              name: 'Amateur',
              hour: '8 hours',
              cost: '390 000',
            },
            {
              name: 'Month',
              hour: '12 hours',
              cost: '585 000',
            },
            {
              name: 'Intensive',
              hour: '20 hours',
              cost: '950 000',
            },
          ],
        },
        {
          name: 'couple',
          price_item: [
            {
              name: 'Newbie',
              hour: '1 hour',
              cost: '40 000',
            },
            {
              name: 'Amateur',
              hour: '8 hours',
              cost: '315 000',
            },
            {
              name: 'Month',
              hour: '12 hours',
              cost: '470 000',
            },
            {
              name: 'Intensive',
              hour: '20 hours',
              cost: '760 000',
            },
          ],
        },
        {
          name: 'group',
          price_item: [
            {
              name: 'Newbie',
              hour: '1 hour',
              cost: '35 000',
            },
            {
              name: 'Amateur',
              hour: '8 hours',
              cost: '280 000',
            },
            {
              name: 'Month',
              hour: '12 hours',
              cost: '415 000',
            },
            {
              name: 'Intensive',
              hour: '20 hours',
              cost: '665 000',
            },
          ],
        },
      ],
      activePriceCard: {
        name: 'individual',
        price_item: [
          {
            name: 'Newbie',
            hour: '1 hour',
            cost: '50 000',
            isActive: true,
          },
          {
            name: 'Amateur',
            hour: '8 hours',
            cost: '390 000',
            isActive: false,
          },
          {
            name: 'Month',
            hour: '12 hours',
            cost: '585 000',
            isActive: false,
          },
          {
            name: 'Intensive',
            hour: '20 hours',
            cost: '950 000',
            isActive: false,
          },
        ],
      },
    }
  },
  methods: {
    changeActiveTab(name) {
      this.activeTabName = name
      this.setActivePriceCard()
    },
    setActivePriceCard() {
      this.activePriceCard = this.prices.find(
        (price) => price.name === this.activeTabName
      )
      this.activePriceCard.price_item.map((item) => {
        item.isActive = item.name === 'Newbie'
      })
    },
    getActivePriceItem() {
      return this.activePriceCard.price_item.find((item) => {
        return item.isActive === true
      })
    },
    setActivePriceItem(hour) {
      this.activePriceCard.price_item.map((item) => {
        item.isActive = false
        if (item.hour === hour) {
          item.isActive = true
        }
      })
    },
    changeThermometerRate(className, e, hour) {
      if (!e.target.classList.contains('active-rate')) {
        document.querySelectorAll('.rate').forEach((elem) => {
          elem.classList.remove('active-rate')
        })
        const removeClass = document.getElementsByClassName('fill')[0]
          .classList[1]
        document.getElementsByClassName('fill')[0].classList.remove(removeClass)
        document.getElementsByClassName('fill')[0].classList.add(className)
        this.setActivePriceItem(hour)
        e.target.classList.add('active-rate')
      }
    },
  },
}
</script>

<style scoped lang="scss">
.price-tab-wrapper {
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .tab-list {
    width: 50%;
    height: 55px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #00d0a0;
    border-radius: 10px;
    .tabs {
      width: 33%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .active-tab {
      background: #00d0a0;
      border-radius: 10px;
      color: #fff;
      font-size: 18px;
      border: 1px solid #00d0a0;
      font-weight: 600;
    }
  }
  .tab-content-list {
    width: 100%;
    height: calc(100% - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
    .tab-content {
      width: 80%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .price-card {
        width: 300px;
        height: 80%;
        background: #fff;
        border-radius: 10px;
        border: 1px solid #00d0a0;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .price-header {
          width: 100%;
          height: 15%;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          span {
            width: 45%;
            height: 100%;
            display: flex;
            align-items: center;
            &:first-child {
              font-size: 22px;
              font-weight: 700;
              color: #ffc032;
            }
            &:last-child {
              flex-direction: row-reverse;
              font-size: 22px;
              font-weight: 600;
              small {
                font-size: 16px;
                font-weight: 500;
                color: #aaa;
                margin-left: 5px;
              }
            }
          }
        }
        .price-body {
          width: 100%;
          height: 60%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          .body-img {
            width: 85%;
            height: 45%;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .body-text {
            width: 85%;
            height: 50%;
            padding: 0;
            list-style: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            li {
              width: 100%;
              height: 45%;
              display: flex;
              flex-direction: row-reverse;
              justify-content: center;
              align-items: center;
              svg {
                width: 15%;
                color: #00d0a0;
              }
              span {
                width: 80%;
                margin-right: 10px;
              }
              &:last-child {
                span {
                  display: flex;
                  flex-direction: column;
                }
              }
            }
          }
        }
        .price-footer {
          width: 100%;
          height: 15%;
          display: flex;
          align-items: center;
          justify-content: center;
          span.footer-btn {
            width: 50%;
            height: 80%;
            background: #00d0a0;
            color: #fff;
            font-size: 20px;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
          }
        }
      }
      .price-thermometer-wrap {
        width: 150px;
        height: 80%;
        margin-left: 10px;
        display: flex;
        .thermometer {
          width: 45%;
          height: 100%;
          display: flex;
          justify-content: center;
          .thermometer-layout {
            width: 15px;
            height: 100%;
            background: #eee;
            border-radius: 10px;
            position: relative;
            display: flex;
            align-items: flex-end;
            &::after {
              content: '';
              bottom: 0;
              width: 20px;
              height: 20px;
              background: #ffdb78;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              border-radius: 50%;
              box-shadow: 0 0 0 7px #fff1d3;
            }
            .fill {
              width: 100%;
              border-radius: 10px;
              background-color: #ffdb78;
              z-index: 10;
            }
            .fill-1-4 {
              height: 25%;
            }
            .fill-2-4 {
              height: 50%;
            }
            .fill-3-4 {
              height: 75%;
            }
            .fill-4-4 {
              height: 100%;
            }
          }
        }
        .thermometer-rate {
          width: 55%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column-reverse;
          .rate {
            width: 100%;
            height: 25%;
            display: flex;
            font-size: 18px;
            font-weight: 500;
            color: #aaa;
            cursor: pointer;
          }
          .active-rate {
            color: #000;
          }
        }
      }
    }
  }
}
</style>
