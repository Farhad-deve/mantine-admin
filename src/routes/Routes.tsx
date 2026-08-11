import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { lazy } from "react";

const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage'));
const UsersPage = lazy(() => import('../pages/UsersPage'));
const FormsPage = lazy(() => import('../pages/FormsPage'));
const SettingsPage = lazy(() => import('../pages/SettingsPage'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <DashboardPage /> },
            { path: '/products', element: <ProductsPage /> },
            { path: '/users', element: <UsersPage /> },
            { path: '/forms', element: <FormsPage /> },
            { path: '/settings', element: <SettingsPage /> }
        ]
    }
])