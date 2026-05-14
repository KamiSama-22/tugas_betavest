import { useAuthStore } from "../Store/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtechedRoute(){
    const {isAuthenticated} = useAuthStore();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    return <Outlet />;
}