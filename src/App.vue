<template>
  <div id="app">
    <router-view class="view"></router-view>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
       
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/survey">formulário</router-link>
          </li>
           <li>
            <router-link to="/analytics">Tabela com respostas</router-link>
          </li>
        </ul>
      </div>
    </nav>

  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";

import "bootstrap/dist/css/bootstrap.css";

Vue.use(VueRouter);

const Home = () => import("./views/Home.vue");
const Survey = () =>
  import(/* webpackChunkName: "survey" */ "./views/Survey.vue");

const Analytics = () =>
  import(/* webpackChunkName: "creator" */ "./views/Analytics.vue");

var respostas 
const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Home, children: respostas },

    { path: "/survey", component: Survey, props: true},


    { path: "/analytics", component: Analytics }
  ],
});

export default {
  name: "app",
  router: router,
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
