<template>
  <div class="user">
    <h1>This is an user page</h1>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      console.log('hello,world')
    }
  }
}
</script>
