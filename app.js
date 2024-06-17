const app = Vue.createApp({
    methods: {
        academicHistory(){
          window.location.href = 'academicHistory.html';
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

app.mount('#controls');