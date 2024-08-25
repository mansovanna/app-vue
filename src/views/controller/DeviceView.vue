<template>
    <div class="w-full rounded-lg shadow-boxx dark:bg-gray-600/30 py-2 bg-white font-roboto-flex relative">
        <div class="px-4">
            <div class="flex flex-row justify-between items-center">
            <h1 class="font-bold uppercase dark:text-white">Device</h1>

            <!-- Block Setting -->
            <div class="w-1/2 flex flex-row justify-end items-center gap-4">
                <form class="relative drop-app w-full flex flex-row justify-end" @submit.prevent="search">
                    <input v-if="isActive" type="text"
                        class="pl-4 pr-14 py-1 w-full bg-white dark:bg-transparent dark:text-white rounded-full border"
                        v-model="searchQuery" placeholder="Search" />
                    <aside v-if="isClear" @click="clear" class="absolute top-0 right-8 rounded-full p-1 cursor-pointer">
                        <div class="hover:bg-slate-50 dark:hover:bg-gray-600/30 rounded-full">
                            <svg class="fill-none w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd"
                                    d="m7.53033 6.46967c-.29289-.29289-.76777-.29289-1.06066 0s-.29289.76777 0 1.06066l4.46963 4.46967-4.46963 4.4697c-.29289.2929-.29289.7677 0 1.0606s.76777.2929 1.06066 0l4.46967-4.4696 4.4697 4.4696c.2929.2929.7677.2929 1.0606 0s.2929-.7677 0-1.0606l-4.4696-4.4697 4.4696-4.46967c.2929-.29289.2929-.76777 0-1.06066s-.7677-.29289-1.0606 0l-4.4697 4.46963z"
                                    class="dark:fill-white fill-dark" fill-rule="evenodd" />
                            </svg>
                        </div>
                    </aside>
                    <button :class="[isActive ? 'absolute top-0 right-0' : '']" type="submit"
                        class="p-1 bg-blue-500 rounded-full text-white dark:shadow-blue-500 dark:shadow-md dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors">
                        <svg class="fill-none w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                                class="stroke-dark dark:stroke-white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                </form>

                <!-- Block Add -->
                <button @click="addNew"
                    class="text-center px-4 py-1 rounded-full active:bg-green-500 hover:bg-green-600 bg-green-500 text-white flex flex-row justify-center items-center text-md product-drop">Add</button>
            </div>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto mt-4">
            <table class="min-w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead class="dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th class="py-2 px-4">No</th>
                        <th class="py-2 px-4">Serial</th>
                        <th class="py-2 px-4">Name</th>
                        <th class="py-2 px-4">Description</th>
                        <th class="py-2 px-4">Status</th>
                        <th class="py-2 px-4">CreateAt</th>
                        <th class="py-2 px-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in paginatedItems" :key="item.serial">
                        <td class="py-2 px-4">{{ item.id }}</td>
                        <td class="py-2 px-4">{{ item.serial }}</td>
                        <td class="py-2 px-4">{{ item.name }}</td>
                        <td class="py-2 px-4">{{ item.description }}</td>
                        <td class="py-2 px-4"><span class="px-4 py-1   relative">{{ item.status }} <div
                                    :class="[item.status == 'Active' ? 'bg-green-600' : 'bg-red-500']"
                                    class="rounded-full size-2  absolute right-1 bottom-1"></div></span></td>
                        <td class="py-2 px-4">{{ item.createdAt }}</td>
                        <td class="py-2 px-4">
                            <!-- Action Buttons -->
                            <button @click="update('hello')" class="text-blue-500 hover:underline product-drop">Edit</button>
                            <button @click="deletes('delete')" class="text-red-500 hover:underline ml-2">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Pagination Controls -->
        <div class="w-full flex flex-row justify-center items-center">
            <div class="w-7/12 flex justify-center items-center mt-4 text-sm overflow-x-auto">
                <!-- Previous Button -->
                <!-- <button @click="prevPage" :disabled="currentPage === 1"
                    class="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50">Previous</button> -->

                <!-- Page Numbers -->
                <div class="flex flex-row justify-center items-center gap-1">
                    <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="{
                        'bg-blue-500 text-white': page === currentPage,
                        'bg-gray-300 text-gray-800': page !== currentPage
                    }" class="w-6 h-6 flex items-center justify-center rounded-full cursor-pointer">
                        {{ page }}
                    </button>
                </div>

                <!-- Next Button -->
                <!-- <button @click="nextPage" :disabled="currentPage === totalPages"
                    class="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50">Next</button> -->
            </div>
        </div>
        </div>

        <!-- POP UP Form -->

        <!-- Add New -->
        <CreateView v-if="isAdd" @add="closeForm" />
        <UpdateView v-if="isUpdate" @update="closeForm" />
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';

