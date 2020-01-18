export function checkDarkMode() {
  let darkMode

  if (typeof window !== 'undefined') {
    if (window.localStorage.getItem('darkMode') === 'false') {
      darkMode = false
      document.body.style.backgroundColor = '#fffefc'
    } else if (window.localStorage.getItem('darkMode') === 'true') {
      darkMode = true
      document.body.style.backgroundColor = '#141310'
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      darkMode = true
      document.body.style.backgroundColor = '#141310'
    } else {
      darkMode = false
      document.body.style.backgroundColor = '#fffefc'
    }
  }

  return darkMode
}
