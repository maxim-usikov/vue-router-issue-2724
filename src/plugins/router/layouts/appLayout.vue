<template>
  <main>
    <AppHeader/>

    <h3>appLayout</h3>
    <RouterView/>

    <pre align="left">{{ routesPaths }}</pre>
  </main>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "appLayout",

  components: {
    AppHeader
  },

  computed: {
    routesPaths() {
      const current = this.$router.resolve(
        { name: this.$route.name },
        this.$route
      );
      const app = this.$router.resolve({ name: "app" }, this.$route);
      const home = this.$router.resolve({ name: "app.home" }, this.$route);
      const foobar = this.$router.resolve({ name: "app.foobar" }, this.$route);
      const foo = this.$router.resolve({ name: "app.foobar.foo" }, this.$route);
      const bar = this.$router.resolve({ name: "app.foobar.bar" }, this.$route);

      return {
        current: current.resolved.fullPath,
        app: app.resolved.fullPath,
        "app.home": home.resolved.fullPath,
        "app.foobar": foobar.resolved.fullPath,
        "app.foobar.foo": foo.resolved.fullPath,
        "app.foobar.bar": bar.resolved.fullPath
      };
    }
  }
};
</script>