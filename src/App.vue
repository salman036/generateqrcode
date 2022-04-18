<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <div>Qr code </div> -->
  <div class="main-bg">
   
    <router-view />
  </div>

</template>

<script>

export default {
  name: 'App',
  data() {
    return {
    jobs: [],
    clicked: false,
    DATA : [
      {
        id: "1",
        name: "salman"
      },
      {
        id: "2",
        name: "Hamza"
      },
      {
        id: "3",
        name: "Talhs"
      }
    ]
    }
  },
  methods:{
    redirect(){
      this.$router.push({name: "Hello"})
    },
    goBack(){
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    },
    setRoutedCheck(){
      this.clicked = true
    }
  },

  mounted(){
   fetch().then(resp => {
     this.jobs = resp
   })
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: black;
  height: 100vh;
  width: 100%;
  text-align: center;
  padding-top: 40px;
}

body{
  margin: 0;
  padding: 0;
}

.add-amount-container{
  background: #E0CBFB;
  width: 25%;
  border-radius: 8px;
  padding: 10px;
  border: none;
  outline: none;
  color: white;
}
.add-amount-title{
  color: white;
  font-size: 30px;
}
</style>
