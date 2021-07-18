import UpLink from './src/link.vue'

UpLink.install = Vue => {
  Vue.component(UpLink.name, UpLink)
}

export default UpLink
