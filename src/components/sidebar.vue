<template>
  <div class="menu">
    <a href="/">
      <img class="logo" src="./../assets/icons/Logo.svg" alt="logo">
    </a>
    <img src="./../assets/icons/Line.svg" alt="sepline">
    <ul class="menu-list">
      <li class="menu-item">
        <router-link active-class="active" to="/DebitView">
          <a href="#" class="menu-link"><img src="./../assets/icons/Icon1.svg" alt="users"></a>
        </router-link>
      </li>
      <li class="menu-item">
        <router-link active-class="active" to="/">
          <a href="#" class="menu-link"><img src="./../assets/icons/Icon2.svg" alt="users"></a>
        </router-link>
      </li>
      <li class="menu-item">
        <router-link active-class="active" to="/">
          <a href="#" class="menu-link"><img src="./../assets/icons/Icon3.svg" alt="users"></a>
        </router-link>
      </li>
      <li class="menu-item">
        <router-link active-class="active" to="/">
          <a href="#" class="menu-link"><img src="./../assets/icons/Icon4.svg" alt="users"></a>
        </router-link>
      </li>
      <li class="menu-item">
        <router-link active-class="active" to="/">
          <a href="#" class="menu-link"><img src="./../assets/icons/Icon5.svg" alt="users"></a>
        </router-link>
      </li>
      <li class="menu-item">
        <router-link active-class="active" to="/">
          <a href="#" class="menu-link"><img src="./../assets/icons/Icon6.svg" alt="users"></a>
        </router-link>
      </li>
      <li class="menu-item">
        <router-link active-class="active" to="/">
          <a href="#" class="menu-link"><img src="./../assets/icons/Icon7.svg" alt="users"></a>
        </router-link>
      </li>
    </ul>
    <a href="#" class="options"><img src="./../assets/icons/Icon8.svg" alt="options"></a>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
}
</script>

<style scoped>

.menu {
  min-height: 100vh;
  width: 8rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  animation: hover 0.2s ease-out;
  margin: 2rem 0 2rem 0;
}

.menu-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 5rem 0 25rem 0;
}

.options {
  position: absolute;
  bottom: 2rem;
}

</style>
