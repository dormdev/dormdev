export function checkWebP() {
  if (typeof window !== 'undefined') {
    const elem = document.createElement('canvas')

    if (elem.getContext && elem.getContext('2d')) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
    }
  }

  // very old browser like IE 8, canvas not supported
  return false
}
