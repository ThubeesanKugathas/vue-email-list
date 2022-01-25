new Vue({
    el: "#app",
    data: {
        list: [
            {
                email: '',
                name: '',
            },
            {
                email: '',
                name: '',
            },
            {
                email: '',
                name: '',
            },
            {
                email: '',
                name: '',
            },
            {
                email: '',
                name: '',
            },
            {
                email: '',
                name: '',
            },
            {
                email: '',
                name: '',
            },
            {
                email: '',
                name: '',
            },
            {
                email: '',
                name: '',
            },
            {
                email: '',
                name: '',
            },
        ],
        counter: 0,
    },
    methods: {
        
    },
    mounted() {

        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) => {
                this.list[i].email = email.data.response;
            });
            this.counter++;


            axios.get('https://flynn.boolean.careers/exercises/api/random/name').then((name) => {
                this.list[i].name = name.data.response;
            });
            this.counter++;

            console.log(this.counter);
        }
    }
})