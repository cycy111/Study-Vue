<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/admin">管理</router-link>
    </nav>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

//自定义指令
// Vue.directive('foucus', {
//     inserted(el){
//         el.focus()
//     }
    
// });

export default {
  name: 'App',
  
}
</script>

<style scoped lang="scss">

a {
color: $color;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.icon {
            width: 1em;
            height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
        }
</style>

<style scoped>
/* #app >>> a {
color: blue} */

</style>
