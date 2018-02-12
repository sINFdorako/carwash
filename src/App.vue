<template>
  <div id="app">
    <banner />
    <navbar/>
    <router-view class="pos"/>
    <ownfooter/>
  </div>
</template>

<script>
import router from '@/components/router'
import navbar from '@/components/navbar'
import banner from '@/components/banner'
import ownfooter from '@/components/ownfooter'




export default {
  name: 'app',
  components: {router, navbar, banner, ownfooter}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: lightgrey;
  margin-top: 0em;
  margin-left: 5em;
  margin-right: 5em;
  min-height: 750px;
  /* background-image: url(assets/m4.jpg); */
}

.pos{
  min-height: 750px;
  padding: 1px;
}
</style>
