<template>
  <div class="signup_container">
    <div class="signup_box">
      <!--      头像区域-->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <!--      注册表单区域-->
      <el-form ref="signupFormRef" :model="signupForm" :rules="signupFormRules" label-width="0px" class="signup_form">
        <!--        用户名-->
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user" v-model="signupForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <!--        密码-->
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" v-model="signupForm.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <!--        确认密码-->
        <el-form-item prop="repassword">
          <el-input prefix-icon="el-icon-lock" v-model="signupForm.repassword" type="password" placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <!--        按钮区域-->
        <el-form-item class="btns">
          <el-button type="primary" @click="signup">注册</el-button>
          <el-button type="info" @click="resetsignupForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "signup",
  data() {
    let checkpass = (rule, value, callback) => {
      if(value === '') {
        callback(new Error('请再次输入密码'))
      } else if(value !== this.signupForm.password) {
        callback(new Error('两次输入的密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      // 这是登录表单的数据绑定对象
      signupForm: {
        username: '',
        password: '',
        repassword: ''
      },
      signupFormRules: {
        // 验证用户名是否合法
        username: [
          {required: true, message: "请输入用户名！", trigger: 'blur'},
          {min: 3, max: 10, message: "长度必须在3到10个字符！", trigger: 'blur'}
        ],
        // 验证密码是否合法
        password: [
          {required: true, message: "请输入登录密码！", trigger: 'blur'},
          {min: 6, max: 15, message: "长度必须在6到15个字符！", trigger: 'blur'}
        ],
        repassword: [
          {validator: checkpass, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    resetsignupForm() {
      this.$refs.signupFormRef.resetFields()
    },
    signup() {
      this.$refs.signupFormRef.validate(async valid => {
        if(!valid) return;
        const {data: res} = await this.$http.post('signup', this.signupForm)
        console.log(res.code)
        if(res.code !== 1000) return this.$message.error('用户已存在')
        this.$message.success('注册成功!')
        // 将登录成功之后的token,保存到客户端的sessionStorage中
        console.log(res) // token位
        this.$router.replace('/login')
      })
    }
  }
}
</script>

<style scoped>
.signup_container {
  background: #2b4b6b;
  height: 100%;
}

.signup_box {
  width: 400px;
  height: 355px;
  background-color: white;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}

.btns {
  display: flex;
  justify-content: flex-end;
}

.signup_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
