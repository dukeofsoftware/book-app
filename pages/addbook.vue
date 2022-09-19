<template lang="">
   
        <div class="m-[100px] ">
          <div class="container p-3 flex flex-col gap-3 shadow-lg">
              <label for="kitap" class=" flex px-3 mx-3 text-lg align-center justify-center">Kitap</label>
              <input type="text" class="m-3 p-3 border-2 shadow-sm" id="kitap" v-model="name" placeholder="Kitap İsmi" />
              <label for="sayfa" class=" flex px-3 mx-3 text-lg align-center justify-center">Sayfa</label>
              <input type="text" id="sayfa" class="m-3 p-3 border-2 shadow-sm" v-model="pages" placeholder="Sayfa Sayısı" />
              <NuxtLink  to="/" @click="ekle"  class=" text-center  bg-blue-500  duration-150 ease-in-out rounded hover:bg-blue-700 text-white p-3 m-3 text-lg border-2 border-blue-300">Ekle</NuxtLink>
            </div>
        </div>

</template>
<script>
export default {
    data() {
        return {
            name: "",
      pages: "",
      kitaplar: [],
        }
    },
    methods:{
        ekle() {

      this.kitaplar=JSON.parse(localStorage.getItem("kitaplar"));
      this.kitaplar.push({
        name: this.name,
        pages: this.pages,
      });
        window.localStorage.setItem(`kitaplar`, JSON.stringify(this.kitaplar));

    },

   
    }
}
</script>
<style lang="">
    
</style>