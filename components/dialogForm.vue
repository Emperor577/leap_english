<template>
  <div class="dialog-form">
    <div class="dialog-layer" @click="closeDialogForm()"></div>
    <div class="dialog-content">
      <div class="form-title">
        Leave Request
        <span class="close-dialog-icon" @click="closeDialogForm()">
          <font-awesome-icon :icon="['fas', 'times']" />
        </span>
      </div>
      <form class="form-wrapper">
        <div class="form-content">
          <div class="form-input">
            <label>
              First Name
              <input
                v-model="requestForm.firstName"
                type="text"
                placeholder="Enter first name"
                required
              />
            </label>
          </div>
          <div class="form-input">
            <label>
              Last Name
              <input
                v-model="requestForm.lastName"
                type="text"
                placeholder="Enter last name"
                required
              />
            </label>
          </div>
          <div class="form-input">
            <label>
              Phone Number
              <input
                v-model="requestForm.phoneNumber"
                type="text"
                placeholder="Enter phone number"
                required
              />
            </label>
          </div>
          <div class="form-select">
            <span class="select-label">Select gender</span>
            <div class="select-wrapper">
              <div class="select-input">
                <div
                  class="input-layer"
                  @click="toggleDropdown($event, 'select-dropdown-gender')"
                >
                  <font-awesome-icon :icon="['fas', 'angle-down']" />
                </div>
                <input
                  v-model="requestForm.gender"
                  placeholder="choose gender"
                  type="text"
                />
              </div>
              <ul
                id="select-dropdown-gender"
                class="select-dropdown"
                type="none"
              >
                <li
                  class="select-drop-item"
                  @click="closeDropdown('select-dropdown-gender', 'male')"
                >
                  <span>
                    <font-awesome-icon :icon="['fas', 'male']" />
                  </span>
                  <span>
                    male
                  </span>
                </li>
                <li
                  class="select-drop-item"
                  @click="closeDropdown('select-dropdown-gender', 'female')"
                >
                  <span>
                    <font-awesome-icon :icon="['fas', 'female']" />
                  </span>
                  <span>
                    female
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="form-input">
            <label>
              Birthday
              <input
                v-model="requestForm.birthdate"
                type="date"
                placeholder="Enter birthdate"
                required
              />
            </label>
          </div>
          <div class="form-select">
            <span class="select-label">Select Courses</span>
            <div class="select-wrapper">
              <div class="select-input">
                <div
                  class="input-layer"
                  @click="toggleDropdown($event, 'select-dropdown-course')"
                >
                  <font-awesome-icon :icon="['fas', 'angle-down']" />
                </div>
                <input
                  v-model="requestForm.course"
                  placeholder="choose course"
                  type="text"
                />
              </div>
              <ul
                id="select-dropdown-course"
                class="select-dropdown"
                type="none"
              >
                <li
                  v-for="course in courses"
                  :key="course.id"
                  class="select-drop-item"
                  @click="closeDropdown('select-dropdown-course', course.name)"
                >
                  <span>
                    {{ course.name }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="form-submit">
          <div class="submit-btn" @click="onSubmit()">Submit</div>
        </div>
      </form>
      <div class="after-submit">
        <h1>Thank your request. Our team will call you back soon!!!</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DialogForm',
  data: () => {
    return {
      requestForm: {
        firstName: null,
        lastName: null,
        phoneNumber: null,
        gender: null,
        birthdate: null,
        course: null,
      },
      gender: ['male', 'female'],
    }
  },
  computed: {
    courses() {
      return this.$store.state.courses
    },
  },
  methods: {
    closeDialogForm() {
      this.$store.commit('toggleDialogForm')
    },
    onSubmit() {
      const text =
        '<strong>Full Name: </strong>' +
        this.requestForm.firstName +
        ' ' +
        this.requestForm.lastName +
        '\n<strong>Phone Number: </strong>' +
        this.requestForm.phoneNumber +
        '\n<strong>gender: </strong>' +
        this.requestForm.gender +
        '\n<strong>birthdate: </strong>' +
        this.requestForm.birthdate +
        '\n<strong>course: </strong>' +
        this.requestForm.course
      axios
        .get(
          'https://api.telegram.org/bot1283541812:AAGCxyz-ulb1sVMlSqAsNXOLL47PtQ4vxBo/sendMessage',
          {
            params: {
              chat_id: -1001406579611,
              text,
              parse_mode: 'HTML',
            },
          }
        )
        .then((r) => {
          this.requestForm = {
            firstName: null,
            lastName: null,
            phoneNumber: null,
            gender: null,
            birthdate: null,
            course: null,
          }
          const afterSubmit = document.getElementsByClassName('after-submit')[0]
          afterSubmit.classList.add('d-flex')
          setTimeout(() => {
            afterSubmit.classList.remove('d-flex')
            this.$store.commit('toggleDialogForm')
          }, 3000)
        })
        .catch((e) => {
          // eslint-disable-next-line no-console
          console.log(e)
        })
    },
    toggleDropdown(e, elementId) {
      e.target.classList.toggle('activeDropdown')
      document.getElementById(elementId).classList.toggle('d-block')
    },
    closeDropdown(elementId, value) {
      if (elementId === 'select-dropdown-course') {
        this.requestForm.course = value
      } else if (elementId === 'select-dropdown-gender') {
        this.requestForm.gender = value
      }
      document.getElementById(elementId).classList.remove('d-block')
      document
        .getElementsByClassName('activeDropdown')[0]
        .classList.remove('activeDropdown')
    },
  },
}
</script>

