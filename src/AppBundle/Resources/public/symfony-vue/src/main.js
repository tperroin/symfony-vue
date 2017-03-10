// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
window.$ = window.jQuery = require('jquery')
require('./assets/semantic/dist/semantic.css')
require('./assets/semantic/dist/semantic.js')

import Vue from "vue";
import Hello from "./components/Hello";

Vue.config.delimiters = ['${', '}']

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {Hello}
})
