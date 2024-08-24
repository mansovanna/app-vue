<template>
    <div
      class="min-h-screen flex items-center justify-center bg-center bg-cover bg-no-repeat"
      :style="{ backgroundImage: `url(${image})` }"
    >
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 class="text-2xl font-semibold text-center text-gray-700">Sign Up</h2>
        <form @submit.prevent="signup" class="mt-6">
          <!-- Name Field -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-600">Name</label>
            <input 
              v-model="name" 
              type="text" 
              id="name" 
              placeholder="Enter your name" 
              required 
              class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            />
            <p v-if="nameError" class="text-red-500 text-sm mt-1">{{ nameError }}</p>
          </div>
  
          <!-- Email Field -->
          <div class="mt-4">
            <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
            <input 
              v-model="email" 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              required 
              class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            />
            <p v-if="emailError" class="text-red-500 text-sm mt-1">{{ emailError }}</p>
          </div>
          
          <!-- Password Field with Show/Hide Toggle -->
          <div class="mt-4 relative">
            <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
            <input 
              v-model="password" 
              :type="showPassword ? 'text' : 'password'" 
              id="password" 
              placeholder="Enter your password" 
              required 
              class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            />
            <p v-if="passwordError" class="text-red-500 text-sm mt-1">{{ passwordError }}</p>
            <!-- Show/Hide Password Toggle -->
            <button 
              type="button" 
              @click="togglePasswordVisibility" 
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm -bottom-6"
            >
              <svg v-if="showPassword" class="h-5 w-5 text-gray-500" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"/>
              </svg>
              <svg v-else class="h-5 w-5 text-gray-500" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.052 10.052 0 015.688-6.54M15 12a3 3 0 11-6 0 3 3 0 016 0zm5.031-3.828a10.05 10.05 0 01.97 4.828c0 1.387-.255 2.716-.731 3.945"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 8.5L17.5 17.5"/>
              </svg>
            </button>
          </div>
  
          <!-- Confirm Password Field -->
          <div class="mt-4 relative">
            <label for="confirmPassword" class="block text-sm font-medium text-gray-600">Confirm Password</label>
            <input 
              v-model="confirmPassword" 
              :type="showPassword ? 'text' : 'password'" 
              id="confirmPassword" 
              placeholder="Confirm your password" 
              required 
              class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            />
            <p v-if="confirmPasswordError" class="text-red-500 text-sm mt-1">{{ confirmPasswordError }}</p>
          </div>
  
          <!-- Submit Button -->
          <button 
            type="submit" 
            class="w-full mt-6 bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300">
            Sign Up
          </button>
  
          <!-- Link to Login -->
          <p class="mt-4 text-center text-sm text-gray-600">
            Already have an account? 
            <router-link to="/login" class="text-indigo-500 hover:underline">Login here</router-link>.
          </p>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const image = ref(require('../assets/back.png')); // Adjust the path if necessary
  
  // Define reactive variables for form inputs, errors, and password visibility
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const nameError = ref('');
  const emailError = ref('');
  const passwordError = ref('');
  const confirmPasswordError = ref('');
  const showPassword = ref(false);
  
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
  };
  
  const signup = () => {
    // Reset errors
    nameError.value = '';
    emailError.value = '';
    passwordError.value = '';
    confirmPasswordError.value = '';
  
    // Name validation
    if (!name.value) {
      nameError.value = 'Name is required.';
    } else if (name.value.length < 2) {
      nameError.value = 'Name must be at least 2 characters long.';
    }
  
    // Email validation
    if (!email.value) {
      emailError.value = 'Email is required.';
    } else if (!validateEmail(email.value)) {
      emailError.value = 'Please enter a valid email address.';
    }
  
    // Password validation
    if (!password.value) {
      passwordError.value = 'Password is required.';
    } else if (password.value.length < 6) {
      passwordError.value = 'Password must be at least 6 characters long.';
    } else if (/\s/.test(password.value)) {
      passwordError.value = 'Password should not contain spaces.';
    }
  
    // Confirm Password validation
    if (!confirmPassword.value) {
      confirmPasswordError.value = 'Confirming your password is required.';
    } else if (confirmPassword.value !== password.value) {
      confirmPasswordError.value = 'Passwords do not match.';
    }
  
    // Check if there are any errors
    if (!nameError.value && !emailError.value && !passwordError.value && !confirmPasswordError.value) {
      alert('Signup successful!');
      // Proceed with the signup process, e.g., send data to the server
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  