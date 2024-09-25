<template>
    <div>
        <h2>List Produk</h2>

    <div class="grid grid-cols-4 gap-3"
     
    >

        <div  v-for="p in products">        

            <div class="p-2 shadow">
                <!-- <img src="{{ p.image }}" alt=""> -->
                <h2 class="my-2 font-bold"> <span>#{{ p.id }}</span> {{ p.title }}k</h2>
                <p class="mb-2">{{ p.category }}</p>
                <NuxtLink :to="`/products/${p.id}`" class="bg-green-600 px-4 py-1 rounded-lg text-white"> Add To Cart </NuxtLink>
                

            </div> 
        </div>      
            

    </div>
        

    </div>
</template>

<script setup>

  const {data:products} = await useFetch('https://fakestoreapi.com/products')
   
</script>

<style lang="scss" scoped>

</style>