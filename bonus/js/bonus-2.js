new Vue({
    el: "#app",
    data: {
        list: [
            
        ],
        counter: 0,
        name: '',
        email: '',
    },
    methods: {
        
    },
    mounted() {

        let name = this.name;
        let email = this.email;

        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) => {
                this.email = email.data.response;
            });
            this.counter++;
            axios.get('https://flynn.boolean.careers/exercises/api/random/name').then((name) => {
                this.name = name.data.response;
            });
            this.counter++;

            const oggetto = {
                name,
                email
            };

            this.list.push(oggetto);
        }
    }
})