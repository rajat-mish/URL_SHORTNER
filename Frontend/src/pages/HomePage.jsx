// import React from 'react'
// import UrlForm from '../components/UrlForm.jsx'

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
//         <UrlForm/>
//  </div>
//     </div>
   
//   )
// };

// export default HomePage



import React from 'react'
import UrlForm from '../components/UrlForm.jsx'

const HomePage = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
          <UrlForm />
        </div>
      </div>
    </div>
  )
};

export default HomePage