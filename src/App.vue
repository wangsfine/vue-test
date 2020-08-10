<template>
  <div class="app">
    <div class="sidebar">
      <SideBar/>
    </div>
    <div class="navbar">
      <NavBar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import SideBar from './layout/SideBar';
import NavBar from './layout/NavBar';
export default {
  name: 'App',
  components: {
    SideBar,
    NavBar,
  }
}
</script>

<style scoped>
  .app {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 200px;
    padding-top: 60px;
    position: relative;
  }
  .sidebar {
      width: 200px;
      padding-top: 60px;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      height: 100%;
      box-sizing: border-box;
      background-color: yellowgreen;
    }
    .navbar {
      width: 100%;
      height: 60px;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      background-color: green;
    }
</style>>

