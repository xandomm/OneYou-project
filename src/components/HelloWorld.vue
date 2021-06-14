<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
    <h3>Brincadeiras à parte, este sou eu, Alexandre Machado Gomes, desenvolvedor fullstack. E neste meu Primeiro contato com Vue, venho entregar o Projeto requisitado pela OneYou como processo seletivo!<br> 
<br/> 
Realizei meu formulário utilizando o vue CLI, bootstrap e <a href="https://surveyjs.io/">https://surveyjs.io/</a>. Tudo foi feito com muito carinho, e o formulário se baseia na possibilidade de uma amizade comigo! As respostas serão avaliadas por mim no final do Processo Seletivo. <br>
 <br>Espero que tenham gostado!<br><br>
</h3>
</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
