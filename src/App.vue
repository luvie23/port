<script setup>

import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar></NavBar>
  <main>
    <Suspense>
        
      <router-view></router-view>
    </Suspense>
    
  </main>
</template>
