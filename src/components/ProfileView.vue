<template>
    <div class="w-72 flex flex-col absolute top-12 right-0 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-boxx">
        <!-- Header Style -->
        <div
            class="w-0 h-0 border-t-0 border-l-[20px] border-l-transparent border-b-[18px] dark:border-b-dark border-b-white border-r-[5px] border-r-transparent absolute -top-[14px] right-3">
        </div>
        <!-- End Header Style -->

        <!-- Content -->

        <!-- Block Cover -->
        <div class="w-full h-32 border rounded-lg relative flex flex-col justify-end items-center"
            :style="{ backgroundImage: `url(${cover})` }">
            <div class="w-20 h-20 rounded-full border-4 border-pink-500 translate-y-8 bg-center bg-cover bg-no-repeat"
                :style="{ backgroundImage: `url(${profile})` }"></div>
        </div>
        <!-- End Block Cover -->

        <!-- Block Body -->
        <div class="mt-10 w-full">
            <!-- Name -->
            <h3 class="text-center font-[600]">JSON ANA</h3>
            <p class="text-blue-500 underline text-xs text-center hover:underline-offset-1">jonson@gmail.com</p>
            <!-- End Block Name -->
            <hr class="my-4" />

            <div class="flex flex-row justify-center items-center gap-4 font-poppins text-xs">
                <!-- Block Logout -->
                <div class="flex flex-col justify-center items-center">
                    <div class="p-1 rounded-full hover:bg-slate-200 active:bg-slate-100 duration-200 ease-in-out">
                        <button class=" rounded-full  p-1 border hover:border-pink-500">
                            <svg class="w-6 h-6  fill-none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4" stroke="#1C274C"
                                    stroke-width="1.5" stroke-linecap="round" />
                                <path d="M10 12H20M20 12L17 9M20 12L17 15" stroke="#1C274C" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <p class="text-center">Logout</p>
                </div>
                <!-- End Block Logout -->

                <!-- Block Edit -->
                <div class="flex flex-col justify-center items-center">
                    <div class="p-1 rounded-full hover:bg-slate-200 active:bg-slate-100 duration-200 ease-in-out">
                        <button class="rounded-full p-1 border hover:border-pink-500">
                            <svg class="w-6 h-6 fill-none" viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.9445 9.1875L14.9445 5.1875M18.9445 9.1875L13.946 14.1859C13.2873 14.8446 12.4878 15.3646 11.5699 15.5229C10.6431 15.6828 9.49294 15.736 8.94444 15.1875C8.39595 14.639 8.44915 13.4888 8.609 12.562C8.76731 11.6441 9.28735 10.8446 9.946 10.1859L14.9445 5.1875M18.9445 9.1875C18.9445 9.1875 21.9444 6.1875 19.9444 4.1875C17.9444 2.1875 14.9445 5.1875 14.9445 5.1875M20.5 12C20.5 18.5 18.5 20.5 12 20.5C5.5 20.5 3.5 18.5 3.5 12C3.5 5.5 5.5 3.5 12 3.5"
                                    stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <p class="text-center">Edit</p>
                </div>
                <!-- End Block Edit -->
            </div>
        </div>
    </div>
</template>

<script setup>
const profile = require('../assets/logo.png');
const cover = require('../assets/back.png'); // Add cover image path if needed
</script>
