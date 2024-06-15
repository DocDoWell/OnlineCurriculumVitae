const app = Vue.createApp({
    methods: {
        academicHistory(){
            this.$router.push("/academicHistory");
        }
    }
});

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/academicHistory",
        component: AcademicHistory,
      }
    ],
  });
  

app.use(router);

app.mount('#controls');