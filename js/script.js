new Vue({
    el: "#app",
    data: {
        emailList: [

        ]
    },
    methods: {
        getEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) => {
                if (!this.emailList.includes(email.data.response)) {
                    this.emailList.push(email.data.response);
                } else {
                    this.getEmail();
                }
            })
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            this.getEmail();
        }
    }
})