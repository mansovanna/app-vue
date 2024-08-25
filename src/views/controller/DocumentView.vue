<template>
    <div class="w-full rounded-lg shadow-boxx dark:bg-gray-600/30 px-4 py-2 bg-white font-roboto-flex">
        <div class="flex flex-row justify-between items-center">
            <h1 class="font-bold uppercase dark:text-white">Document</h1>

            <!-- Block Setting -->
            <div class="w-1/3 flex flex-row justify-end items-center gap-4">
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

                <!-- Block Export -->
                <button
                    class="p-1 bg-green-500 rounded-full text-white dark:shadow-green-500 dark:shadow-md dark:bg-green-600 hover:bg-green-700 dark:hover:bg-green-500 transition-colors">
                    <svg class="fill-none w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.44 8.8999C20.04 9.2099 21.51 11.0599 21.51 15.1099V15.2399C21.51 19.7099 19.72 21.4999 15.25 21.4999H8.73998C4.26998 21.4999 2.47998 19.7099 2.47998 15.2399V15.1099C2.47998 11.0899 3.92998 9.2399 7.46998 8.9099"
                            class="dark:stroke-white stroke-black" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M12 15.0001V3.62012" class="dark:stroke-white stroke-black" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.35 5.85L12 2.5L8.65002 5.85" class="dark:stroke-white stroke-black"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto mt-4">
            <table class="min-w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead class="dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th class="py-2 px-4">No</th>
                        <th class="py-2 px-4">Serial</th>
                        <th class="py-2 px-4">Temperature</th>
                        <th class="py-2 px-4">Humidity</th>
                        <th class="py-2 px-4">Date</th>
                        <th class="py-2 px-4">Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in paginatedItems" :key="item.serial"
                        class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td class="py-2 px-4 dark:hover:bg-slate-800 hover:bg-blue-100">{{ item.serial }}</td>
                        <td class="py-2 px-4 dark:hover:bg-slate-800 hover:bg-blue-100">{{ item.no }}</td>
                        <td class="py-2 px-4 dark:hover:bg-slate-800 hover:bg-blue-100">{{ item.temperature }}</td>
                        <td class="py-2 px-4 dark:hover:bg-slate-800 hover:bg-blue-100">{{ item.humidity }}</td>
                        <td class="py-2 px-4 dark:hover:bg-slate-800 hover:bg-blue-100">{{ item.date }}</td>
                        <td class="py-2 px-4 dark:hover:bg-slate-800 hover:bg-blue-100">{{ item.time }}</td>
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
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';

// Search functionality
const isActive = ref(false);
const searchQuery = ref('');
const isClear = ref(false);

const search = () => {
    if (!isActive.value) {
        isActive.value = true;
    } else {
        alert("Please search now");
    }
};

// Watch for changes in searchQuery
watch(searchQuery, (newValue) => {
    isClear.value = newValue.length > 3;
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
    { serial: 1, no: 'ABC123456', temperature: '22°C', humidity: '55%', date: '2024-08-01', time: '09:00 AM' },
    { serial: 2, no: 'BCD234567', temperature: '24°C', humidity: '50%', date: '2024-08-02', time: '10:00 AM' },
    { serial: 3, no: 'CDE345678', temperature: '21°C', humidity: '53%', date: '2024-08-03', time: '11:00 AM' },
    { serial: 4, no: 'DEF456789', temperature: '23°C', humidity: '52%', date: '2024-08-04', time: '12:00 PM' },
    { serial: 5, no: 'EFG567890', temperature: '22°C', humidity: '56%', date: '2024-08-05', time: '01:00 PM' },
    { serial: 6, no: 'FGH678901', temperature: '25°C', humidity: '49%', date: '2024-08-06', time: '02:00 PM' },
    { serial: 7, no: 'GHI789012', temperature: '26°C', humidity: '48%', date: '2024-08-07', time: '03:00 PM' },
    { serial: 8, no: 'HIJ890123', temperature: '24°C', humidity: '50%', date: '2024-08-08', time: '04:00 PM' },
    { serial: 9, no: 'IJK901234', temperature: '23°C', humidity: '52%', date: '2024-08-09', time: '05:00 PM' },
    { serial: 10, no: 'JKL012345', temperature: '22°C', humidity: '54%', date: '2024-08-10', time: '06:00 PM' },
    { serial: 11, no: 'KLM123456', temperature: '21°C', humidity: '55%', date: '2024-08-11', time: '07:00 PM' },
    { serial: 12, no: 'LMN234567', temperature: '22°C', humidity: '53%', date: '2024-08-12', time: '08:00 PM' },
    { serial: 13, no: 'MNO345678', temperature: '24°C', humidity: '51%', date: '2024-08-13', time: '09:00 PM' },
    { serial: 14, no: 'NOP456789', temperature: '25°C', humidity: '49%', date: '2024-08-14', time: '10:00 PM' },
    { serial: 15, no: 'OPQ567890', temperature: '23°C', humidity: '52%', date: '2024-08-15', time: '11:00 PM' },
    { serial: 16, no: 'PQR678901', temperature: '22°C', humidity: '55%', date: '2024-08-16', time: '12:00 AM' },
    { serial: 17, no: 'QRS789012', temperature: '24°C', humidity: '50%', date: '2024-08-17', time: '01:00 AM' },
    { serial: 18, no: 'RST890123', temperature: '25°C', humidity: '48%', date: '2024-08-18', time: '02:00 AM' },
    { serial: 19, no: 'STU901234', temperature: '22°C', humidity: '56%', date: '2024-08-19', time: '03:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
    { serial: 20, no: 'TUV012345', temperature: '23°C', humidity: '54%', date: '2024-08-20', time: '04:00 AM' },
]);


const itemsPerPage = 20;
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
