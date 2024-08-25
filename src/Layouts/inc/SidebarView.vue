<template>
    <div class="bg-dark text-white h-full flex flex-col justify-between duration-1000 ease-in-out shadow dark:shadow-slate-600"
        :class="[store.getters.isSidebarActive ? 'w-52' : 'w-16']">
        <div class="flex flex-col">
            <div class="flex items-center justify-center py-4"
                :class="[[store.getters.isSidebarActive ? 'px-4' : 'px-2']]">
                <transition name="fade">
                    <h2 v-if="store.getters.isSidebarActive" class="text-2xl font-bold text-center">
                        {{ store.state.app.name }}
                    </h2>
                </transition>
                <transition name="fade">
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
                                class="w-1 h-11 -left-[5.5%] rounded-full bg-white absolute transition-transform duration-500 ease-in-out"
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

                    <!-- Shop -->
                    <li>
                        <router-link to="/shop"
                            class="flex items-center p-3 rounded-md hover:bg-gray-700 relative duration-500 ease-in-out"
                            exact-active-class="bg-slate-600">
                            <!-- Note -->
                            <div v-if="store.getters.isSidebarActive"
                                class="w-1 h-11  -left-[5.5%] rounded-full bg-white absolute transition-transform duration-500 ease-in-out"
                                :class="[$route.name == 'shop' ? 'translate-x-0' : '-translate-x-5']"></div>
                            <!-- End Note -->
                            <!--  Icon -->
                            <svg class="w-6 h-6 fill-none ease-in-out  duration-1000 "
                                :class="store.getters.isSidebarActive ? 'mr-2' : 'mr-0'" viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg">

                                <g fill="none" fill-rule="evenodd">

                                    <path d="m0 0h32v32h-32z" />

                                    <path
                                        d="m19 1.73205081 7.8564065 4.53589838c1.8564064 1.07179677 3 3.05255889 3 5.19615241v9.0717968c0 2.1435935-1.1435936 4.1243556-3 5.1961524l-7.8564065 4.5358984c-1.8564065 1.0717968-4.1435935 1.0717968-6 0l-7.85640646-4.5358984c-1.85640646-1.0717968-3-3.0525589-3-5.1961524v-9.0717968c0-2.14359352 1.14359354-4.12435564 3-5.19615241l7.85640646-4.53589838c1.8564065-1.07179677 4.1435935-1.07179677 6 0zm-4.791172 1.6195783-.208828.11247251-7.85640646 4.53589838c-1.17246724.67692428-1.91843145 1.89771701-1.99370617 3.2394348l-.00629383.2246668v9.0717968c0 1.3538485.68425541 2.6102689 1.80857977 3.3463176l.19142023.117784 7.85640646 4.5358984c1.1688485.674835 2.5938608.7123258 3.791172.1124725l.208828-.1124725 7.8564065-4.5358984c1.1724672-.6769243 1.9184314-1.897717 1.9937061-3.2394348l.0062939-.2246668v-9.0717968c0-1.3538485-.6842555-2.61026887-1.8085798-3.34631759l-.1914202-.11778401-7.8564065-4.53589838c-1.1688485-.67483501-2.5938608-.71232584-3.791172-.11247251zm8.8114886 8.20574889c.259282.4876385.0741624 1.0931371-.4134761 1.3524191l-5.6183556 2.9868539.0000413 6.7689186c0 .5522848-.4477152 1-1 1-.5522847 0-1-.4477152-1-1l-.0000413-6.7689186-5.61827304-2.9868539c-.48763849-.259282-.67275801-.8647806-.41347603-1.3524191.25928199-.4876385.86478067-.672758 1.35241917-.4134761l5.6793299 3.0187491 5.6794125-3.0187491c.4876385-.2592819 1.0931372-.0741624 1.3524192.4134761z"
                                        class="fill-white" fill-rule="nonzero" />

                                </g>

                            </svg>
                            <p
                                :class="[store.getters.isSidebarActive ? 'delay-1000 block ease-linear ' : 'delay-1000 hidden']">
                                Shop</p>

                        </router-link>
                    </li>

                    <li>
                        <router-link to="/setting"
                            class="flex items-center p-3 rounded-md hover:bg-gray-700 relative duration-500 ease-in-out"
                            exact-active-class="bg-slate-600">
                            <!-- Note -->
                            <div v-if="store.getters.isSidebarActive"
                                class="w-1 h-11  -left-[5.5%] rounded-full bg-white absolute transition-transform duration-500 ease-in-out"
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
                                class="w-1 h-11  -left-[5.5%] rounded-full bg-white absolute transition-transform duration-500 ease-in-out"
                                :class="[$route.name == 'video' ? 'translate-x-0' : '-translate-x-5']"></div>
                            <!-- End Note -->
                            <!-- About Icon -->


                            <svg class="w-6 h-6 fill-none" :class="store.getters.isSidebarActive ? 'mr-2' : 'mr-0'"
                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.5617 7C19.7904 5.69523 18.7863 4.5 17.4617 4.5H6.53788C5.21323 4.5 4.20922 5.69523 4.43784 7"
                                    class="stroke-white" stroke-width="1.5" />
                                <path
                                    d="M17.4999 4.5C17.5283 4.24092 17.5425 4.11135 17.5427 4.00435C17.545 2.98072 16.7739 2.12064 15.7561 2.01142C15.6497 2 15.5194 2 15.2588 2H8.74099C8.48035 2 8.35002 2 8.24362 2.01142C7.22584 2.12064 6.45481 2.98072 6.45704 4.00434C6.45727 4.11135 6.47146 4.2409 6.49983 4.5"
                                    class="stroke-white" stroke-width="1.5" />
                                <path
                                    d="M14.5812 13.6159C15.1396 13.9621 15.1396 14.8582 14.5812 15.2044L11.2096 17.2945C10.6669 17.6309 10 17.1931 10 16.5003L10 12.32C10 11.6273 10.6669 11.1894 11.2096 11.5258L14.5812 13.6159Z"
                                    class="stroke-white" stroke-width="1.5" />
                                <path
                                    d="M2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.2855 9.04765 22.0625 10.6294 21.6165 13.793L21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793Z"
                                    class="stroke-white" stroke-width="1.5" />
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
                                class="w-1 h-11  -left-[5.5%] rounded-full bg-white absolute transition-transform duration-500 ease-in-out"
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


                    <!-- System -->
                    <li>
                        <router-link to="/controller"
                            class="flex items-center p-3 rounded-md hover:bg-gray-700 relative duration-500 ease-in-out"
                            exact-active-class="bg-slate-600">
                            <!-- Note -->
                            <div v-if="store.getters.isSidebarActive"
                                class="w-1 h-11  -left-[5.5%] rounded-full bg-white absolute transition-transform duration-500 ease-in-out"
                                :class="[$route.name == 'controller' ? 'translate-x-0' : '-translate-x-5']"></div>
                            <!-- End Note -->
                            <!-- About Icon -->

                            <svg class="w-6 h-6 fill-white ease-in-out  duration-1000 "
                                :class="store.getters.isSidebarActive ? 'mr-2' : 'mr-0'" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 512 512" xml:space="preserve">
                                <g>
                                    <g>
                                        <g>
                                            <path
                                                d="M501.333,256C507.2,256,512,251.2,512,245.333c0-5.867-4.8-10.667-10.667-10.667h-74.667v-64h74.667
				c5.867,0,10.667-4.8,10.667-10.667c0-5.867-4.8-10.667-10.667-10.667h-74.667V112.96c0-15.253-12.373-27.52-27.627-27.627
				h-57.707V10.667C341.333,4.8,336.533,0,330.667,0C324.8,0,320,4.8,320,10.667v74.667h-64V10.667C256,4.8,251.2,0,245.333,0
				c-5.867,0-10.667,4.8-10.667,10.667v74.667h-64V10.667C170.667,4.8,165.867,0,160,0c-5.867,0-10.667,4.8-10.667,10.667v74.667
				H112.96c-15.253,0-27.627,12.373-27.627,27.627v25.707H10.667C4.8,138.667,0,143.467,0,149.333C0,155.2,4.8,160,10.667,160
				h74.667v64H10.667C4.8,224,0,228.8,0,234.667c0,5.867,4.8,10.667,10.667,10.667h74.667v64H10.667C4.8,309.333,0,314.133,0,320
				c0,5.867,4.8,10.667,10.667,10.667h74.667v68.373c0,15.253,12.373,27.52,27.627,27.627h57.707v74.667
				c0,5.867,4.8,10.667,10.667,10.667C187.2,512,192,507.2,192,501.333v-74.667h64v74.667C256,507.2,260.8,512,266.667,512
				c5.867,0,10.667-4.8,10.667-10.667v-74.667h64v74.667c0,5.867,4.8,10.667,10.667,10.667c5.867,0,10.667-4.8,10.667-10.667
				v-74.667h36.373c15.253,0,27.52-12.373,27.627-27.627v-57.707h74.667c5.867,0,10.667-4.8,10.667-10.667
				C512,324.8,507.2,320,501.333,320h-74.667v-64H501.333z M405.44,399.04h-0.107c0,3.413-2.773,6.293-6.293,6.293H112.96
				c-3.413,0-6.293-2.773-6.293-6.293V112.96c0-3.413,2.773-6.293,6.293-6.293h286.187c3.413,0,6.293,2.773,6.293,6.293V399.04z" />
                                            <path d="M326.827,128H185.173C153.6,128,128,153.6,128,185.173v141.653C128.107,358.4,153.6,384,185.173,384h141.653
				C358.4,384,384,358.4,384,326.827V185.173C383.893,153.6,358.4,128,326.827,128z M362.667,326.827
				c0,19.84-16.107,35.84-35.84,35.84H185.173c-19.84,0-35.84-16-35.84-35.84V185.173c0.107-19.84,16.107-35.84,35.84-35.84H326.72
				c19.84,0,35.84,16,35.947,35.84V326.827z" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p
                                :class="[store.getters.isSidebarActive ? 'delay-1000 block ease-linear ' : 'delay-1000 hidden']">
                                controller</p>

                        </router-link>
                    </li>



                </ul>
            </nav>
        </div>

        <!-- Copy -->
        <p class="text-center text-xs text-slate-600 font-roboto-mono px-1 py-4 text-wrap break-words">
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