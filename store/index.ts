import { GetterTree } from 'vuex'

export const state = () => ({
  siteName: process.env.siteName ?? 'website',
  siteUrl: process.env.siteUrl ?? 'www.example.com',
  companyName: process.env.companyName ?? 'company'
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getSiteName: (state) => state.siteName,
  getSiteUrl: (state) => state.siteUrl,
  getCompanyName: (state) => state.companyName
}
