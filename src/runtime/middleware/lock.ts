import {
  abortNavigation,
  defineNuxtRouteMiddleware,
  useCookie,
  ref,
  reloadNuxtApp
} from '#imports'


export default defineNuxtRouteMiddleware(async (to, from) => {
  const isUnlocked = useCookie('isUnlocked', {
    default: () => ref(false),
  })
  if (isUnlocked.value)
    return true
  const { locked } = await $fetch('/api/app-lock/is-locked', {
    method: 'POST',
  })
  if (!locked)
    return isUnlocked.value = true
  if (process.client) {
    const passwordInput = prompt('Please enter your password:')
    const { valid } = await $fetch('/api/app-lock/validate', {
      method: 'POST',
      body: { password: passwordInput },
    })

    if (valid) {
      isUnlocked.value = true
      reloadNuxtApp()
      return true
    }
    else {
      alert('Invalid Password')
      isUnlocked.value = false
      return abortNavigation()
    }
  }
  return false
})
