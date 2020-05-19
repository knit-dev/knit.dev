import { GetterTree, MutationTree, ActionTree } from 'vuex'

export const state = () => ({
  siteName: (
    process.env.SITE_NAME ||
    process.env.npm_package_name ||
    'website'
  ).toLowerCase(),
  dark: false,
  choseColorScheme: false
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  siteName: (state) => state.siteName,
  dark: (state) => state.dark,
  choseColorScheme: (state) => state.choseColorScheme
}

export const mutations: MutationTree<RootState> = {
  SET_SITE_NAME: (state, newName: string) => (state.siteName = newName),
  SET_DARK: (state, { vm, value }) => {
    vm.$vuetify.theme.dark = value
    state.dark = value
  },
  SET_CHOSE_COLOR_SCHEME: (state, value) => {
    state.choseColorScheme = value
  }
}

export const actions: ActionTree<RootState, RootState> = {
  setDark: ({ commit }, { vm, value, choseColorScheme }) => {
    commit('SET_DARK', { vm, value })
    if (choseColorScheme) {
      commit('SET_CHOSE_COLOR_SCHEME', true)
      localStorage.setItem('dark', value)
    } else {
      const darkString = localStorage.getItem('dark')
      if (darkString) {
        localStorage.removeItem('dark')
      }
      commit('SET_CHOSE_COLOR_SCHEME', false)
    }
  },
  setLocalStorageDark: ({ commit }, { vm }) => {
    const darkString = localStorage.getItem('dark')
    if (darkString) {
      const darkValue = JSON.parse(darkString)

      if (typeof darkValue === 'boolean') {
        commit('SET_DARK', { vm, value: darkValue as boolean })
      }
    }
  }
}
