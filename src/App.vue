<template>
 <router-view></router-view>
 
 <button  class="darkModeButton" @click="toggleDark"></button>
</template>

<script setup>
    import { ref } from "@vue/reactivity"
        const counter = ref(0)
        const toggleDark=()=>{
            counter.value++
            if ( counter.value%2==0)
            document.querySelector("html").setAttribute("class","dark")
            else
            document.querySelector("html").setAttribute("class","")
        }
    </script>