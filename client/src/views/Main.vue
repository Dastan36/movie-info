<template>
  <div class="registe">
    <h1>This is an about page</h1>
    <h2>{{this.$store.state.name}}</h2>
    <el-button type="primary" @click="registeAccess">授权注册</el-button>
    <a :href="'/api/oauth/getClient?clientName='+'movie'">
      <el-button type="primary" round>第三方登录</el-button>
    </a>
    <!-- <router-link to="/api/oauth/getClient">第三方登录</router-link> -->
  </div>
</template>
<script>
export default {
  name: 'registe',
  data () {
    return {
    }
  },
  methods: {
    registeAccess () {
      let clientInfo = {
        clientName: 'movie',
        clientPath: 'http://www.movie.com',
        redirectURI: 'http://localhost:3000/oauth/redirect'
      }
      console.log(this.$cookie.get('token'))
      this.$store.dispatch('Main/registeAccess', clientInfo).then(data => {
        // console.log(data)
        this.$message({
          message: data.data.mess,
          type: 'success'
        })
      })
    }
  }
}
</script>
