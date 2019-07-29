import { debounce } from 'lodash-es'

let styleInserted = false
const insertStyle = selector => {
  if (!styleInserted) {
    styleInserted = true
    document.head.insertAdjacentHTML(
      'beforeend',
      `
      <style>
        ${selector} {
          position: sticky;
          top: 0;
          transition: transform .25s ease-in-out, box-shadow .5s;
          will-change: transform;
        }

        ${selector}.hidden {
          transform: translateY(-100%);
        }

        ${selector}.unpinned {
          box-shadow: 0 0 35px 0 rgba(2, 2, 2, .08);
        }
      </style>
      `
    )
  }
}

export default (
  selector = '.headroom',
  { useStyle = true, wait = 100 } = {}
) => {
  let header
  if (typeof selector === 'string') header = document.querySelector(selector)
  else if (selector instanceof Element) header = selector
  else throw new TypeError('Invalid selector')

  let scrollY = 0

  if (useStyle) insertStyle(selector)

  const listener = debounce(() => {
    header.classList.toggle(
      'unpinned',
      window.pageYOffset >= header.clientHeight
    )
    header.classList.toggle(
      'hidden',
      header.classList.contains('unpinned') && window.pageYOffset >= scrollY
    )
    scrollY = window.pageYOffset
  }, wait)

  document.addEventListener('scroll', listener)

  return () => document.removeEventListener('scroll', listener)
}
