<template>
    <div>
    <h2 class="font-bold"> #{{ product.id }} - {{ product.title }}</h2>
     <p>{{ product.description }}</p>

     <button type="p-2 font-bold"> Rp.  {{ product.price }} </button>
    </div>
</template>

<script setup>
   const { id_produk } = useRoute().params

   const {data : product} = await useFetch('https://fakestoreapi.com/products/' + id_produk , {key: id_produk})

</script>

<style lang="scss" scoped>

</style>