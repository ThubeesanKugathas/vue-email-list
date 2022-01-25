new Vue({
    el: "#app",
    data: {
        list: [
           
        ],
        counter: 0,
        active: false,
    },
    methods: {
        showEmail() {
            this.active = !this.active;
        }
    },
    mounted() {

        for (let i = 0; i < 10; i++) {

            const x = {
                name: '',
                email: '',
            };
            this.list.push(x);

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) => {
                this.list[i].email = email.data.response;
                this.counter++;
            });

            axios.get('https://flynn.boolean.careers/exercises/api/random/name').then((name) => {
                this.list[i].name = name.data.response;
                this.counter++;

            });


        }
    }
})