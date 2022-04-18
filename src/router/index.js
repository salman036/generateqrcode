import { createRouter, createWebHistory } from "vue-router";
import GenerateQrCode from "../components/GenerateQrCode.vue";
import AddAmount from "../components/AddAmount.vue";

const routes = [
  {
    path: "/",
    name: "AddAmount",
    component: AddAmount
  },
  {
    path: "/GenerateQrCode",
    name: "GenerateQrCode",
    component: GenerateQrCode
  },
  
];

const router = createRouter(
  {
  history: createWebHistory("/"),
  routes,

});


export default router;