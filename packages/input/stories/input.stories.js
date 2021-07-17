import LgInput from '../'

export default {
  title: 'Example/LgInput',
  component: LgInput
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LgInput },
  template: '<lg-input v-model="value" :type="type"></lg-input>'
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
