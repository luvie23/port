<script setup>
import Hero from './Hero.vue'
import About from './About.vue'
import Photography from './Photography.vue'
import Work from './Work.vue'

</script>

<template>
    <section class="relative h-full">
        <div style="" class="bg-[url('../assets/background.jpg')]  bg-cover bg-center h-screen">

            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-95">
      <!-- Gradient overlay -->
            </div>
            
            <!-- Child elements -->
            <div class="flex flex-col absolute inset-0 justify-center items-center text-white">
                <Hero></Hero>
                <About></About>
                <div class="flex h-48"></div>
                
            </div>
            
            
        </div>
        <div class="absolute h-screen w-full bg-gradient-to-b from-black to-gray-900">
            <Work></Work>
            <Photography></Photography>
        </div>
        
        
    </section>
</template>