<template>
  <div class="container">

  <header class="bg-white shadow-sm">
    <nav class="py-3 flex justify-between mx-auto px-5">
      <NuxtLink to="/" class="text-green-500">NuxtBlog</NuxtLink>

      <ul class="flex gap-4">

        <li class=""> <NuxtLink to="/">Home</NuxtLink> </li>
        <li class=""> <NuxtLink to="/about">About</NuxtLink> </li>
        <li class=""> <NuxtLink to="/products">Products</NuxtLink> </li>
       
      </ul>
    </nav>
  </header>

  <div class="mt-5 container px-5">
   <slot /> 
  </div> 
    
  </div>
</template>