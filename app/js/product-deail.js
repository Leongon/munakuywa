


const { createApp, ref } = Vue
 const urlt = "https://leongon.github.io/GTobsequios/";
/*const urlt = "http://192.168.0.10//GTobsequios/"; */

const app = createApp({

    data() {
        return {
            items: "dsadsds",
            imgproduct:"",
            url:""
        }
    },

    methods: {
        get_bd: async function () {
            const data = await axios.get(urlt + "bd.json")
            this.items = data.data
            this.url=window.location.href
            console.log(urlt)
            const urls = new URL(window.location.href); // se crea el objeto URL, el cual almacena toda la URL
            const params = urls.searchParams; //se almacenan todos los parámetros en una variable
            const id = params.get("id"); // se utiliza el método GET para captar el valor del parámetro nombre

            console.log(id); // se muestra en consola el valor "Juan"


            console.log(data.data[id]);


            this.imgproduct=data.data[id];
            console.log(this.imgproduct.img)

            

        }

    },
    created: function () {
        this.get_bd();


    },
    computed: {

    }
});



app.mount('#app')
