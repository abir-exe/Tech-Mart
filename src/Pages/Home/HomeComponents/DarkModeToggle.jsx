// // DarkModeToggle.js

// import { useTheme } from "../../DarkMode";



// const DarkModeToggle = () => {
//   const { isDarkMode, toggleDarkMode } = useTheme();

//   return (
//     <div className="container mx-auto p-4">
//       <label className="switch-label">Toggle Dark Mode:</label>
//       <div className="relative inline-block w-16 h-8 mr-2 align-middle select-none">
//         <input
//           type="checkbox"
//           id="toggle"
//           name="toggle"
//           className="toggle-checkbox absolute block w-8 h-8 rounded-full bg-white border-4 appearance-none cursor-pointer"
//           checked={isDarkMode}
//           onChange={toggleDarkMode}
//         />
//         <label
//           htmlFor="toggle"
//           className={`w-16 h-8 bg-gray-300 rounded-full p-1 relative transition-colors duration-300 ease-linear ${
//             isDarkMode ? 'bg-gray-800' : 'bg-yellow-500'
//           }`}
//         ></label>
//       </div>
//       <label className="switch-label">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</label>
//     </div>
//   );
// };

// export default DarkModeToggle;
