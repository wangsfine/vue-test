
<template>
  <div>
      <slot></slot>
      <slot name="test" v-bind:test="innerCount"></slot>
      <div id='test'>
          innerCount: {{ innerCount }}<br>
          {{ test }}
      </div>
  </div>
</template>

<script>
export default {
    name: 'WatchTest',
    customOption: 'true',
    props: {
        count: {
            type: Number,
            default: -1,
        },
        name: {
            type: String,
            default: '',
        }
    },
    data() {
        console.log('child data------------>');
        return { innerCount: -1};
    },
    computed: {
        test() {
            console.log('child computed--->');
            return this.count + 1;
        }
    },
    watch: {
        count: {
            handler(val, oldVal) {
                console.log('watch outerCount--->', val, oldVal);
            },
            // immediate: true,
        },
        innerCount: {
            handler(val, oldVal) {
                console.log('watch innerCount-->', val, oldVal);
            }
        }
    },
    beforeUpdate() {
        // console.log(this.$slots, this.$children);
    },
    beforeCreate() {
        /* eslint-disable */
        console.log('child beforecreate-->', this.$scopedSlots, this.$slots);
    },
    created() {
        console.log('child created----->' , this.$scopedSlots, this.$slots);
    },
    beforeMount() {
        console.log('child beforeMount--->', this.$scopedSlots, this.$slots);
    },
    mounted() {
        console.log('child mounted--->', this.$scopedSlots, this.$slots)
    },
    beforeUpdate() {
        console.log('child beforeUpdate--->');
    },
    updated() {
        console.log('child updated---->');
    },
    beforeDestroy() {
        console.log('child beforeDestory--->');
    },
    destroyed() {
        console.log('child destroyed---->');
    },
    //  render() {
    //     console.log('child render---->');
    //     return (<div></div>);
    // }
}
</script>

<style>

</style>