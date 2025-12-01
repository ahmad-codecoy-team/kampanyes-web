// // src/routes/routes.tsx
// import type { RouteObject } from "react-router";
// import RootLayout from "../layouts/RootLayout";
// import NotFound from "../shared/pages/NotFound";
// import HomePage from "@/pages/home";

// // This is your single source of truth for routes
// export const routes: RouteObject[] = [
//   {
//     path: "/",
//     element: <RootLayout />,
    
//     errorElement: <NotFound />, 
//     children: [
//       {
//         index: true, 
//         element: <HomePage />,
//       },

//       // add more children here: dashboard, profile, etc.
//       {
//         path: "*",
//         element: <NotFound />,
//       },
//     ],
//   },
// ];


import type { RouteObject } from "react-router";
import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/home";
import HelpPage from "@/pages/help";
import AboutPage from "@/pages/about";
import TermsPage from "@/pages/terms";
import PolicyPage from "@/pages/policy";
import NotFound from "@/shared/pages/NotFound";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "help",
        element: <HelpPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "terms",
        element: <TermsPage />,
      },
      {
        path: "policy",
        element: <PolicyPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
