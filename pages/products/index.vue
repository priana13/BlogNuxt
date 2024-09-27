<template>
    <div>
        <h2>List Produk</h2>

    <div class="grid grid-cols-4 gap-3"
     
    >

        <div  v-for="p in products">        

            <CardProduk :product="p" />

        </div>      
            

    </div>
        

    </div>
</template>

<script setup>

  const {data:products} = await useFetch('https://fakestoreapi.com/products')
   
   useHead({
    title: "Toko Online - List Produk"
   })

</script>

<style lang="scss" scoped>

</style>