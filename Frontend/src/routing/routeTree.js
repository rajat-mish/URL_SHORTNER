import {createRootRoute} from '@tanstack/react-router';
import App from '../App.jsx';
import {homepageRoute} from './homepage.js';
import {authRoute} from './auth.route.js';
import {dashboardRoute} from './dashboard.js';




export const rootRoute=createRootRoute({
    component:App
})



export const routeTree=rootRoute.addChildren([
    homepageRoute,
    authRoute,
    dashboardRoute

]);



// src/routing/routeTree.js
// import { createRootRoute } from '@tanstack/react-router';
// import App from '../App.jsx';
// import { homepageRoute } from './homepage.js';
// import { authRoute } from './auth.route.js';
// import { dashboardRoute } from './dashboard.js';

// export const rootRoute = createRootRoute({
//   component: App,
// });

// export const routeTree = rootRoute.addChildren([
//   homepageRoute,
//   authRoute,
//   dashboardRoute,
// ]);

// // ✅ You can do this (optional)
// import { createRouter } from '@tanstack/react-router';
// export const router = createRouter({ routeTree }); // <- this is what you need to use for navigation
