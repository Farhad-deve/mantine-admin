import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { lazy } from "react";

const DashboardPage = lazy(() => import('../pages/Dashboard'));
const ProductsPage = lazy(() => import('../pages/Products'));
const UsersPage = lazy(() => import('../pages/Users'));
const FormsPage = lazy(() => import('../pages/Forms'));
const SettingsPage = lazy(() => import('../pages/Settings'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
            {
                path: '/products',
                element: <ProductsPage />
            },
            {
                path: '/users',
                element: <UsersPage />
            },
            {
                path: '/forms',
                element: <FormsPage />
            },
            {
                path: '/settings',
                element: <SettingsPage />
            }
        ]
    }
])