<template>

    

   <div>
     <div class="grid grid-cols-3 my-bg  min-h-screen	">
      <Kitap  :kitap="kitap" v-for="(kitap,i) in kaydedilenKitaplar" @sil="sil" :key="i">
      </Kitap>
     </div>
   </div>


</template>
<script>
export default {
  data() {
    return {
   
      kaydedilenKitaplar: [{name:"Harry Potter",
    pages:"400"
    }],
    };
  },
  methods: {
   
    sil(name){
            this.kaydedilenKitaplar=this.kaydedilenKitaplar.filter(kitap =>{
                return kitap.name!==name;
            })
            window.localStorage.setItem(`kitaplar`, JSON.stringify(this.kaydedilenKitaplar));
            this.kaydedilenKitaplar = JSON.parse(localStorage.getItem("kitaplar"));
 
  },

},
mounted() {
  window.localStorage.getItem(`kitaplar`, JSON.stringify(this.kaydedilenKitaplar));

      this.kaydedilenKitaplar = JSON.parse(localStorage.getItem("kitaplar"));
  },};
</script>
<style lang=""></style>
