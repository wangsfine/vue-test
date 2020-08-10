<template>
  <ul class="menu">
      <li 
        v-for="item of menus"
       :key="item.name" 
       :class="['menu-item', { active: item.name === $route.name}]"
       @click="$router.push(item)"
      >
          {{ item.name }}
      </li>
  </ul>
</template>

<script>
export default {
    name: 'SideBar',
    computed: {
        menus() {
            return this.$router.options.routes.map(({ name, path}) => {
                return { name, path};
            });
        },
    },
}
</script>

<style>
.menu {
    list-style-type: none;
    list-style: none;
    margin: 0;
    padding: 0;
}
.menu-item {
    margin-left: 0;
    text-align: center;
    font-size: 18px;
    padding: 10px;
    background-color: gray;
    cursor: pointer;
}
.menu-item:hover {
    background-color: teal;
}
.menu-item.active {
    background-color: teal;
}

</style>