<template>
  <div class="container mx-auto">

  <header class="bg-white shadow-sm">
    <nav class="py-3 flex justify-between mx-auto px-5">
      <NuxtLink to="/" class="text-green-500">NuxtBlog</NuxtLink>

      <ul class="flex gap-4">

        <li class=""> <NuxtLink to="/" class="hover:text-green-500">Home</NuxtLink> </li>
        <li class=""> <NuxtLink to="/about" class="hover:text-green-500">About</NuxtLink> </li>
        <li class=""> <NuxtLink to="/products" class="hover:text-green-500">Products</NuxtLink> </li>
       
      </ul>
    </nav>
  </header>

  <div class="mt-5 container px-5">
   <slot /> 
  </div> 
    
  </div>
</template>