import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './components/Home.jsx';
import Statistics from './components/Statistics.jsx';
import Blog from './components/Blog.jsx';
import AppliedJob from './components/AppliedJob.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import JobDetails from './components/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('category.json')
      },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) =>
          fetch(`job.json`)
      }
      ,
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'appliedjob',
        element: <AppliedJob></AppliedJob>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
