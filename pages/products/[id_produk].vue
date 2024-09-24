<template>
    <div>
     <p>Detail produk untuk id : {{ id_produk }}</p>
    </div>
</template>

<script setup>
   const { id_produk } = useRoute().params
</script>

<style lang="scss" scoped>

</style>