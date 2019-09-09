<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      let name = this.form.name
      let password = this.form.password
      // console.log(name + password)
      let queryParam = {
        name: name,
        password: password
      }
      // console.log(queryParam)
      this.$store.dispatch('Login/loginSystem', queryParam).then((data) => {
        // let name = data.data.user.name
        // let password = data.data.user.password
        // let token = data.data.token
        sessionStorage.setItem('name', name)
        console.log(sessionStorage.getItem('name'))
        // this.$store.dispatch('setName', sessionStorage.getItem('name'))
        // var exdate = new Date() // 获取时间
        // exdate.setTime(exdate.getTime() + 60 * 60 * 1000)
        // window.document.cookie = 'name=' + name + ';expires=' + exdate.toGMTString()
        // window.document.cookie = 'password=' + password + ';expires=' + exdate.toGMTString()
        // window.document.cookie = 'token=' + token + ';expires=' + exdate.toGMTString()
        this.$router.push({ 'name': data.path })
      })
    }
  }
}
</script>
