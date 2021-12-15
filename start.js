
const css = ["./assets/index.a2582e90.css","./assets/vuetify.7992c2b1.css"]
const pre = ["./assets/vue.87a98c28.js","./assets/vuetify.8dd84506.js","./assets/vue3-sfc-loader.a7c67584.js"]

const head = document.getElementsByTagName('head')[0]
css.forEach(f => {
  const html = '<link rel="stylesheet" href="' + f + '">'
  head.insertAdjacentHTML('beforeend', html)
})
pre.forEach(f => {
  const html = '<link rel="modulepreload" href="' + f + '">'
  head.insertAdjacentHTML('beforeend', html)
})
import "./assets/index.e6a850f4.js"
      