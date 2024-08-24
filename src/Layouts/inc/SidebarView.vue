<template>
    <div class="bg-dark text-white h-full flex flex-col justify-between duration-1000 ease-in-out shadow dark:shadow-slate-600"
        :class="[store.getters.isSidebarActive ? 'w-52' : 'w-16']">
        <div class="flex flex-col">
            <div class="flex items-center justify-center py-4"
                :class="[[store.getters.isSidebarActive ? 'px-4' : 'px-2']]">
                <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                    <h2 v-if="store.getters.isSidebarActive" class="text-2xl font-bold text-center">
                        {{ store.state.app.name }}
                    </h2>
                </transition>
                <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                    <h2 v-if="!store.getters.isSidebarActive" class="text-2xl font-bold text-center">
                        AM
                    </h2>
                </transition>
            </div>

            <nav class="flex-1 py-4 space-y-2" :class="[[store.getters.isSidebarActive ? 'px-4' : 'px-2']]">
                <ul>
                    <li>
                        <router-link to="/"
                            class="flex items-center p-3 rounded-md hover:bg-gray-700 relative duration-500 ease-in-out"
                            exact-active-class="bg-slate-600">
                            <!-- Note -->
                            <div v-if="store.getters.isSidebarActive"
                                class="w-1 h-11 -left-[4.3%] rounded-full bg-white absolute transition-transform duration-500 ease-in-out"
                                :class="[$route.name == 'home' ? 'translate-x-0' : '-translate-x-5']"></div>
                            <!-- End Note -->
                            <!-- Home Icon -->
                            <svg class="w-6 h-6 fill-none ease-in-out  duration-1000 "
                                :class="store.getters.isSidebarActive ? 'mr-2' : 'mr-0'" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
                                    class="stroke-white" stroke-width="1.5" stroke-linecap="round" />
                                <path
                                    d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                                    class="stroke-white" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                            <!-- Block Text -->
                            <p
                                :class="[store.getters.isSidebarActive ? 'delay-1000 block ease-linear ' : 'delay-1000 hidden']">
                                Home</p>
                        </router-link>
                    </li>
                   
                    <li>
                        <router-link to="/setting"
                            class="flex items-center p-3 rounded-md hover:bg-gray-700 relative duration-500 ease-in-out"
                            exact-active-class="bg-slate-600">
                            <!-- Note -->
                            <div v-if="store.getters.isSidebarActive"
                                class="w-1 h-11 -left-[4.3%] rounded-full bg-white absolute transition-transform duration-500 ease-in-out"
                                :class="[$route.name == 'setting' ? 'translate-x-0' : '-translate-x-5']"></div>
                            <!-- End Note -->
                            <!-- About Icon -->
                            <svg class="w-6 h-6 fill-none" viewBox="0 0 24 24"
                                :class="store.getters.isSidebarActive ? 'mr-2' : 'mr-0'"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 9.11011V14.8801C3 17.0001 3 17.0001 5 18.3501L10.5 21.5301C11.33 22.0101 12.68 22.0101 13.5 21.5301L19 18.3501C21 17.0001 21 17.0001 21 14.8901V9.11011C21 7.00011 21 7.00011 19 5.65011L13.5 2.47011C12.68 1.99011 11.33 1.99011 10.5 2.47011L5 5.65011C3 7.00011 3 7.00011 3 9.11011Z"
                                    class="stroke-white" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                    class="stroke-white" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <p
                                :class="[store.getters.isSidebarActive ? 'delay-1000 block ease-linear ' : 'delay-1000 hidden']">
                                Setting</p>

                        </router-link>
                    </li>

                    <!-- Block Video -->
                    <li>
                        <router-link to="/video"
                            class="flex items-center p-3 rounded-md hover:bg-gray-700 relative duration-500 ease-in-out"
                            exact-active-class="bg-slate-600">
                            <!-- Note -->
                            <div v-if="store.getters.isSidebarActive"
                                class="w-1 h-11 -left-[4.3%] rounded-full bg-white absolute transition-transform duration-500 ease-in-out"
                                :class="[$route.name == 'video' ? 'translate-x-0' : '-translate-x-5']"></div>
                            <!-- End Note -->
                            <!-- About Icon -->


                            <svg class="w-6 h-6 fill-none" :class="store.getters.isSidebarActive ? 'mr-2' : 'mr-0'"
                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.5617 7C19.7904 5.69523 18.7863 4.5 17.4617 4.5H6.53788C5.21323 4.5 4.20922 5.69523 4.43784 7"
                                    class="stroke-white"  stroke-width="1.5" />
                                <path
                                    d="M17.4999 4.5C17.5283 4.24092 17.5425 4.11135 17.5427 4.00435C17.545 2.98072 16.7739 2.12064 15.7561 2.01142C15.6497 2 15.5194 2 15.2588 2H8.74099C8.48035 2 8.35002 2 8.24362 2.01142C7.22584 2.12064 6.45481 2.98072 6.45704 4.00434C6.45727 4.11135 6.47146 4.2409 6.49983 4.5"
                                    class="stroke-white"  stroke-width="1.5" />
                                <path
                                    d="M14.5812 13.6159C15.1396 13.9621 15.1396 14.8582 14.5812 15.2044L11.2096 17.2945C10.6669 17.6309 10 17.1931 10 16.5003L10 12.32C10 11.6273 10.6669 11.1894 11.2096 11.5258L14.5812 13.6159Z"
                                    class="stroke-white"  stroke-width="1.5" />
                                <path
                                    d="M2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.2855 9.04765 22.0625 10.6294 21.6165 13.793L21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793Z"
                                    class="stroke-white"  stroke-width="1.5" />
                            </svg>
                            <p
                                :class="[store.getters.isSidebarActive ? 'delay-1000 block ease-linear ' : 'delay-1000 hidden']">
                                Video</p>

                        </router-link>
                    </li>
                    <!--  -->

                    <li>
                        <router-link to="/about"
                            class="flex items-center p-3 rounded-md hover:bg-gray-700 relative duration-500 ease-in-out"
                            exact-active-class="bg-slate-600">
                            <!-- Note -->
                            <div v-if="store.getters.isSidebarActive"
                                class="w-1 h-11 -left-[4.3%] rounded-full bg-white absolute transition-transform duration-500 ease-in-out"
                                :class="[$route.name == 'about' ? 'translate-x-0' : '-translate-x-5']"></div>
                            <!-- End Note -->
                            <!-- About Icon -->
                            <svg class="w-6 h-6 fill-none ease-in-out  duration-1000 "
                                :class="store.getters.isSidebarActive ? 'mr-2' : 'mr-0'" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path class="stroke-white" d="M12 17V11" stroke-width="1.5" stroke-linecap="round" />
                                <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" class="fill-white" />
                                <path
                                    d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                                    class="stroke-white" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                            <p
                                :class="[store.getters.isSidebarActive ? 'delay-1000 block ease-linear ' : 'delay-1000 hidden']">
                                About</p>

                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>

        <!-- Copy -->
        <p class="text-center text-slate-600 text-sm font-roboto-mono px-1 py-4 text-wrap ">
            @Copyright v.0.1.1
        </p>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const sidebarTitle = computed(() => {
    return store.getters.isSidebarActive ? store.state.app.name : 'SLI';
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}
</style>