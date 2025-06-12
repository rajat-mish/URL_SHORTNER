import React, { useState } from 'react'
import { loginUser } from '../api/user.api.js';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { login } from '../store/slice/authSlice.js';
import { useNavigate } from '@tanstack/react-router';





const LoginForm = ({state}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
   const dispatch=useDispatch()
   const navigate=useNavigate()
  const auth=useSelector((state)=>state.auth)

  const handleSubmit = async () => {
   
    setLoading(true)
    setError('')
    
    try {
      // Call your login API
      // const data=await loginUser(email, password);
      // dispatch(login(data.user));
      // setLoading(false);
      //   console.log('Login successful:', data)

      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      })
      
      if (!response.ok) {
        throw new Error('Login failed')
      }
      
      const data = await response.json()
     
      dispatch(login(data.user))
      navigate({to:'/dashboard'})
      //dispatchEvent({type:'LOGIN',payload:data.user})
      console.log('Login successful:', data)
      
      // Redirect or update state after successful login
      // window.location.href = '/dashboard'
    } catch (err) {
      // setLoading(false)
      setError(err.message)
    } 
    finally{
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        
        <div  className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          
          {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
        </div>
        
        <div className="mt-4 text-center text-sm text-gray-600">
          <p className='cursor-pointer'>Don't have an account? <span onClick={()=>state(false)} className="text-blue-500 ">Register</span></p>
          <p className="mt-2">
            <a href="/forgot-password" className="text-blue-500 ">Forgot password?</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm