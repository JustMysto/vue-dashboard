<template>
  <sidebar/>
  <div class="notFound-wrapper">
    <div class="notFound">
      <h1>Nothing found :(</h1>
      <img src="./../assets/404.svg"/>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar";
export default {
  name: "404",
  components: {Sidebar}
}
</script>

<style scoped>
.notFound-wrapper {
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
}

.notFound {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
