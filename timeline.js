const app = Vue.createApp({
    methods: {
        bjss(){
          window.location.href = 'bjssHistory.html';
        },
        professionalHistory(){
          window.location.href = 'professionalHistory.html';
        },
        blog(){
          window.location.href = 'https://medium.com/@dowaj/';
        },
        personalProjects(){
          window.location.href = 'https://github.com/DocDoWell';
        },
    }
});

app.mount('#timeline');