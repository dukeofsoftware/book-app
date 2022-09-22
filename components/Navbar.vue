<template lang="">
    
        <div class=" bg-blue-500  p-2 ">
            <ul class="flex justify-center items-center p-2 ">
                <li class="text-center text-2xl text-white">
                    <NuxtLink to="/duke-book/" class="hover:text-black transition duration-300 ease-in-out">Book List</NuxtLink>
                   
                </li>
                <li>
                    <NuxtLink to="/duke-book/addbook" class="hover:text-black absolute top-2 right-7  p-1 m-2 text-lg  text-white 
                    transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-110">Ekle</NuxtLink>
                </li>
            </ul>
           
          
           
        </div>
     
</template>
<script>
export default {
     data() {
        return {
            name: "",
      pages: "",
        }
     },
methods:{

}
}
</script>
<style lang="">
    
</style>