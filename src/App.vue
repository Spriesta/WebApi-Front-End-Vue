<template>
<div class="container">

  <h1>My First Vue Project </h1>
<button type="button" class="btn btn-primary">Primary</button>


 <Users/> <!-- componenti ekledik html kısmına -->
 
</div>


</template>

<script>
import Users from './components/Users'  // ilk olarak componenti import ettik

export default {
  name: 'App',
  components: {
    Users  // adına göre ekledik
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
