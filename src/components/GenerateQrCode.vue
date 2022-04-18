<template>
  <button @click="goBack" class="back-btn">
    <div class="back-btn-title">Back</div>
  </button>
  <div class="qr-code-heading">Scan</div>
  <div class="param-value">{{$route.params.value}}</div>  
  <div class="qrcode-cotainer">
    <qrcode-vue :value="$route.params.value" size="280" level="H" />
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";
export default {
 name: 'GenerateQrCode',
 components:{
   QrcodeVue
 },
 methods:{
    goBack(){
      this.$router.go(-1)
    },
 }
}
</script>

<style>

.qr-code-heading{
  font-size: 40px;
  color: white;
  margin-top: 20px;
}

.param-value{
  color: white;
  font-size: 20px;
  margin-bottom: 30px;
  margin-top: 30px;
}
.qrcode-cotainer{
  border: 10px solid #E0CBFB;
  width: 280px;
  margin: auto;
}

.back-btn{
  width: 100px;
  border: none;
  outline: none;
  border-radius: 2px;
  padding: 5px;
}

.back-btn-title{
  font-size: 18px;
  
}

@media only screen and (max-width: 768px) {
  .qr-code-heading{
    font-size: 30px;
  }
  .param-value{
    font-size: 16px;  
  }
}
</style>