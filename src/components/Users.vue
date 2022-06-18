<template>
<div class="container">  


<table class="table">

  <thead class="thead-dark">
    <tr>
      <th scope="id">ID</th>
      <th scope="sName">Ad</th>
      <th scope="sAge">Yaş</th>
      <th scope="sSchoolNum">Okul Numarası</th>
      <th scope="sFrom">Doğum Yeri</th>
      <th scope="sGender">Cinsiyet</th>
    </tr>   
  </thead>

  <tbody v-for="user in Users" :key="user.id">
    <tr>
      <th scope="row">{{user.id}}</th>
      <td>{{user.sName}}</td>
      <td>{{user.sAge}}</td>
      <td>{{user.sSchoolNum}}</td>
      <td>{{user.sFrom}}</td>
      <td>{{user.sGender}}</td>

    </tr>
    
  </tbody>

</table>



</div>
</template>



<script>

import axios from 'axios'  // axios import ettik compt.

export default {

data(){
    return{
        Users:null
    }
},

created: function() {
    axios.get("https://localhost:44332/api/Main").then((res) => {
        this.Users = res.data.Data;
       // console.log(this.name);
    });  
},






};

</script>








<style>
</style>