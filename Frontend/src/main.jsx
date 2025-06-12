
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider,createRouter } from '@tanstack/react-router';
import { routeTree } from './routing/routeTree.js';
import { Provider } from 'react-redux';
import {store} from './store/store.js';

const router=createRouter({
  routeTree,
  context: {
   QueryClient,
   store,
  },
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <QueryClientProvider client={new QueryClient()}>
    <RouterProvider router={router} />
  </QueryClientProvider>
</Provider>


   
    
 
)