// Search functionality
const isActive = ref(false);
const searchQuery = ref('');
const isClear = ref(false);


import CreateView from '@/components/Controller/device/CreateView.vue'
import UpdateView from '@/components/Controller/device/UpdateView.vue'

const isAdd = ref(false);
const isUpdate = ref(false);


const addNew = () => {
    isAdd.value = true
}

const update = (statue) => {
    isUpdate.value = true
    console.log(statue)
}

const closeForm = () => {
    isAdd.value = false
    isUpdate.value = false
}

const deletes = (statue) => {
    console.log(status);
}


const search = () => {
    if (!isActive.value) {
        isActive.value = true;
    } else {
        alert("Please search now");
    }
};

// Watch for changes in searchQuery
watch(searchQuery, (newValue) => {
    isClear.value = newValue.length > 0;
}, { immediate: true });

const clear = () => {
    searchQuery.value = '';
};

// Close search on click outside
const closeSearchOnClickOutside = (e) => {
    if (!e.target.closest('.drop-app') && isActive.value) {
        isActive.value = false;
    }
}

onMounted(() => {
    document.body.addEventListener('click', closeSearchOnClickOutside);
});

onBeforeUnmount(() => {
    document.body.removeEventListener('click', closeSearchOnClickOutside);
});

// Pagination functionality
const data = ref([
    { id: 1, serial: 'ABC123456', name: 'Device A', description: 'Description A', status: 'Active', createdAt: '2024-08-01' },
    { id: 2, serial: 'DEF789101', name: 'Device B', description: 'Description B', status: 'Inactive', createdAt: '2024-08-02' },
    { id: 3, serial: 'GHI112131', name: 'Device C', description: 'Description C', status: 'Active', createdAt: '2024-08-03' },
    { id: 4, serial: 'JKL415161', name: 'Device D', description: 'Description D', status: 'Inactive', createdAt: '2024-08-04' },
    { id: 5, serial: 'MNO718192', name: 'Device E', description: 'Description E', status: 'Active', createdAt: '2024-08-05' },
    { id: 6, serial: 'PQR202122', name: 'Device F', description: 'Description F', status: 'Inactive', createdAt: '2024-08-06' },
    { id: 7, serial: 'STU232425', name: 'Device G', description: 'Description G', status: 'Active', createdAt: '2024-08-07' },
    { id: 8, serial: 'VWX262728', name: 'Device H', description: 'Description H', status: 'Inactive', createdAt: '2024-08-08' },
    { id: 9, serial: 'YZA293031', name: 'Device I', description: 'Description I', status: 'Active', createdAt: '2024-08-09' },
    { id: 10, serial: 'BCD323334', name: 'Device J', description: 'Description J', status: 'Inactive', createdAt: '2024-08-10' },
    { id: 11, serial: 'EFG353637', name: 'Device K', description: 'Description K', status: 'Active', createdAt: '2024-08-11' },
    { id: 12, serial: 'HIJ383940', name: 'Device L', description: 'Description L', status: 'Inactive', createdAt: '2024-08-12' },
    { id: 13, serial: 'KLM414243', name: 'Device M', description: 'Description M', status: 'Active', createdAt: '2024-08-13' },
    { id: 14, serial: 'NOP444546', name: 'Device N', description: 'Description N', status: 'Inactive', createdAt: '2024-08-14' },
    { id: 15, serial: 'QRS474849', name: 'Device O', description: 'Description O', status: 'Active', createdAt: '2024-08-15' },
    { id: 16, serial: 'TUV505152', name: 'Device P', description: 'Description P', status: 'Inactive', createdAt: '2024-08-16' },
    { id: 17, serial: 'WXY535455', name: 'Device Q', description: 'Description Q', status: 'Active', createdAt: '2024-08-17' },
    { id: 18, serial: 'ZAB565758', name: 'Device R', description: 'Description R', status: 'Inactive', createdAt: '2024-08-18' },
    { id: 19, serial: 'CDE596061', name: 'Device S', description: 'Description S', status: 'Active', createdAt: '2024-08-19' },
    { id: 20, serial: 'FGH626364', name: 'Device T', description: 'Description T', status: 'Inactive', createdAt: '2024-08-20' },
    { id: 21, serial: 'IJK656667', name: 'Device U', description: 'Description U', status: 'Active', createdAt: '2024-08-21' },
    { id: 22, serial: 'LMN686970', name: 'Device V', description: 'Description V', status: 'Inactive', createdAt: '2024-08-22' },
    { id: 23, serial: 'OPQ717273', name: 'Device W', description: 'Description W', status: 'Active', createdAt: '2024-08-23' },
    { id: 24, serial: 'RST747576', name: 'Device X', description: 'Description X', status: 'Inactive', createdAt: '2024-08-24' },
    { id: 25, serial: 'UVW777879', name: 'Device Y', description: 'Description Y', status: 'Active', createdAt: '2024-08-25' },
    { id: 26, serial: 'XYZ808182', name: 'Device Z', description: 'Description Z', status: 'Inactive', createdAt: '2024-08-26' },
    { id: 27, serial: 'ABC838485', name: 'Device AA', description: 'Description AA', status: 'Active', createdAt: '2024-08-27' },
    { id: 28, serial: 'DEF868788', name: 'Device BB', description: 'Description BB', status: 'Inactive', createdAt: '2024-08-28' },
    { id: 29, serial: 'GHI898091', name: 'Device CC', description: 'Description CC', status: 'Active', createdAt: '2024-08-29' },
    { id: 30, serial: 'JKL929394', name: 'Device DD', description: 'Description DD', status: 'Inactive', createdAt: '2024-08-30' },
    { id: 31, serial: 'MNO959697', name: 'Device EE', description: 'Description EE', status: 'Active', createdAt: '2024-08-31' },
    { id: 32, serial: 'PQR989900', name: 'Device FF', description: 'Description FF', status: 'Inactive', createdAt: '2024-09-01' },
    { id: 33, serial: 'STU010203', name: 'Device GG', description: 'Description GG', status: 'Active', createdAt: '2024-09-02' },
    { id: 34, serial: 'VWX040506', name: 'Device HH', description: 'Description HH', status: 'Inactive', createdAt: '2024-09-03' },
    { id: 35, serial: 'YZA070809', name: 'Device II', description: 'Description II', status: 'Active', createdAt: '2024-09-04' },
    { id: 36, serial: 'BCD101112', name: 'Device JJ', description: 'Description JJ', status: 'Inactive', createdAt: '2024-09-05' },
    { id: 37, serial: 'EFG131415', name: 'Device KK', description: 'Description KK', status: 'Active', createdAt: '2024-09-06' },
    { id: 38, serial: 'HIJ161718', name: 'Device LL', description: 'Description LL', status: 'Inactive', createdAt: '2024-09-07' },
    { id: 39, serial: 'KLM192021', name: 'Device MM', description: 'Description MM', status: 'Active', createdAt: '2024-09-08' },
    { id: 40, serial: 'NOP222324', name: 'Device NN', description: 'Description NN', status: 'Inactive', createdAt: '2024-09-09' },
    { id: 41, serial: 'QRS252627', name: 'Device OO', description: 'Description OO', status: 'Active', createdAt: '2024-09-10' },
    { id: 42, serial: 'TUV282930', name: 'Device PP', description: 'Description PP', status: 'Inactive', createdAt: '2024-09-11' },
    { id: 43, serial: 'WXY313233', name: 'Device QQ', description: 'Description QQ', status: 'Active', createdAt: '2024-09-12' },
    { id: 44, serial: 'ZAB343536', name: 'Device RR', description: 'Description RR', status: 'Inactive', createdAt: '2024-09-13' },
    { id: 45, serial: 'CDE373839', name: 'Device SS', description: 'Description SS', status: 'Active', createdAt: '2024-09-14' },
    { id: 46, serial: 'FGH404142', name: 'Device TT', description: 'Description TT', status: 'Inactive', createdAt: '2024-09-15' },
    { id: 47, serial: 'IJK434445', name: 'Device UU', description: 'Description UU', status: 'Active', createdAt: '2024-09-16' },
    { id: 48, serial: 'LMN464748', name: 'Device VV', description: 'Description VV', status: 'Inactive', createdAt: '2024-09-17' },
    { id: 49, serial: 'OPQ495051', name: 'Device WW', description: 'Description WW', status: 'Active', createdAt: '2024-09-18' },
    { id: 50, serial: 'RST525354', name: 'Device XX', description: 'Description XX', status: 'Inactive', createdAt: '2024-09-19' },
]);


const itemsPerPage = 5;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(data.value.length / itemsPerPage));

const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.value.slice(start, end);
});

// const prevPage = () => {
//     if (currentPage.value > 1) {
//         currentPage.value--;
//     }
// };

// const nextPage = () => {
//     if (currentPage.value < totalPages.value) {
//         currentPage.value++;
//     }
// };

const goToPage = (page) => {
    if (page > 0 && page <= totalPages.value) {
        currentPage.value = page;
    }
};





</script>
