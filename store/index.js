import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      dialogForm: false,
      dialogVideo: false,
      courses: [
        {
          id: 0,
          name: 'Speaking Beast',
        },
        {
          id: 1,
          name: 'IELTS Owner',
        },
        {
          id: 2,
          name: 'Testcracker',
        },
        {
          id: 3,
          name: 'CEFR Pro +',
        },
      ],
    }),
    mutations: {
      toggleDialogForm(state) {
        state.dialogForm = !state.dialogForm
      },
      toggleDialogVideo(state) {
        state.dialogVideo = !state.dialogVideo
      },
    },
  })
}

export default createStore
