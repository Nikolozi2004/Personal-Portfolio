// // Function to update the theme based on localStorage
// const updateTheme = () => {
//     if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//         document.documentElement.classList.add('dark');
//     } else {
//         document.documentElement.classList.remove('dark');
//     }
// };

// // Update theme on initial load
// updateTheme();

// // Whenever the user explicitly chooses light mode
// const setLightMode = () => {
//     localStorage.theme = 'light';
//     updateTheme();
// };

// // Whenever the user explicitly chooses dark mode
// const setDarkMode = () => {
//     localStorage.theme = 'dark';
//     updateTheme();
// };

// // Whenever the user explicitly chooses to respect the OS preference
// const setRespectOSPreference = () => {
//     localStorage.removeItem('theme');
//     updateTheme();
// };

