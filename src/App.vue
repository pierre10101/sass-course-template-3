<template>
  <div class="container" id="app">
    <div id="nav">
      <Navigation />
    </div>
    <router-view />
  </div>
</template>
<script>
import Navigation from "@/components/NavigationComponent";
export default {
  components: {
    Navigation
  }
};
</script>
