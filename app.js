const app = Vue.createApp({
    // data, functions
    data() {
        return {
            nome: 'Cenas',
            data: '29-10-2021',
            link: 'www.google.pt',
            number: 1
        }
    },
    methods: {

    }
})
// Tell the DOM where to mount the app
app.mount('#app')