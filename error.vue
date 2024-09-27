<template>
    <div class="mx-auto container mt-24 text-center">
        <h2 class="text-3xl text-gray-500">{{ error.statusCode }} |Ups, Terjadi Kesalahan</h2>
    </div>
</template>

<script setup>
    defineProps(['error'])
</script>

<style lang="scss" scoped>

</style>