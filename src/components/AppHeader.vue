<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'app.home' }">home</RouterLink>
      <RouterLink :to="{ name: 'app.foobar' }">foobar</RouterLink>
      <RouterLink :to="{ name: 'app.foobar.foo' }">foo</RouterLink>
      <RouterLink :to="{ name: 'app.foobar.bar' }">bar</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: "appLayout"
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-evenly;
}

.router-link-active {
  color: red;
}
</style>
