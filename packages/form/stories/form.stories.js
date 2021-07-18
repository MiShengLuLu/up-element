import UpForm from '..'
import UpFormItem from '../../formitem'
import UpInput from '../../input'
import UpButton from '../../button'

export default {
  title: 'Example/UpFormItem',
  component: UpFormItem
}

const Template = (args, { argTypes }) => ({
  props: Object.assign(argTypes),
  components: { UpForm, UpFormItem, UpInput, UpButton },
  template: `
    <up-form class="form" ref="form" :model="user" :rules="rules">
      <up-form-item label="用户名" prop="username">
        <up-input v-model="user.username" placeholder="请输入用户名"></up-input>
      </up-form-item>
      <up-form-item label="密码" prop="password">
        <up-input
          type="password"
          v-model="user.password"
          placeholder="请输入密码"
        ></up-input>
      </up-form-item>
      <up-form-item>
        <up-button @click="login">登 录</up-button>
      </up-form-item>
    </up-form>
  `,
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
          },
          {
            min: 6,
            max: 12,
            message: "请输入6-12位密码",
          },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
        }
      })
    },
  },
})

export const login = Template.bind({})
