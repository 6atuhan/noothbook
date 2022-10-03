import { createRouter, createWebHashHistory} from "vue-router";    
 const routes=[ {                                                  
    path:'/',                                                 
    name:'Home',                                              
    component: ()=> import ("/src/router/views/HomePage.vue")       
},{                                                  
    path:'/deneme',                                                 
    name:'Deneme',                                              
    component: ()=> import ("/src/router/views/DenemePage.vue")       
}]                                                            
 const router =createRouter({                                      
     history:createWebHashHistory(),                               
     routes,                                                       
 })                                                                
 export default router; 