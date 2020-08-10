<template>
  <div>
      <FunctionalTest name="functional test" v-on:test="()=>{}"/>
  </div>
</template>

<script>
import FunctionalTest from './FunctionalTest';
export default {
    name: 'Functional',
    components: {
        FunctionalTest,
    }
}
</script>

<style>

</style>