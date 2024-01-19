const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            message: 'Hello world!',
            img: 'https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/Boolean/original.png?1623187562'
        }
    }
});
app.mount('#root'); 