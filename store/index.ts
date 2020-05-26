import { GetterTree } from 'vuex'

export const state = () => ({
  siteName: (process.env.siteName ?? 'website').toLowerCase(),
  companyName: process.env.companyName ?? 'website'
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getSiteName: (state) => state.siteName,
  getCompanyName: (state) => state.companyName
}
