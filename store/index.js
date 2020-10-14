export const state = () => ({
  Dataid: 1,
  data: []
})

export const mutations = {
  increment (state) {
    state.Dataid++
  },
  regis (state, array) {
    state.data.push(array)
  }
}
