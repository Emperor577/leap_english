<template>
  <div class="dialog-video">
    <div class="dialog-layer" @click="closeDialogForm()"></div>
    <div class="dialog-content">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/vX42XS6DlZE?autoplay=1&showinfo=0&rel=0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <span class="close-dialog-icon" @click="closeDialogForm()">
        <font-awesome-icon :icon="['fas', 'times']" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogVideo',
  methods: {
    closeDialogForm() {
      this.$store.commit('toggleDialogVideo')
    },
  },
}
</script>

<style scoped lang="scss">
.dialog-video {
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
    width: 80%;
    height: 80%;
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
    .close-dialog-icon {
      position: absolute;
      width: 45px;
      height: 45px;
      right: -5%;
      top: 0;
      color: rgb(255, 192, 50);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      svg {
        font-size: 25px;
      }
    }
  }
}
</style>
