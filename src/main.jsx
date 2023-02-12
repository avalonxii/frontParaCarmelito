import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Despedida from './components/despedida/Despedida'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/despedida',
        element: <Despedida />,
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
