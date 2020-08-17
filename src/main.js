// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import { store } from './store/store' // store.js import
import VueSession from 'vue-session'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueLocalStorage from 'vue-localstorage'
import tuiChart from 'tui-chart'
Vue.use(tuiChart)
Vue.use(VueLocalStorage)
Vue.config.productionTip = false
var firebaseConfig = {
  apiKey: "AIzaSyAT5GtnLfBJB1dYm8wtBcptQJmMgtIIAjQ",
  authDomain: "vue-test-2dcd7.firebaseapp.com",
  databaseURL: "https://vue-test-2dcd7.firebaseio.com",
  projectId: "vue-test-2dcd7",
  storageBucket: "vue-test-2dcd7.appspot.com",
  messagingSenderId: "29983584889",
  appId: "1:29983584889:web:8392cc1257469a23649aa8",
  measurementId: "G-MX6RE5T0CJ"
};
var sessionOptions = {
  persist: true
}
Vue.use(VueSession, sessionOptions)
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
Vue.use(BootstrapVue)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
