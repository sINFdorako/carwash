<template>
  <div>  <b-navbar id="nav_bar" toggleable="md" type="dark" variant="dark">

<!--    <b-navbar-brand  id="navbrand" v-on:click="scrollTop" href="#"> </b-navbar-brand> -->

      <b-navbar-nav class="mr-auto">
        <b-nav-item class="hvr-underline-from-center" :to="{ path: '/citycard' }">
          <i class="fa fa-university" aria-hidden="true"></i>
          Something</b-nav-item>
        <b-nav-item class="hvr-underline-from-center" id="addcity" :to="{ path: '/addcity' }">
          <i class="fa fa-plus" aria-hidden="true"></i>
          Impressum</b-nav-item>

      </b-navbar-nav>

  </b-navbar>

  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
