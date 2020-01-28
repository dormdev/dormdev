export function checkDarkMode() {
  let darkMode

  if (typeof window !== 'undefined') {
    if (window.localStorage.getItem('darkMode') === 'false') {
      darkMode = false
    } else if (window.localStorage.getItem('darkMode') === 'true') {
      darkMode = true
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      darkMode = true
    } else {
      darkMode = false
    }
  }

  return darkMode
}
