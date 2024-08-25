<template>
    <div class="w-full min-h-[89vh] bg-[#0808084b] dark:bg-[#ffffff17] flex flex-col justify-center items-center absolute top-0">
      <div class="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg product-drop">
        <!-- Header -->
        <div class="flex flex-row justify-between items-center mb-4">
          <h1 class="text-lg font-bold">Add New Product</h1>
          <button @click="closeForm" class="rounded-full p-1 bg-red-500 hover:bg-red-600 active:bg-red-500">
            <svg class="w-6 h-6 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                d="m7.53033 6.46967c-.29289-.29289-.76777-.29289-1.06066 0s-.29289.76777 0 1.06066l4.46963 4.46967-4.46963 4.4697c-.29289.2929-.29289.7677 0 1.0606s.76777.2929 1.06066 0l4.46967-4.4696 4.4697 4.4696c.2929.2929.7677.2929 1.0606 0s.2929-.7677 0-1.0606l-4.4696-4.4697 4.4696-4.46967c.2929-.29289.2929-.76777 0-1.06066s-.7677-.29289-1.0606 0l-4.4697 4.46963z"
                fill-rule="evenodd" />
            </svg>
          </button>
        </div>
  
        <!-- Form Block -->
        <form @submit.prevent="handleSubmit">
          <div class="flex flex-row gap-4 w-full mb-4">
            <div class="w-full">
              <label for="name" class="block text-sm font-medium text-gray-700">
                *Name
              </label>
              <input v-model="product.name" type="text" name="name" id="name"
                class="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:outline-2 focus:outline-blue-200 sm:text-sm p-3 transition duration-200 ease-in-out"
                placeholder="Enter product name" required>
            </div>
            <div class="w-full">
              <label for="price" class="block text-sm font-medium text-gray-700">
                *Price
              </label>
              <input v-model="product.price" type="number" name="price" id="price"
                class="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:outline-2 focus:outline-blue-200 sm:text-sm p-3 transition duration-200 ease-in-out"
                placeholder="Enter price" required>
            </div>
          </div>
  
          <div class="mb-4">
            <label for="category" class="block text-sm font-medium text-gray-700">
              *Category
            </label>
            <select v-model="product.category" name="category" id="category"
              class="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:outline-2 focus:outline-blue-200 sm:text-sm p-3 transition duration-200 ease-in-out"
              required>
              <option value="" disabled>Select a category</option>
              <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
            </select>
          </div>
  
          <div class="mb-4">
            <label for="description" class="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea v-model="product.description" name="description" id="description"
              class="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:outline-2 focus:outline-blue-200 sm:text-sm p-3 transition duration-200 ease-in-out"
              placeholder="Enter product description"></textarea>
          </div>
  
          <div class="flex justify-end gap-2">
            <button @click="closeForm"
              class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 active:bg-red-500">
              Cancel
            </button>
            <button type="submit"
              class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-500">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits, onMounted, onBeforeUnmount } from 'vue';
  
  const emit = defineEmits();
  
  const product = ref({
    name: '',
    description: '',
    price: '',
    category: '',
  });
  
  const categories = ref(['Electronics', 'Clothing', 'Books', 'Toys', 'Furniture']);
  
  const handleSubmit = () => {
    console.log('New product added:', product.value);
    product.value = { name: '', description: '', price: '', category: '' };
  };

  const storeEmit=()=>{
    emit('add');
  }
  
  const closeForm = () => {
    console.log('Form closed');
    storeEmit();
  };
  
  const handleClickOutside = (event) => {
    if (!event.target.closest('.product-drop')) {
        storeEmit();
    }
  };
  
  onMounted(() => {
    // Add the event listener when the component is mounted
    document.body.addEventListener('click', handleClickOutside);
  });
  
  onBeforeUnmount(() => {
    // Remove the event listener when the component is about to be unmounted
    document.body.removeEventListener('click', handleClickOutside);
  });
  </script>
  