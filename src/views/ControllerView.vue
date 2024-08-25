<template>
    <div class="flex font-roboto-flex dark:bg-dark bg-backg">
        <!-- Block Sidebar -->
        <div
            class="fixed w-36 min-h-[88vh] bg-white text-gray-800 flex flex-col justify-between duration-1000 ease-in-out shadow dark:bg-[#e0e0e010] dark:text-white dark:shadow-slate-600 rounded-md p-2">
            <!-- Sidebar content -->
            <nav class="flex-1 ">
                <ul class="flex flex-col gap-2">
                    <!-- Product -->
                    <li>
                        <router-link :to="{ name: 'dashboard' }"
                            class="flex items-center p-2 rounded-md dark:hover:bg-gray-700 hover:bg-slate-200 relative duration-500 ease-in-out"
                            exact-active-class="bg-slate-300 dark:bg-slate-600">
                            <!-- Note -->
                            <div class="w-0 h-0 -left-[5.5%] 
                                absolute 
                                transition-transform 
                                duration-500 ease-in-out 
                                border-r-[10px]  border-r-transparent
                                border-l-[10px] border-l-orange-500
                                border-b-[10px] border-b-transparent
                                border-t-[10px] border-t-transparent 
                                " :class="[$route.name == 'dashboard' ? 'translate-x-0' : '-translate-x-64']">
                            </div>
                            <!-- End Note -->
                            <!--  Icon -->
                            <svg class="fill-none w-6 h-6 stroke-dark dark:stroke-white" viewBox="0 0 32 32" id="icon"
                                xmlns="http://www.w3.org/2000/svg" >

                                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                <g id="SVGRepo_iconCarrier">

                                    <rect x="24" y="21" width="2" height="5" />

                                    <rect x="20" y="16" width="2" height="10" />

                                    <path d="M11,26a5.0059,5.0059,0,0,1-5-5H8a3,3,0,1,0,3-3V16a5,5,0,0,1,0,10Z" />

                                    <path
                                        d="M28,2H4A2.002,2.002,0,0,0,2,4V28a2.0023,2.0023,0,0,0,2,2H28a2.0027,2.0027,0,0,0,2-2V4A2.0023,2.0023,0,0,0,28,2Zm0,9H14V4H28ZM12,4v7H4V4ZM4,28V13H28.0007l.0013,15Z" />

                                    <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;"
                                        class="cls-1" width="32" height="32" />

                                </g>

                            </svg>
                            <!-- Block Text -->
                            <p class="ml-2">Dashboard</p>
                        </router-link>
                    </li>

                    <!-- Device -->
                    <li>
                        <router-link :to="{ name: 'device' }"
                            class="flex items-center p-2 rounded-md dark:hover:bg-gray-700 hover:bg-slate-200 relative duration-500 ease-in-out"
                            exact-active-class="bg-slate-200 dark:bg-slate-600">
                            <!-- Note -->
                            <div class="w-0 h-0 -left-[5.5%] 
                                absolute 
                                transition-transform 
                                duration-500 ease-in-out 
                                border-r-[10px]  border-r-transparent
                                border-l-[10px] border-l-orange-500
                                border-b-[10px] border-b-transparent
                                border-t-[10px] border-t-transparent
                                " :class="[$route.name == 'device' ? 'translate-x-0' : '-translate-x-64']">
                            </div>
                            <!-- End Note -->
                            <!-- Icon -->
                            <svg class="w-6 h-6 fill-none stroke-black dark:stroke-white" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg" stroke-width="1" stroke-linecap="round"
                                stroke-linejoin="miter">
                                <line x1="11.99" y1="19" x2="12" y2="19" stroke-linecap="round" stroke-width="1.5">
                                </line>
                                <path d="M6,13a8.49,8.49,0,0,1,12,0"></path>
                                <path d="M2.81,9.81a13,13,0,0,1,18.38,0"></path>
                                <path d="M9.17,16.17a4,4,0,0,1,5.66,0"></path>
                            </svg>
                            <!-- Block Text -->
                            <p class="ml-2">Device</p>
                        </router-link>
                    </li>

                    <!-- Document -->
                    <li>
                        <router-link :to="{ name: 'document' }"
                            class="flex items-center p-2 rounded-md dark:hover:bg-gray-700 hover:bg-slate-200 relative duration-500 ease-in-out"
                            exact-active-class="bg-slate-200 dark:bg-slate-600">
                            <!-- Note -->
                            <div class="w-0 h-0 -left-[5.5%] 
                                absolute 
                                transition-transform 
                                duration-500 ease-in-out 
                                border-r-[10px]  border-r-transparent
                                border-l-[10px] border-l-orange-500
                                border-b-[10px] border-b-transparent
                                border-t-[10px] border-t-transparent
                                " :class="[$route.name == 'document' ? 'translate-x-0' : '-translate-x-64']">
                            </div>
                            <!-- End Note -->
                            <!--  Icon -->
                            <svg class="w-6 h-6" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">

                                <g id="layer1">

                                    <path class="fill-black dark:fill-white" fill-opacity="1" stroke="none"
                                        stroke-width="0px"
                                        d="M 10 0 L 8 2 L 0 2 L 0 15 L 8 15 L 8 14 L 1 14 L 1 3 L 17 3 L 17 4.5 L 18 5.5 L 18 2 L 18 0 L 10 0 z M 10.646484 1 L 17 1 L 17 2 L 9.6464844 2 L 10.646484 1 z M 9 5 L 9 20 L 20 20 L 20 10 L 20 9 L 16 5 L 15 5 L 9 5 z M 10 6 L 15 6 L 15 9 L 15 10 L 19 10 L 19 19 L 10 19 L 10 6 z M 16 6.3535156 L 18.646484 9 L 16 9 L 16 6.3535156 z " />

                                </g>

                            </svg>

                            <!-- Block Text -->
                            <p class="ml-2">Document</p>
                        </router-link>
                    </li>

                    <!-- Config -->
                    <li>
                        <router-link :to="{ name: 'config' }"
                            class="flex items-center p-2 rounded-md dark:hover:bg-gray-700 hover:bg-slate-200 relative duration-500 ease-in-out"
                            exact-active-class="bg-slate-200 dark:bg-slate-600">
                            <!-- Note -->
                            <div class="w-0 h-0 -left-[5.5%] 
                                absolute 
                                transition-transform 
                                duration-500 ease-in-out 
                                border-r-[10px]  border-r-transparent
                                border-l-[10px] border-l-orange-500
                                border-b-[10px] border-b-transparent
                                border-t-[10px] border-t-transparent
                                " :class="[$route.name == 'config' ? 'translate-x-0' : '-translate-x-64']">
                            </div>
                            <!-- End Note -->
                            <!-- Home Icon -->

                            <!-- Block Text -->
                            <svg class="w-6 h-6 fill-black dark:fill-white" viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                <path
                                    d="M29.000,13.858 L29.000,31.000 C29.000,31.553 28.553,32.000 28.000,32.000 C27.447,32.000 27.000,31.553 27.000,31.000 L27.000,13.858 C25.279,13.411 24.000,11.859 24.000,10.000 C24.000,8.141 25.279,6.589 27.000,6.142 L27.000,1.000 C27.000,0.447 27.447,0.000 28.000,0.000 C28.553,0.000 29.000,0.447 29.000,1.000 L29.000,6.142 C30.721,6.589 32.000,8.141 32.000,10.000 C32.000,11.859 30.721,13.411 29.000,13.858 ZM28.000,8.000 C26.898,8.000 26.000,8.897 26.000,10.000 C26.000,11.103 26.898,12.000 28.000,12.000 C29.103,12.000 30.000,11.103 30.000,10.000 C30.000,8.897 29.103,8.000 28.000,8.000 ZM17.000,25.858 L17.000,31.000 C17.000,31.553 16.553,32.000 16.000,32.000 C15.447,32.000 15.000,31.553 15.000,31.000 L15.000,25.858 C13.279,25.411 12.000,23.859 12.000,22.000 C12.000,20.141 13.279,18.589 15.000,18.142 L15.000,1.000 C15.000,0.447 15.447,0.000 16.000,0.000 C16.553,0.000 17.000,0.447 17.000,1.000 L17.000,18.142 C18.721,18.589 20.000,20.141 20.000,22.000 C20.000,23.859 18.721,25.411 17.000,25.858 ZM16.000,20.000 C14.897,20.000 14.000,20.898 14.000,22.000 C14.000,23.102 14.897,24.000 16.000,24.000 C17.103,24.000 18.000,23.102 18.000,22.000 C18.000,20.898 17.103,20.000 16.000,20.000 ZM5.000,19.858 L5.000,31.000 C5.000,31.553 4.553,32.000 4.000,32.000 C3.447,32.000 3.000,31.553 3.000,31.000 L3.000,19.858 C1.279,19.411 0.000,17.859 0.000,16.000 C0.000,14.141 1.279,12.589 3.000,12.142 L3.000,1.000 C3.000,0.447 3.447,0.000 4.000,0.000 C4.553,0.000 5.000,0.447 5.000,1.000 L5.000,12.142 C6.721,12.589 8.000,14.141 8.000,16.000 C8.000,17.859 6.721,19.411 5.000,19.858 ZM4.000,14.000 C2.898,14.000 2.000,14.898 2.000,16.000 C2.000,17.103 2.898,18.000 4.000,18.000 C5.102,18.000 6.000,17.103 6.000,16.000 C6.000,14.898 5.102,14.000 4.000,14.000 Z" />
                            </svg>
                            <p class="ml-2">Config</p>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <!-- End Block Sidebar -->

        <!-- Block Main -->
        <main class="ml-[9.5rem] flex-1  ">
            <router-view />
        </main>
        <!-- End Block Main -->
    </div>
</template>