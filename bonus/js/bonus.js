new Vue({
    el: "#app",
    data: {
        emailList: [

        ],
        nameList: [

        ],
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) => {
                this.emailList.push(email.data.response);
            });
        
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/name').then((name) => {
                this.nameList.push(name.data.response);
            });
        }
    }
})