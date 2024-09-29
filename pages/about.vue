<template>
  <div>
    <h2>Halaman About</h2>

    <!-- <p>{{ data }}</p> -->

    <p>{{ data }}</p>
  </div>
</template>

<script setup>
   
  //  const { data } = useFetch('/api/toko/?name=PrianaS')

   const { data } = await useFetch('/api/produk/1')

</script>

<style lang="scss" scoped>

</style>