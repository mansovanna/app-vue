<template>
    <div class="flex h-screen font-roboto-flex dark:bg-dark">
      <!-- Block Sidebar -->
      <Sidebar />
      <!-- End Block Sidebar -->
  
      <div class="flex-1 flex flex-col">
        <!-- Block Navbar -->
        <Navbar />
        <!-- End Block Navbar -->
  
        <!-- Block Main -->
        <main class="flex-1 p-2  overflow-y-auto">
          <router-view />
        </main>
        <!-- End Block Main -->
      </div>
    </div>
  </template>
  
  <script setup>
  import Sidebar from './inc/SidebarView'
  import Navbar from './inc/NavbarView'
  </script>
  
  <style scoped>
  /* Add any additional styles if necessary */
  </style>
  