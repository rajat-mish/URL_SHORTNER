



// import React from 'react';
// import { useRouterState, useNavigate } from '@tanstack/react-router';

// const Navbar = () => {
//   const pathname = useRouterState({ select: (state) => state.location.pathname });
//   const navigate = useNavigate();

//   const isHome = pathname === '/';

//   return (
//     <nav className="bg-white border border-b-black">
//       <div className="mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <span className="text-black-600 font-bold text-xl">URL Shortener</span>
//           </div>
//           <div className="flex items-center">
//             {isHome && (
//               <button
//                 onClick={() => navigate({ to: '/auth' })}
//                 className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
//               >
//                 Login
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// src/components/NavBar.jsx
// import { useSelector, useDispatch } from 'react-redux';
// import { useRouter } from '@tanstack/react-router';
// import { logout } from '../store/slice/authSlice.js';
// import { useQueryClient } from '@tanstack/react-query';
// import { logoutUser } from '../api/user.api.js';

// const NavBar = () => {
//   const router = useRouter();
//   const pathname = router?.state?.location?.pathname ?? '/';
//   const dispatch = useDispatch();
//   const queryClient = useQueryClient();

//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   const handleLogin = () => {
//     router.navigate({ to: '/auth' });
//   };

//   const handleLogout = async () => {
//     try {
//       // Call the API directly
//       await logoutUser();
      
//       // Update Redux state
//       dispatch(logout());
      
//       // Clear React Query cache
//       if (queryClient) {
//         queryClient.removeQueries();
//       }
      
//       // Redirect to home page
//       router.navigate({ to: '/' });
//     } catch (err) {
//       console.error('Logout failed:', err);
//     }
//   };

//   return (
//     <nav className="bg-white border border-b-black">
//       <div className="mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <span className="text-black-600 font-bold text-xl cursor-pointer" 
//                   onClick={() => router.navigate({ to: '/' })}>
//               URL Shortener
//             </span>
//           </div>
//           {/* <div className="flex items-center">
//             {isAuthenticated ? (
//               <button
//                 onClick={handleLogout}
//                 className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700"
//               >
//                 Logout
//               </button>
//             ) : pathname === '/' ? (
//               <button
//                 onClick={handleLogin}
//                 className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
//               >
//                 Login
//               </button>
//             ) : null}
//           </div> */}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;


import React from 'react';
import { useRouterState, useNavigate } from '@tanstack/react-router';

const Navbar = () => {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const navigate = useNavigate();

  const isHome = pathname === '/';

  return (
    <nav className="bg-white border border-b-black">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-black-600 font-bold text-xl">URL Shortener</span>
          </div>
          <div className="flex items-center">
            {isHome && (
              <button
                onClick={() => navigate({ to: '/auth' })}
                className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
