<template>
    <div class="w-full bg-white dark:bg-[#f5f5f51e] dark:border-slate-700 rounded-md relative">
        <!-- Header -->
        <header class="px-4 py-3 flex flex-row justify-between items-center">
            <p class="text-blue-500 dark:text-white drop-shadow-sm uppercase font-roboto-flex font-bold">
                {{ $route.name }}
            </p>
            <div>
                <button @click="addNew" class="bg-blue-500 hover:bg-blue-600 active:bg-blue-500 duration-200 ease-in-out px-3 py-2 text-white rounded-lg product-drop">Add New</button>
            </div>
        </header>

        <!-- Main Content -->
        <main class="container mx-auto px-4">
            <table class="min-w-full border-collapse dark:text-white">
                <thead>
                    <tr class="bg-gray-100 dark:bg-[#33456e7a]">
                        <th class="px-4 py-2 text-left">No</th>
                        <th class="px-4 py-2 text-left">Name</th>
                        <th class="px-4 py-2 text-left">Description</th>
                        <th class="px-4 py-2 text-left">Created At</th>
                        <th class="px-4 py-2 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Table data would go here -->
                    <!-- Example row (replace with dynamic data) -->
                    <tr class="border-t dark:border-slate-700">
                        <td class="px-4 py-2">1</td>
                        <td class="px-4 py-2">Sample Name</td>
                        <td class="px-4 py-2">This is a description.</td>
                        <td class="px-4 py-2">2024-08-24</td>
                        <td class="px-4 py-2 text-center">
                            <!-- Actions such as edit or delete would go here -->
                            <button @click="update('Update 1')" class="bg-blue-500 hover:bg-blue-600 active:bg-blue-500 p-1 rounded-full ease-in-out duration-200 product-drop">
                                <svg class="w-6 h-6 fill-none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.9445 9.1875L14.9445 5.1875M18.9445 9.1875L13.946 14.1859C13.2873 14.8446 12.4878 15.3646 11.5699 15.5229C10.6431 15.6828 9.49294 15.736 8.94444 15.1875C8.39595 14.639 8.44915 13.4888 8.609 12.562C8.76731 11.6441 9.28735 10.8446 9.946 10.1859L14.9445 5.1875M18.9445 9.1875C18.9445 9.1875 21.9444 6.1875 19.9444 4.1875C17.9444 2.1875 14.9445 5.1875 14.9445 5.1875M20.5 12C20.5 18.5 18.5 20.5 12 20.5C5.5 20.5 3.5 18.5 3.5 12C3.5 5.5 5.5 3.5 12 3.5"
                                        class="stroke-white" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button @click="deletes('Deleate')" class="bg-red-500 hover:bg-red-600 active:bg-red-500 ml-2 p-1 rounded-full ease-in-out duration-200">
                                <svg class="w-6 h-6 fill-none" viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 7H20" class="stroke-white"stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M6 7V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V7"
                                        class="stroke-white"stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                        class="stroke-white"stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>

        <!-- POP UP Form -->

        <!-- Add New -->
        <CreateView v-if="isAdd" @add="closeForm"/>
        <UpdateView v-if="isUpdate" @update="closeForm"/>
    </div>
</template>

<script setup>
import {ref} from 'vue'
// You can add your script logic here, if needed.
import CreateView from '@/components/shop/category/CreateView.vue';
import UpdateView from '@/components/shop/category/UpdateView.vue';

const isAdd = ref(false);
const isUpdate = ref(false);


const addNew =()=>{
    isAdd.value = true
}

const update=(statue)=>{
 isUpdate.value = true
 console.log(statue)
}

const closeForm=()=>{
    isAdd.value = false
    isUpdate.value = false
}

const deletes=(statue)=>{
    console.log(status);
}

</script>
