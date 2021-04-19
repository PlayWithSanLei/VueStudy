<template>
  <div id="app">
    <!--    <router-link to="/home" tag="button" >首页</router-link>-->
    <!--    <router-link to="/about" tag="button" >关于</router-link>-->
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->
<!--    <router-link to="/login" tag="button">登录</router-link>-->
<!--    <router-link :to="'/user/' + userId" tag="button">用户</router-link>-->
<!--    <router-link :to="{path: '/profile', query: {name: 'zhanghao', age: 22, height: 171}}" tag="button">档案</router-link>-->
    <router-view></router-view>

  </div>
</template>
<script>
export default {
  name: 'App',
  methods: {
    homeClick() {
      this.$router.replace('/home')
    },
    aboutClick() {
      this.$router.replace('/about')
    }
  },
  data() {
    return {
      userId: 'zhanghao',

    }
  }
}

</script>
<style>
.router-link-active {
  color: #ff0000;
}

.active {
  color: #00ff00;
}
</style>
