import {
  mdiMonitor,
  mdiMonitorOff,
  mdiWeatherNight,
  mdiWhiteBalanceSunny,
  mdiOpenInNew,
  mdiEmailOutline,
  mdiGithub,
  mdiTwitter,
  mdiLinkedin,
} from '@mdi/js'

const useIcons = () => {
  const externalLinkIcon = mdiOpenInNew
  const systemOnIcon = mdiMonitor
  const systemOffIcon = mdiMonitorOff
  const darkModeIcon = mdiWeatherNight
  const lightModeIcon = mdiWhiteBalanceSunny
  const emailIcon = mdiEmailOutline

  const githubIcon = mdiGithub
  const twitterIcon = mdiTwitter
  const linkedinIcon = mdiLinkedin

  return {
    externalLinkIcon,
    systemOnIcon,
    systemOffIcon,
    darkModeIcon,
    lightModeIcon,
    emailIcon,
    githubIcon,
    twitterIcon,
    linkedinIcon,
  }
}

export default useIcons
