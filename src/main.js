// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import moment from 'moment-timezone';
import VueMoment from 'vue-moment';
import App from './App';

Vue.use(VueMoment, {
  moment,
});
Vue.config.productionTip = false;
Vue.filter('toUSD', value => `$${value}`);
Vue.filter('formatTZ', (date) => {
  const utcdate = moment.tz(date, 'UTC');
  const tz = moment.tz.guess();
  return utcdate.tz(tz).format('DD-MM-YYYY hh:mm:ss A z');
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
