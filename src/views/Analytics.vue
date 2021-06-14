<template>
  <div class="container">
    <h2>Resultados</h2>
     <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col" class=" meme">Link meme preferido</th>
            <th scope="col">Trocaria a vacina pelo filme shrek 5</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in results" v-bind:key="user">
            <td>{{user.nome}}</td>
            <td>{{user.meme}}</td>
            <td>{{user.vacOrShrek}}</td>
    
          </tr>
        </tbody>
      </table>

  </div>
</template>

<script>

import axios from 'axios'

 var resultados =[]
function getResultados(){

  axios.get('https://api.surveyjs.io/private/Surveys/getSurveyPublicResults/%7B1430ab26-ea5b-4f51-80df-ce6d26333393%7D').then(resp => {
 resultados = resp.data
  resultados=resultados.Data
  console.log(resultados);
});
console.log(resultados);
return resultados
}
console.log(getResultados())
// /* eslint-disable vue/no-unused-components */
export default {

  data(){
   
    return {   results: null};
  },
        mounted() {
          
  axios.get('https://api.surveyjs.io/private/Surveys/getSurveyPublicResults/%7B1430ab26-ea5b-4f51-80df-ce6d26333393%7D').then(resp => {
 this.results = resp.data
  this.results=this.results.Data
  console.log(this.results)
  })

 console.log(this.results)
}}
</script>

<style>
.meme{
  width: 50px ;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
