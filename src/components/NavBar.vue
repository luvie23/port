<script setup>
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';


onMounted(() => {
    initFlowbite();
})
</script>


<template>
    <div class="flex flex-wrap  h-12 items-center px-10 bg-contessa-200 justify-between ">
        <router-link to="/" class="flex justify-center items-center">
            <img src="../assets/icon.png"  class="h-8"/>
            <span class="pl-2 font-roboto  font-extrabold">luvie.dev</span>
        </router-link>
        <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-dropdown" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-main md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                
            
                <a  href="#work" class=" py-2 pl-3 pr-4  hover:bg-amber-500 bg-contessa-200 rounded mb-2 z-20" >Work</a>

                <a  href="#photography" class=" py-2 pl-3 pr-4  hover:bg-amber-500 bg-contessa-200 rounded  mb-2 z-20">Photos</a>
            
            
            </ul>
        </div>
    </div>
</template>