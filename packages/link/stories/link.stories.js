import UpLink from '../src/link.vue'

export default {
  title: 'UpLink',
  component: UpLink
}

const Template = (args, { argTypes }) => ({
  props: Object.assign(argTypes),
  components: { UpLink },
  template: `
    <div>
      <up-link></up-link>
    </div>
  `
})

export const Link = Template.bind({})