<template>
  <div class="total-amount-container">
    <div class="add-total-price">Total</div>

    <div class="input-container">
      <div class="input-container-dollar">$</div>
      <input v-model="formValue.amount" class="input-container-input" type="number" placeholder="00" />
    </div>
    
    <button class="checkout-btn-container">
      <router-link  class="checkout-btn" :to="{name: 'GenerateQrCode', params:{value : formValue.amount}}" >Check out</router-link>
    </button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "AddAmount",
  data(){
    // console.log("")
    return {
      formValue:{
        amount: ""
      }
    }
  }
}
</script>

<style>
.add-total-price{
  color: white;
  font-size: 30px;
  padding-top: 40px;
  margin-bottom: 40px;
}
.total-amount-container{
  height: 100vh;
  width: 100%;
  background: black;
}

.input-container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: auto;
}

.input-container-dollar{
  color: white;
  font-size: 18px;
  margin-right: 10px;
}

.input-container-input{
  background: black;
  border: none;
  outline: none;
  color: white;
  font-size: 18px;
  
}
.input-container-input::placeholder{
  color: lightgray;
  
}

.checkout-btn{
  width: 100%;
  text-decoration: none;
  color: black;
  font-size: 18px;
}

.checkout-btn-container{
  background: #E0CBFB;
  width: 25%;
  margin-top: 40px;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 8px;
  margin-top: 80px;
}

@media only screen and (max-width: 700px) {
  .checkout-btn-container{

    width: 50%;
  }

  .input-container{
    width: 250px;
  }
}
</style>
