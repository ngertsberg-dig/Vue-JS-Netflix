var app1 = new Vue({
  el:'#app',
  data:{
    posts:[],
    errors:[],
    imageURL:''
  },
  created(){
    axios.get('https://scotch-mvplayer-api.herokuapp.com/api/v1').then(response => {
      this.posts = response.data;
    }).catch(e =>{
      this.errors.push(e);
    })
  },
  methods:{
    changeMovie(e){
    $("iframe").attr('src',$(e.target).data('video-url'));
    }
  }
})
