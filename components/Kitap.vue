<template>
    <div class=" bg-sky-800 rounded relative border-2 border-black p-3 shadow-lg m-3 h-48 	"  >
        <div class="flex flex-col justify-center items-center">
            <h1 class="text-2xl text-white">{{kitap.name}}</h1>
            <h1 class="text-xl  pt-3 text-white">{{kitap.pages}}</h1>
        </div>
        <button  @click="$emit('sil',kitap.name)" class=" absolute p-[5px] bottom-5 left-0  w-full border-2 rounded border-black bg-red-500 text-white ease-in-out hover:-translate-y-1">Sil</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props:["kitap"],
    methods:{
        /* sil(name){
            this.kaydedilenKitaplar = JSON.parse(localStorage.getItem("kitaplar"));
            this.kaydedilenKitaplar=this.kaydedilenKitaplar.filter(kitap =>{
                return kitap.name!==name;
            })
            window.localStorage.setItem(`kitaplar`, JSON.stringify(this.kaydedilenKitaplar));
            this.kaydedilenKitaplar = JSON.parse(localStorage.getItem("kitaplar"));
            
        } */
    }
}
</script>
<style>
    
</style>