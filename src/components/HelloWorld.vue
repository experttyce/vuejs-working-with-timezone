<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <pre>
      {{ mydate | formatTZ  }}
    </pre>
    <p><span>{{ 351.99 | toUSD }}</span></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      mydate: '2018-09-06 17:02:50',
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    convertdate(date) {
      const utcdate = this.$moment.tz(date, 'UTC');
      const tz = this.$moment.tz.guess();
      return utcdate.tz(tz).format('DD-MM-YYYY hh:mm:ss A z');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
