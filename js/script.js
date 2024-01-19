const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            message: 'Hello world!',
        }
    }
});
app.mount('#root'); 