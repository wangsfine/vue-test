<template functional>
  <div> 
    {{ props.name }}
    {{ name }}
    {{ JSON.stringify(props) }}
    {{ Object.keys(listeners) }}
  </div>
</template>

<script>
export default {
    name: 'FunctionTest',
    
    props: {
        name: {
            type: String,
            default: '',
        }
    },
    created() {
      console.log(this, 'functional--->');
    },
}
</script>

<style>

</style>