import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../Store/useAuthStore";

export default function DashboardLayout() {
    const logout  = useAuthStore((state) => state.logout);
    const Navigate = useNavigate();

    const handleLogout = () => {
        logout();
        Navigate("/login");
    }
  return (
    <div className="flex">
      {/* kiri */}
      <div className="min-h-screen bg-pink-200 w-64 flex flex-col justify-between p-5">
        {/* Satu */}
        <div>
          <div className="border-b border-black py-4">
            <h1 className="text-2xl text-red-900 font-semibold">
              Infovest Dashboard
            </h1>
          </div>
        </div>

        {/* Dua */}
        <div>
          <nav className="flex flex-col gap-2">
            <Link to="/dashboard" className="p-4 text-white text-lg hover:bg-red-900 transition ease-in duration-150">Dashboard</Link>
            <Link to="/speaker" className="p-4 text-white text-lg hover:bg-red-900 transition ease-in duration-150">Speaker</Link>
            <Link to="/event" className="p-4 text-white text-lg hover:bg-red-900 transition ease-in duration-150">Events</Link>
            <Link to="/category" className="p-4 text-white text-lg hover:bg-red-900 transition ease-in duration-150">Categories</Link>
          </nav>
        </div>

        {/* Tiga */}
        <div>
          <button onClick={handleLogout} className="bg-[#7B1D3F] p-4 w-full hover:bg-[#5a152e] cursor-pointer ">Logout</button>
        </div>
      </div>

      {/* kanan */}
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}
