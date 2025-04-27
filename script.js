const { createApp } = Vue

createApp({
  data() {
    return {
      isActive: false, // 控制是否显示注册界面
      registerData: { // 注册表单
        name: '',
        email: '',
        password: ''
      },
      loginData: { // 登录表单
        email: '',
        password: ''
      }
    }
  },
  methods: {
    switchToRegister() {
      this.isActive = true;
    },
    switchToLogin() {
      this.isActive = false;
    },
    submitRegister() {
      console.log("注册信息：", this.registerData);
      alert(`注册成功！欢迎你，${this.registerData.name}`);
    },
    submitLogin() {
      console.log("登录信息：", this.loginData);
      alert(`登录成功！欢迎回来`);
    }
  }
}).mount('#app')
