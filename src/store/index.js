import { createStore } from 'vuex'

export default createStore({
  state: {
    app: {
      name: 'Admin'
    },
    isActiveBar: JSON.parse(localStorage.getItem('appBar')) || false,  // Parse as boolean
    isDarkMode: localStorage.getItem('theme') === 'dark',
    isActiveNotfication: false,  // Example initial state
    isActiveProfile: false,  // Example initial state
  },
  getters: {
    // Getter to return the state of the sidebar
    isSidebarActive(state) {
      return state.isActiveBar;
    },

    isDarkMode: (state) => state.isDarkMode
  },
  mutations: {
    // Define mutation to toggle the sidebar state
    SET_BAR_APP(state) {
      state.isActiveBar = !state.isActiveBar;  // Toggle the boolean state
      localStorage.setItem('appBar', JSON.stringify(state.isActiveBar));  // Store as JSON string
    },

    TOGGLE_DARK_MODE(state) {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem('theme', state.isDarkMode ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', state.isDarkMode); // Toggle 'dark' class
    },
    SET_DARK_MODE(state, value) {
      state.isDarkMode = value;
      localStorage.setItem('theme', state.isDarkMode ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', state.isDarkMode); // Toggle 'dark' class
    },

    TOGGLE_NOTIFICATION(state) {
      state.isActiveNotfication = !state.isActiveNotfication;
    },

    TOGGLE_PROFILE(state) {
      state.isActiveProfile = !state.isActiveProfile;
    }
  },
  actions: {
    // Define action to commit the mutation
    menu({ commit }) {
      commit("SET_BAR_APP");
    },

    toggleDarkMode({ commit }) {
      commit('TOGGLE_DARK_MODE');
    },

    initializeTheme({ commit }) {
      const theme = localStorage.getItem('theme');
      if (theme) {
        commit('SET_DARK_MODE', theme === 'dark');
      };

      
    }
  },
  modules: {
    // Add any modules if needed
  }
});
