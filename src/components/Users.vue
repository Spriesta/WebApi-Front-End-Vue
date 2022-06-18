<template>

<div>
    HelloWorld
</div>

</template>




<script>

import axios from 'axios'  // axios import ettik compt.

export default {

data(){
    return{
     
        name:null
    }
},

created: function() {
    axios.get("https://localhost:44332/api/Main/1").then((res) => {
        this.name =res.data.Data[0].sName;
        console.log(this.name);
    });



        // const req = async () => {
        // const response = await axios.get('https://localhost:44332/api/Main/1')
        // console.log(response)
        // }
        // req() 


},










};
</script>





<style>
</style>