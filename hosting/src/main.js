import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueFirestore from 'vue-firestore';
import firebaseConfig from './firebaseConfig';
import './registerServiceWorker';
import { firebase } from '@firebase/app';
import '@firebase/firestore';
import Meta from 'vue-meta';

Vue.config.productionTip = false;

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

Vue.use(VueFirestore);
Vue.use(Meta);
export const db = firebaseApp.firestore();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
