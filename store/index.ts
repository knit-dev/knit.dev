import { GetterTree, MutationTree, ActionTree } from 'vuex'

export const state = () => ({
  siteName: process.env.siteName ?? 'website',
  siteUrl: process.env.siteUrl ?? 'www.example.com',
  companyName: process.env.companyName ?? 'company',
  showCallToActionButton: false,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getSiteName: (state) => state.siteName,
  getSiteUrl: (state) => state.siteUrl,
  getCompanyName: (state) => state.companyName,
  getShowCallToActionButton: (state) => state.showCallToActionButton,
}

export const mutations: MutationTree<RootState> = {
  SET_SHOW_CALL_TO_ACTION_BUTTON(state, value: boolean) {
    state.showCallToActionButton = value
  },
}

export const actions: ActionTree<RootState, RootState> = {
  setShowCallToActionButton({ commit, state }, value: boolean) {
    if (state.showCallToActionButton !== value) {
      commit('SET_SHOW_CALL_TO_ACTION_BUTTON', value)
    }
  },
}
