export default ({ $vuetify, $colorMode }) => {
  $vuetify.theme.dark = $colorMode.value === 'dark'
}
