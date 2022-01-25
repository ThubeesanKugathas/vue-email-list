new Vue({
    el: "#app",
    data: {
        list: [
           
        ],
        counter: 0,
    },
    methods: {
        
    },
    mounted() {

        for (let i = 0; i < 10; i++) {

            const x = {};

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) => {
                x.email = email.data.response;
            });
            this.counter++;

            axios.get('https://flynn.boolean.careers/exercises/api/random/name').then((name) => {
                x.name = name.data.response;
            });
            this.counter++;

            this.list.push(x);

            console.log(this.counter);
        }
    }
})