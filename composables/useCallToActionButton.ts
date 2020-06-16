import { onMounted } from '@vue/composition-api'

const useCallToActionButton = (root: any) => {
  const setShowCallToActionButton = (value: boolean) => {
    root.$store.dispatch('setShowCallToActionButton', value)
  }

  onMounted(() => {
    setShowCallToActionButton(!document.getElementById('page-call-to-action'))
  })

  return { setShowCallToActionButton }
}

export default useCallToActionButton
