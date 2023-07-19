export { default as Header } from '../../components/global/header.vue'
export { default as Admin } from '../../components/admin/admin.vue'
export { default as Home } from '../../components/home/home.vue'
export { default as LayoutFooter } from '../../components/layout/footer.vue'
export { default as LayoutNavbar } from '../../components/layout/navbar.vue'
export { default as Login } from '../../components/login/login.vue'
export { default as Questions } from '../../components/questions/questions.vue'
export { default as Register } from '../../components/register/register.vue'
export { default as Team } from '../../components/team/team.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
