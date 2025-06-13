// import React from 'react'
// import UrlForm from '../components/UrlForm.jsx'
// import UserUrl from '../components/UserUrl.jsx'

// const DashboardPage = () => {
//   return (
//       <div className="min-h-screen  bg-gray-100 flex flex-col items-center justify-center p-4">
//       <div className="bg-white -mt-20 p-8 rounded-lg shadow-md w-full max-w-4xl">
//         <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
//         <UrlForm/>
//         <UserUrl/>
//  </div>
//     </div>
//   )
// }

// export default DashboardPage





// import React from 'react'
// import UrlForm from '../components/UrlForm.jsx'
// import UserUrl from '../components/UserUrl.jsx'
// import { useDispatch } from 'react-redux'
// import { logout } from '../store/slice/authSlice.js'
// import { useRouter } from '@tanstack/react-router'
// import { useQueryClient } from '@tanstack/react-query'
// import { logoutUser } from '../api/user.api.js'

// const DashboardPage = () => {
//   const dispatch = useDispatch()
//   const router = useRouter()
//   const queryClient = useQueryClient()

//   const handleLogout = async () => {
//     try {
//       // Call the API directly
//       await logoutUser()
      
//       // Update Redux state
//       dispatch(logout())
      
//       // Clear React Query cache
//       if (queryClient) {
//         queryClient.removeQueries()
//       }
      
//       // Redirect to home page
//       router.navigate({ to: '/' })
//     } catch (err) {
//       console.error('Logout failed:', err)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-white p-8 rounded-lg shadow-md mb-6">
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-2xl font-bold">URL Shortener Dashboard</h1>
//             <button
//               onClick={handleLogout}
//               className="px-4 py-2 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors"
//             >
//               Logout
//             </button>
//           </div>
//           <UrlForm />
//         </div>
        
//         <UserUrl />
//       </div>
//     </div>
//   )
// }

// export default DashboardPage







import React from 'react'
import UrlForm from '../components/UrlForm.jsx'
import UserUrl from '../components/UserUrl.jsx'
import { useDispatch } from 'react-redux'
import { logout } from '../store/slice/authSlice.js'
import { useRouter } from '@tanstack/react-router'
import { useQueryClient } from '@tanstack/react-query'
import { logoutUser } from '../api/user.api.js'

const DashboardPage = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const queryClient = useQueryClient()

  const handleLogout = async () => {
    try {
      await logoutUser()
      dispatch(logout())
      if (queryClient) {
        queryClient.removeQueries()
      }
      router.navigate({ to: '/' })
    } catch (err) {
      console.error('Logout failed:', err)
    }
  }

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">URL Shortener Dashboard</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
          <UrlForm />
        </div>
        
        <UserUrl />
      </div>
    </div>
  )
}

export default DashboardPage