import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {MyProvider} from "./context";
import {Navigate, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import Authentication from "./shared/components/authentication/Authentication";
import useToken from "./shared/hooks/Token";
import CardPage from "./shared/components/CardPage";


const RootRouter = () => {
    const { getToken } = useToken();
    const token = getToken();
    console.log(token)



    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to='/login'/>
        },
        {
            path: '/todoList-form',
            element: <App/>,
        },
        {
            path: 'card/:id',
            element: <CardPage/>
        },
        {
            path: '/register',
            element: <Authentication register={true}/>
        },
        {
            path: '/login',
            element: <Authentication register={false}/>
        },

    ]);



    return (
        <React.StrictMode>
            <MyProvider>
                <RouterProvider router={router}/>
            </MyProvider>
        </React.StrictMode>
    );
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(<RootRouter />);