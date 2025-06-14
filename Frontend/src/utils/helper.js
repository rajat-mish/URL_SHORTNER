
// import { redirect } from '@tanstack/react-router';
// import { getCurrentUser } from '../api/user.api.js';
// import { login } from '../store/slice/authSlice.js';
// import { store } from '../store/store.js';
// import { useQueryClient } from '@tanstack/react-query';



// export const checkAuth= async({context})=>{
// try{
//   const {queryClient,store}=context;
//   const user=await queryClient.ensureQueryData({
//     queryKey:['user'],

//     queryFn:getCurrentUser,
   
//   });
//   if(!user){
//     return false;
//   }
//   store.dispatch(login(user));
//   const { isAuthenticated } = store.getState().auth;

//   if(!isAuthenticated){
//     return false;
//   }
//   return true;
// }
// catch(error){
//   return redirect({to:'/auth'});
// }
// }


import { redirect } from '@tanstack/react-router';
import { getCurrentUser } from '../api/user.api.js';
import { login } from '../store/slice/authSlice.js';
import { store } from '../store/store.js';
import { useQueryClient } from '@tanstack/react-query';


export const checkAuth = async ({ context }) => {
  try {
    const { queryClient, store } = context;

    const user = await queryClient.fetchQuery({
      queryKey: ['user'],
      queryFn: getCurrentUser,
      retry: false,
    });

    if (!user) {
      throw new Error('User not authenticated');
    }

    store.dispatch(login(user));
    return true;
  } catch (error) {
    return redirect({ to: '/auth' });
  }
};
