<template>

    <div v-auto-animate class="flex items-center justify-center flex-col sm:flex-col md:flex-row">
    <button  class="!my-2 button flex bg-fuchsia-800 text-outline text-white" @click="randomize">Randomize <img width="40" src="/src/assets/dice.png" alt=""> </button> 
      <label for="minmax-range" class="!my-2 h-[64px] !text-zinc-200 text-outline text-center text-2xl flex items-center justify-center gap-4 rounded-xl button bg-fuchsia-800">{{renderSayisi}} <input id="minmax-range" v-model="renderSayisi" type="range" min="0" max="500" step="50" class="w-64 bg-lime-400 rounded-lg cursor-pointer"></label>
  
  </div>
  
  <div >
      <div class=" flex flex-wrap justify-center " v-auto-animate="{ duration: 1000 }">
        <div 
        :class="kelimeler[1]['sonuç']==1 ? '!bg-lime-500' : '!bg-indigo-700' && kelimeler[1]['sonuç'] == -1 ? '!bg-rose-700' : '!bg-indigo-900'" 
          class=" button relative w-64 h-64 box-border flex items-center justify-center  !text-zinc-200 text-outline "
          v-for="kelimeler in s"
          :key="kelimeler[0]"
          v-show="parseInt(kelimeler[0]) <= renderSayisi"
          
        >
         <br>{{kelimeler[1]["yardım"]==false ? kelimeler[1]["ing"] : kelimeler[1]["tr"]}}
         <div class="absolute top-1 left-1">{{kelimeler[0]}}</div>
        <div  class=" group absolute bottom-0 flex flex-row justify-between items-end p-2 w-full h-full ">
          <h1 @click="doğruSonuçlandır(kelimeler)" class="invisible  group-hover:visible hover:scale-110 rounded-lg cursor-pointer border-t-2 w-full border-zinc-900 m-2 hover:bg-green-500">True</h1>
          <h1 @click="yanlışSonuçlandır(kelimeler)" class="invisible group-hover:visible hover:scale-110 rounded-lg cursor-pointer border-t-2 w-full border-zinc-900 m-2 hover:bg-red-500 ">False</h1>
          <h1 @click="trGöster(kelimeler)" class="button z-50 absolute top-0 right-0 !bg-amber-500 !text-zinc-200 text-outline ">?</h1>
        </div>
      </div>
        
      </div>
    </div>
    
  </template>
  <script setup >
    import { ref } from "vue"
    import json from "/src/assets/besyuzIDLI.json"
    
    const renderSayisi = ref(50)
    const jsontext = ref([])
    jsontext.value=JSON.parse(JSON.stringify(json))
    const s = ref()
    var result = null
    result = Object.entries(jsontext.value);
      
      const doğruSonuçlandır = (e) =>{
        e[1]["sonuç"]=1
      }
      const yanlışSonuçlandır = (e) =>{
        e[1]["sonuç"]=-1
    }
    const trGöster=(kelime)=>{
      kelime[1]["yardım"]= !kelime[1]["yardım"]
    }
  
    
    s.value = result;  
    const randomize = () => {
      result = Object.entries(jsontext.value);
          s.value = result.sort(func);  
          function func(a, b) {  
            return 0.5 - Math.random();
          } 
    }
  </script>
  