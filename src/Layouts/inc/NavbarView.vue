<template>
  <div class="w-full px-4 py-2 flex flex-row justify-between items-center dark:bg-darks bg-white shadow" >
    <!-- Menu Toggle -->
    <button @click="menu" class="p-1 rounded-full hover:bg-slate-600 active:bg-slate-500 ease-in-out duration-200">
      <div class="p-1 border rounded-full">
        <svg v-if="store.getters.isSidebarActive" class="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
        </svg>
        <svg v-else class="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
        </svg>
      </div>
    </button>

    <div class="flex flex-row items-center gap-2">
      <!-- Dark Mode Toggle -->
      <button @click="toggleDarkMode"
        class="p-1 rounded-full dark:hover:bg-slate-600 hover:bg-slate-100 active:bg-slate-200 dark:active:bg-slate-500 ease-in-out duration-200">
        <div class="p-1 border rounded-full">
          <svg v-if="isDarkMode" class="w-5 h-5 dark:fill-white fill-black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C16.418278,20 20,16.418278 20,12 C20,11.6778801 19.9809872,11.3583398 19.9433432,11.0425086 C19.1009521,11.6569885 18.0775585,12 17,12 C14.2385763,12 12,9.76142375 12,7 C12,5.9224415 12.3430115,4.89904787 12.9574914,4.05665678 C12.6416602,4.01901279 12.3221199,4 12,4 Z" />
          </svg>

          <svg v-else class="w-5 h-5 fill-none" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="6" class="dark:stroke-white stroke-black" stroke-width="1.5" />
            <path d="M12 2V3" class="dark:stroke-white stroke-black" stroke-width="1.5" stroke-linecap="round" />
            <path d="M12 21V22" class="dark:stroke-white stroke-black" stroke-width="1.5" stroke-linecap="round" />
            <path d="M22 12L21 12" class="dark:stroke-white stroke-black" stroke-width="1.5" stroke-linecap="round" />
            <path d="M3 12L2 12" class="dark:stroke-white stroke-black" stroke-width="1.5" stroke-linecap="round" />
            <path d="M19.0708 4.92969L18.678 5.32252" class="dark:stroke-white stroke-black" stroke-width="1.5" stroke-linecap="round" />
            <path d="M5.32178 18.6777L4.92894 19.0706" class="dark:stroke-white stroke-black" stroke-width="1.5" stroke-linecap="round" />
            <path d="M19.0708 19.0703L18.678 18.6775" class="dark:stroke-white stroke-black" stroke-width="1.5" stroke-linecap="round" />
            <path d="M5.32178 5.32227L4.92894 4.92943" class="dark:stroke-white stroke-black" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </div>
      </button>

      <!-- Notification Icon -->
      <div class="relative notification-drop">
        <div class="p-1 rounded-full dark:hover:bg-slate-600 hover:bg-slate-100 active:bg-slate-200 dark:active:bg-slate-500 ease-in-out duration-200 relative">
        <button @click="notificationpopup"  class="p-1 border rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 dark:fill-white fill-black" viewBox="0 0 24 24">
            <path
              d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z" />
          </svg>
        </button>
        <span
          class="px-[5px] bg-danger rounded-full text-sm font-poppins font-[600] text-white absolute left-5 -top-1">0</span>
      </div>


      <Notification v-if="isActiveNotfication"/>
      </div>

      <!-- Profile -->
      <div class="relative profile-dropdown">
        <div class="rounded-full dark:hover:bg-slate-600 hover:bg-slate-100 active:bg-slate-200 dark:active:bg-slate-500 p-1 duration-200" >
          <button @click="profilepopup" class="p-1 border rounded-full">
          <svg class="dark:fill-white fill-black w-5 h-5" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <path d="M18,17a7,7,0,1,0-7-7A7,7,0,0,0,18,17ZM18,5a5,5,0,1,1-5,5A5,5,0,0,1,18,5Z" />
            <path
              d="M30.47,24.37a17.16,17.16,0,0,0-24.93,0A2,2,0,0,0,5,25.74V31a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V25.74A2,2,0,0,0,30.47,24.37ZM29,31H7V25.73a15.17,15.17,0,0,1,22,0h0Z" />
          </svg>
        </button>
        </div>
        <Profile v-if="isActiveProfile" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

const isActiveProfile = ref(false);
const isActiveNotfication = ref(false);
const isDarkMode = computed(() => store.getters.isDarkMode);
const store = useStore();

import Profile from '../../components/ProfileView.vue'
import Notification from '../../components/NotificationView.vue'
// Menu toggle
const menu = () => {
  store.dispatch('menu');
}

// Profile toggle
const profilepopup = () => {
  isActiveProfile.value = !isActiveProfile.value;
  console.log(store.getters.isDarkMode)
}


const notificationpopup=()=>{
  isActiveNotfication.value = !isActiveNotfication.value
}

// Dark mode toggle
const toggleDarkMode = () => {
  
  store.dispatch('toggleDarkMode');

}

// Close profile when clicking outside
onMounted(() => {
  document.body.addEventListener('click', (e) => {
    if (!e.target.closest('.profile-dropdown')) {
      isActiveProfile.value = false;
    }

    if(!e.target.closest('.notification-drop')){
      isActiveNotfication.value = false
    }
  });
});

</script>
