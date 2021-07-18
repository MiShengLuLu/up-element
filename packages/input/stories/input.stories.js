import UpInput from '../'

export default {
  title: 'Example/UpInput',
  component: UpInput
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UpInput },
  template: '<up-input v-model="value" :type="type"></up-input>'
})

export const text = Template.bind({})
text.args = {
  value: ''
}

export const password = Template.bind({})
password.args = {
  value: '',
  type: 'password'
}
