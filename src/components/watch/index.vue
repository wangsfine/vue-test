<template>
  <div>
      <watch-test :count="count" :name="name" :a="1" @click="() => {}">
          <template #default>
               <h1>{{ count }}</h1>
          </template>
          <template v-slot:test="data">
               <h1>scope slot{{ JSON.stringify(data) }}</h1>
          </template>
        </watch-test>
      <button @click="count++">click</button>
      <button @click="name='test'">click1</button>
  </div>
</template>

<script>
import WatchTest from './WatchTest';
export default {
    components: {
        WatchTest,
    },
    data() {
        return {
            count: 0,
            name: '',
        };
    },
    created() {
        console.log('parent created--->');
        // this.$nextTick(() => {
        //     this.count = 1;
        //     console.log('parent nexttick--->')
        // })
    },
    beforeMount() {
        console.log('parent beforeMount--->');
    },
    mounted() {
        console.log('parent mounted-->')
    },
    beforeUpdate() {
        console.log('parent beforeUpdate--->');
    },
    updated() {
        console.log('parent updated---->');
    },
    beforeDestroy() {
        console.log('parent beforeDestory--->');
    },
    destroyed() {
        console.log('parent destroyed---->');
    }
}
</script>

<style>

</style>