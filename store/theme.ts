import { GetterTree, MutationTree, ActionTree } from 'vuex'

export const state = () => ({
  dark: false,
  userDefinedColorScheme: false,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isDark: (state) => state.dark,
  isUserDefinedColorScheme: (state) => state.userDefinedColorScheme,
  isPrefersColorSchemeCapable: () => {
    return typeof window === 'undefined'
      ? false
      : window.matchMedia('(prefers-color-scheme)').media !== 'not all'
  },
}

export const mutations: MutationTree<RootState> = {
  SET_DARK(state, value) {
    state.dark = value
  },
  SET_USER_DEFINED_COLOR_SCHEME(state, value) {
    state.userDefinedColorScheme = value
  },
}

export const actions: ActionTree<RootState, RootState> = {
  setDark({ commit }, { $vuetify, value, userDefinedColorScheme }) {
    $vuetify.theme.dark = value

    if (userDefinedColorScheme) {
      localStorage.setItem('dark', JSON.stringify(value))
    } else {
      const darkString = localStorage.getItem('dark')
      if (darkString) {
        localStorage.removeItem('dark')
      }
    }

    commit('SET_DARK', value)
    commit('SET_USER_DEFINED_COLOR_SCHEME', userDefinedColorScheme)
  },
  setLocalStorageDark({ dispatch }, { $vuetify }) {
    const darkString = localStorage.getItem('dark')

    if (darkString) {
      const dark = JSON.parse(darkString)

      if (typeof dark === 'boolean') {
        dispatch('setDark', {
          $vuetify,
          value: dark as boolean,
          userDefinedColorScheme: true,
        })
      } else {
        localStorage.removeItem('dark')
      }
    }
  },
}
