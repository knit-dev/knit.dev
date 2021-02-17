import { onMounted } from '@nuxtjs/composition-api'
import { Store } from 'vuex'

const useCallToActionButton = (store: Store<any>) => {
  const setShowCallToActionButton = (value: boolean) => {
    store.dispatch('setShowCallToActionButton', value)
  }

  onMounted(() => {
    setShowCallToActionButton(!document.getElementById('page-call-to-action'))
  })

  return { setShowCallToActionButton }
}

export default useCallToActionButton
