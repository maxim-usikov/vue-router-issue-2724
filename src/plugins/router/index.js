import Vue from "vue";
import Router from "vue-router";
import appLayout from "./layouts/appLayout.vue";
import foobarLayout from "./layouts/foobarLayout.vue";
import home from "./views/home.vue";
import foo from "./views/foo.vue";
import bar from "./views/bar.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/app",
      component: appLayout,
      children: [
        {
          path: "",
          name: "app",
          redirect: { name: "app.foobar" }
        },
        {
          path: "home",
          component: home,
          name: "app.home"
        },
        {
          path: "foobar",
          component: foobarLayout,
          // name: "app.foobar",
          // NOTE:
          //  foobar got active class only on foo view, instead of
          //  both foo and bar views.
          //  [issue](https://github.com/vuejs/vue-router/issues/2724)
          //  [PR](https://github.com/vuejs/vue-router/pull/2772)
          // IMPORTANT:
          //  dont use redirect on parent components, just add empty path
          //  child with redirect
          // redirect: { name: "app.foobar.foo" },
          children: [
            {
              path: "",
              component: foo,
              name: "app.foobar",
              redirect: { name: "app.foobar.foo" }
            },
            {
              path: "foo",
              component: foo,
              name: "app.foobar.foo"
            },
            {
              path: "bar",
              component: bar,
              name: "app.foobar.bar"
            }
          ]
        }
      ]
    },
    { path: "*", redirect: { name: "app" } }
  ]
});

export default router;
