<template>
    <div class="w-[70vh]  flex flex-col absolute top-12 right-0 bg-white  p-4 rounded-lg shadow-boxx dark:bg-gray-700">
      <!-- Header Style -->
      <div
        class="w-0 h-0 border-t-0 border-l-[20px] border-l-transparent border-b-[18px] border-b-white dark:border-b-dark border-r-[5px] border-r-transparent absolute -top-[14px] right-3">
      </div>
  
      <!-- Block Content: Notifications -->
      <div class="flex flex-col space-y-2 max-h-[85vh] overflow-y-auto">
        <div v-for="(notification, index) in notifications" :key="index" class="flex items-center p-2 border border-orange-300 rounded hover:bg-blue-50 transition">
          <div class="flex-shrink-0 p-2 bg-slate-100 text-white rounded-full">
            <!-- Notification Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-orange-500" fill="none" viewBox="0 0 24 24" >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">{{ notification.title }}</p>
            <p class="text-xs text-gray-500">{{ notification.time }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Sample notifications data
  const notifications = ref([
    { title: 'New message from John', time: '2 minutes ago' },
    { title: 'Server rebooted', time: '5 minutes ago' },
    { title: 'Scheduled meeting at 3 PM', time: '10 minutes ago' },
    { title: 'Password change request', time: '15 minutes ago' },
    { title: 'New comment on your post', time: '20 minutes ago' },
    { title: 'System update available', time: '25 minutes ago' },
    { title: 'New friend request', time: '30 minutes ago' },
    { title: 'Backup completed successfully', time: '35 minutes ago' },
    { title: 'New task assigned', time: '40 minutes ago' },
    { title: 'Reminder: Team meeting at 4 PM', time: '45 minutes ago' },
  ]);
  </script>
  