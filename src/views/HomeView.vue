<template>
  <div class="min-h-screen  p-1 ">
    <!-- Header -->
    <header class="bg-pink-300 text-white p-4 rounded-md mb-6">
      <h1 class="text-3xl font-bold text-center">Home Page</h1>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto">
      <!-- Image Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div v-for="(image, index) in images" :key="index" class="bg-white rounded-lg overflow-hidden shadow-md">
          <img :src="image" alt="Image" class="w-full h-48 object-cover"/>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const images = [
  'https://via.placeholder.com/300?text=Image+1',
  'https://via.placeholder.com/300?text=Image+2',
  'https://via.placeholder.com/300?text=Image+3',
  'https://via.placeholder.com/300?text=Image+4',
  'https://via.placeholder.com/300?text=Image+5',
  'https://via.placeholder.com/300?text=Image+6',
  'https://via.placeholder.com/300?text=Image+7',
  'https://via.placeholder.com/300?text=Image+8',
  'https://via.placeholder.com/300?text=Image+9',
  'https://via.placeholder.com/300?text=Image+10',
];
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
