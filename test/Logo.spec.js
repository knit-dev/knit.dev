import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('VueToNuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
