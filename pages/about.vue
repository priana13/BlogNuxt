<template>
  <div>
    <h2>Halaman About</h2>

    <p>{{ data }}</p>
  </div>
</template>

<script setup>
   
   const { data } = useFetch('/api/toko/?name=PrianaS')

</script>

<style lang="scss" scoped>

</style>