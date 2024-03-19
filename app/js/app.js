
const { createApp, ref } = Vue
urls="https://leongon.github.io/GTobsequios/";

const app = createApp({
  data() {
    return {
        items:"",
        url:urls
    }
  },

  methods: {
    get_bd: async function(){
      console.log(urls)
        const  data= await axios.get(this.url+"bd.json")
        this.items=data.data
    }
  },

  created: function () {
    this.get_bd();
  },

  computed: {
    
  }
});



app.mount('#app')
