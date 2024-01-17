<template>
  <div>
   <v-app>
    <SideBar @selectOption="onSelectOption"/>
    <v-main>
      <ImageGallery :isWithColor="isWithColor"/>
    </v-main>
   </v-app>
  </div>
</template>

<script setup>
  
  import SideBar from './components/SideBar.vue';
  import ImageGallery from './components/ImageGallery.vue';
  import { ref } from 'vue';
  
  const isWithColor = ref(true);
  const onSelectOption = (isColor) => {
    isWithColor.value = isColor;
  }
</script>
