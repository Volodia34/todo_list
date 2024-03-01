import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {MyProvider} from "./context";
import {Navigate, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import Authentication from "./shared/components/authentication/Authentication";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/login'/>
    },
    {
        path: '/todoList-form',
        element: <App/>
    },
    {
        path: '/register',
        element: <Authentication register={true}/>
    },
    {
        path: '/login',
        element: <Authentication register={false}/>
    }
])

root.render(
    <React.StrictMode>
        <MyProvider>
            <RouterProvider router={router}/>
        </MyProvider>
    </React.StrictMode>
);

