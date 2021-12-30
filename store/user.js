export const state = () => ({
  name: null
})

export const mutations = {
  setUserName (state, data) {
    state.name = data
  }
}
