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
                        <router-link :to="{ name: 'product' }"
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
                                " :class="[$route.name == 'product' ? 'translate-x-0' : '-translate-x-64']">
                            </div>
                            <!-- End Note -->
                            <!-- Home Icon -->

                            <!-- Block Text -->
                            <p>Product</p>
                        </router-link>
                    </li>

                    <!-- Category -->
                    <li>
                        <router-link :to="{ name: 'category' }"
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
                                " :class="[$route.name == 'category' ? 'translate-x-0' : '-translate-x-64']">
                            </div>
                            <!-- End Note -->
                            <!-- Home Icon -->

                            <!-- Block Text -->
                            <p>Category</p>
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