<style scoped lang="scss">
.d-block {
  display: block !important;
}
.d-flex {
  display: flex !important;
}
.dialog-form {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  .dialog-layer {
    width: 100%;
    height: 100%;
    background: rgba(0, 208, 160, 0.1);
    backdrop-filter: blur(8px);
  }
  .dialog-content {
    width: 50%;
    height: 70%;
    background: #fff;
    position: absolute;
    z-index: 101;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .form-title {
      width: 100%;
      height: 15%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 25px;
      font-weight: 500;
      text-transform: uppercase;
      font-family: sans-serif;
      .close-dialog-icon {
        position: absolute;
        width: 45px;
        height: 45px;
        right: 0;
        top: 0;
        color: #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
    .form-wrapper {
      width: 100%;
      height: 85%;
      .form-content {
        width: 100%;
        height: 85%;
        padding: 10px 20px 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        .form-input {
          width: 45%;
          height: 70px;
          label {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            color: #616161;
            input {
              width: 100%;
              height: 40px;
              border: none;
              background: #eee;
              padding: 5px 10px;
              outline: none;
              color: #868686;
              text-transform: capitalize;
              &::placeholder {
                color: #ccc;
              }
            }
          }
        }
        .form-select {
          width: 45%;
          height: 70px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          color: #616161;
          .select-wrapper {
            width: 100%;
            height: 40px;
            position: relative;
            .select-input {
              width: 100%;
              height: 100%;
              position: relative;
              .input-layer {
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 1;
                cursor: pointer;
                svg {
                  position: absolute;
                  right: 5%;
                  top: 30%;
                  font-size: 18px;
                  color: #ccc;
                  transform: rotate(0deg);
                  transition: transform 0.3s ease-in-out;
                }
              }
              .activeDropdown svg {
                transform: rotate(-180deg);
                transition: transform 0.3s ease-in-out;
              }
              input {
                width: 100%;
                height: 100%;
                border: none;
                background: #eee;
                color: #868686;
                padding: 5px 10px;
                outline: none;
                text-transform: capitalize;
                &::placeholder {
                  color: #ccc;
                }
              }
            }
            .select-dropdown {
              display: none;
              position: absolute;
              width: 100%;
              background: #fff;
              padding: 0;
              z-index: 100;
              box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
              margin-top: 5px;
              border-radius: 5px;
              .select-drop-item {
                width: 100%;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                padding: 10px 20px;
                border-bottom: 1px solid #ddd;
                cursor: pointer;
                border-radius: 5px;
                &:last-child {
                  border-bottom: none;
                }
                &:hover {
                  background-color: rgb(0, 208, 160);
                  color: #fff;
                  transition: all 0.2s ease-in-out;
                }
                span {
                  font-size: 18px;
                  text-transform: capitalize;
                  &:first-child {
                    margin-right: 10px;
                  }
                }
              }
            }
          }
        }
      }
      .form-submit {
        width: 100%;
        height: 15%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        .submit-btn {
          outline: none;
          border: none;
          background: #80e391;
          font-size: 18px;
          padding: 10px 30px;
          border-radius: 5px;
          color: #fff;
          letter-spacing: 2px;
          font-family: sans-serif;
          text-transform: uppercase;
          line-height: 25px;
          cursor: pointer;
        }
      }
    }
    .after-submit {
      display: none;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      position: absolute;
      background: #fff;
      z-index: 1;
    }
  }
}
</style>
