<template>
  <div>
    <h1>foo title</h1>
    <FooTest ref="test"/>
  </div>
</template>

<script>
import FooTest from './FooTest.vue';
export default {
  name: 'Foo',
  components: {
    FooTest,
  },
  beforeCreate() {
    console.log('beforeCreate---------->');
  },
  beforeRouteEnter (from, to, next) {
    console.log('beforeRouterEnter', to, from, next);
    next();
  },
  beforeRouteUpdate(from, to, next) {
    console.log('beforeRouterUpdate', to, from, next);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave', to, from, next);
    next();
  },
  created() {
    console.log('created---->');
  },
  beforeMount() {
    console.log('beforeMount--->');
  },
  mounted() {
    console.log(this.$options.name, this.$refs.test);
    console.log('mounted---->');
  },
  beforeDestroy() {
    console.log('beforeDestroy--->');
  },
  destroyed() {
    console.log('destroyed---->');
  }
}
</script>

<style>

</style>