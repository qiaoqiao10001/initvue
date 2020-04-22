import Vue from 'vue';
import VueRouter from 'vue-router'
import Home from './src/home.vue'

let router = new VueRouter()
router.addRoutes([
  { path: '/', component: Home }
])
new Vue({
  router:router,
  el: '#app',
  render: (c) => {
		return c(Home);
	},
})