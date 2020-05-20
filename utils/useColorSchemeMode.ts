import { computed } from '@vue/composition-api'
import { ComponentInstance } from '@vue/composition-api/dist/component'

const useColorScheme = (
  root: ComponentInstance,
  systemColorSchemePreference: boolean
) => {
  const setLocalStorageDark = () =>
    root.$store.dispatch('setLocalStorageDark', {
      vm: root
    })

  const dark = computed(() => root.$store.state.dark)

  const choseColorScheme = computed(() => root.$store.state.choseColorScheme)

  interface SetDarkProps {
    value: boolean
    choseColorScheme: boolean
  }
  const setDark = ({ value, choseColorScheme = false }: SetDarkProps) =>
    root.$store.dispatch('setDark', {
      vm: root,
      value,
      choseColorScheme
    })

  const prefersColorSchemeCallback = () => {
    if (!choseColorScheme.value) {
      const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')
      setDark({ value: mediaQueryList.matches, choseColorScheme: false })
    }
  }

  const addPrefersColorSchemeListener = (callback: () => any) =>
    window.matchMedia('(prefers-color-scheme: dark)').addListener(callback)

  const removePrefersColorSchemeListener = (callback: () => any) =>
    window.matchMedia('(prefers-color-scheme: dark)').removeListener(callback)

  const colorSchemeModeSettings = [
    {
      mode: 'system',
      icon: 'mdi-theme-light-dark',
      text: 'Default Scheme',
      nextMode: 'dark',
      choseColorScheme: false,
      value: systemColorSchemePreference
    },
    {
      mode: 'dark',
      icon: 'mdi-weather-night',
      text: 'Toggle Dark',
      nextMode: 'light',
      choseColorScheme: true,
      value: true
    },
    {
      mode: 'light',
      icon: 'mdi-white-balance-sunny',
      text: 'Toggle Light',
      nextMode: 'system',
      choseColorScheme: true,
      value: false
    }
  ]

  const colorSchemeMode = computed(() => {
    let result = 'system'
    if (choseColorScheme.value) {
      result = dark.value ? 'dark' : 'light'
    }
    return result
  })

  const colorSchemeModeIcon = computed(
    () =>
      colorSchemeModeSettings.find(
        (setting) => setting.mode === colorSchemeMode.value
      )?.icon
  )

  const colorSchemeModeText = computed(
    () =>
      colorSchemeModeSettings.find(
        (setting) =>
          setting.mode ===
          colorSchemeModeSettings.find(
            (setting) => setting.mode === colorSchemeMode.value
          )?.nextMode
      )?.text
  )

  const toggleColorSchemeMode = () => {
    const nextSetting = colorSchemeModeSettings.find(
      (setting) =>
        setting.mode ===
        colorSchemeModeSettings.find(
          (setting) => setting.mode === colorSchemeMode.value
        )?.nextMode
    )
    if (nextSetting) {
      setDark(nextSetting)
    }
  }

  return {
    setLocalStorageDark,
    prefersColorSchemeCallback,
    addPrefersColorSchemeListener,
    removePrefersColorSchemeListener,
    colorSchemeModeIcon,
    colorSchemeModeText,
    toggleColorSchemeMode
  }
}

export default useColorScheme