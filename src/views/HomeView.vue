<template>
  <Sidebar/>
  <div class="welcome-wrapper">
    <div class="welcome">
      <h1>Welcome to vue-dashboard!</h1>
      <p>Explore the application via the sidebar</p>
      <img src="./../assets/welcome.svg"/>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar";
export default {
  name: "HomeView",
  components: {Sidebar}
}
</script>

<style scoped>
.welcome-wrapper {
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
}

.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10rem;
  background-color: white;
  padding: 5rem;
}
</style>
