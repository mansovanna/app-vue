<template>
  <div class="p-2">
    <header class="bg-green-500 dark:text-white p-4 text-center">
      <h1 class="text-xl font-bold">Video Gallery</h1>
    </header>
    <main class="mt-4 p-4 rounded-lg dark:text-white shadow-md">
      <div class="grid grid-cols-3 gap-4">
        <div
          class="relative overflow-hidden rounded-lg border border-gray-300 dark:border-gray-600"
          v-for="video in videos"
          :key="video.url"
        >
          <a :href="video.url" target="_blank" class="block w-full h-full">
            <img
              :src="getThumbnailUrl(video.url)"
              alt="Video Thumbnail"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold">
              Watch
            </div>
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

// Reactive array of videos
const videos = reactive([
  { url: 'https://youtu.be/mi8ElftbZaY?si=QOAlrPz6WUrxKMbL' },
  { url: 'https://youtu.be/QCWmZeg4Ek0?si=GM-vPrGqXVMRTG_Z' },
  { url: 'https://youtu.be/-F3e2yFB5Yo?si=gcAYuO3s_Se-hB5W' },
  { url: 'https://youtu.be/rwOUwgjk0Co?si=BK2w2MV84JG5J5Ns' },
]);

// Function to generate YouTube thumbnail URL
function getThumbnailUrl(videoUrl) {
  const videoId = videoUrl.split('v=')[1]?.split('&')[0];
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}
</script>

<style scoped>
/* Additional styles can be added here if needed */
.video-thumbnail {
  position: relative;
  overflow: hidden;
}
.video-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.video-thumbnail .overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 1.5rem;
}
</style>
