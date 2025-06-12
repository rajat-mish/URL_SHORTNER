import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { createShortUrl } from '../api/shortUrl.api.js';
import { useSelector } from 'react-redux';
import { QueryClient } from '@tanstack/react-query';


//import { useQueryClient,useMutation,useQuery } from '@tanstack/react-query';


const UrlForm = () => {
const [url, seturl] = useState("https://www.google.com");
const [shortUrl, setShortUrl] = useState();
  const [copied, setCopied] = useState(false);
  const [customSlug, setCustomSlug] = useState('');
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);


  //const queryClient=useQueryClient();
  

// const handleSubmit= async(e)=>{
//    e.preventDefault();
// const shortUrl= await createShortUrl(url);
// setShortUrl(shortUrl);


// }

const handleSubmit = async () => {
  // Only include customSlug if provided and authenticated
  const shortUrl = await createShortUrl(url,  customSlug );
  setShortUrl(shortUrl);
  QueryClient.invalidateQueries({ queryKey: ['userUrls'] });
};


//const query=useQuery({queryKey:["shorturl"],queryFn:handleSubmit}) // for fetching the data
// const mutation=useMutation({
//   mutationfn:handleSubmit,
//   onSuccess:()=>{
//     queryClient.invalidateQueries({queryKey:["shorturl"]})
//   }
// })


  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // revert after 2 seconds
  };




    
  return (
            <div className="space-y-4">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
              Enter your URL
            </label>
            <input
              type="url"
              id="url"
              value={url}
              onInput={(event)=>seturl(event.target.value)}
              
             
              placeholder="https://example.com"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button
          onClick={handleSubmit}
            type="submit"
           
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
          Shorten URL
          </button>

                  {/* { {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )} */}



{isAuthenticated && (
  <div className="mt-4">
    <label htmlFor="customSlug" className="block text-sm font-medium text-gray-700 mb-1">
      Custom URL (optional)
    </label>
    <input
      type="text"
      id="customSlug"
      value={customSlug}
      onChange={(e) => setCustomSlug(e.target.value)}
      placeholder="Enter custom slug"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
)}




             {shortUrl && (
  <div className="mt-6">
    <h2 className="text-lg font-semibold mb-2">Your shortened URL:</h2>
    <div className="flex items-center">
      <input
        type="text"
        readOnly
        value={shortUrl}
        className="flex-1 p-2 border border-gray-300 rounded-l-md bg-gray-50"
      />
    <button
              onClick={handleCopy}
             className={`px-4 py-2 rounded-r-md transition-all ${
  copied
    ? 'bg-green-500 text-white'
    : 'bg-gray-200 hover:bg-gray-300 text-black'
}`}

            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
    </div>
  </div>
)}

        </div>
  )
}

export default UrlForm
