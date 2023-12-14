import React from 'react';
import ReactDOM from 'react-dom/client';
 
 
import {  RouterProvider } from 'react-router-dom'
// 1. 导入路由router
import router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* 路由绑定 */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
 
