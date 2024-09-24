<template>
    <div>
     <p>Detail produk untuk id : {{ id_produk }}</p>
    </div>
</template>

<script setup>
   const { id_produk } = useRoute().params

    definePageMeta({
        layout : 'products'
    })


</script>

<style lang="scss" scoped>

</style>