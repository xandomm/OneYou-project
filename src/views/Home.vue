<template>
<div class="home">
<div class='first'>
  <div class="container"> <h1 >Você já sonhou com este homem?</h1> <br/>
<br/>
<hr class="verde"/>
</div>

 
  <img id="profile" alt="Vue logo" src="../imagens/profile.jpeg" />
  </div> 
  <HelloWorld msg="Sejam bem-vindos a minha apresentação!"/>


  <div className="container d-grid gap-2">
  <a class="btn intro"  href="/survey"><h2 class="b-font">Clique aqui para realizar o formulário</h2></a>
 <br>
 <br>
</div></div>
</template>


<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style>
.intro{
  background: #1AB394;

  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#profile{
   border: 10px solid #1AB394;
   height: 70vh;
  background: #1AB394
}
.b-font{
  color: #f2f2f2
}
.verde{
  color: #1AB394
}
.first {
  height:100vh
}
</style>

