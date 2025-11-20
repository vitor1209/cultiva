import { Outlet } from "react-router-dom";

// PrivateRoute: permite acesso a todos
export const PrivateRoute = () => {
    return <Outlet />;
};

// PublicRoute: permite acesso a todos
export const PublicRoute = () => {
    return <Outlet />;
};
