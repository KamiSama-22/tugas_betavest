import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Home, User, Trophy, Wrench, Mic, Camera, Play } from "lucide-react";
import Redirect from "../components/ui/Redirect";

export default function mainlayout() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="w-full py-4">
        <Outlet />
      </main>
      <footer className="p-4 bg-[#fee3ec] ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6  py-10 bg-[#fee3ec]">
          {/* col 1 */}
          <div className=" justify-self-end">
            <img src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png" />
          </div>

          {/* col 2 */}
          <div className="p-5  justify-self-center">
            <h3 className="pb-5 font-semibold">MENU NAVIGASI</h3>
            <div className="text-gray-600 space-y-4">
              <Redirect title="Beranda" icon={<Home size={18} />} />
              <Redirect title="Seminar" icon={<User size={18} />} />
              <Redirect title="Competition" icon={<Trophy size={18} />} />
              <Redirect title="Workshop" icon={<Wrench size={18} />} />
              <Redirect title="Talkshow" icon={<Mic size={18} />} />
            </div>
          </div>

          {/* col 3 */}
          <div className="p-5 justify-self-center">
            <h3 className="pb-5 font-semibold">IKUTI KAMI</h3>
            <div className="text-gray-600 space-y-4">
              <Redirect title="Instagram" icon={<Camera size={18} />} />
              <Redirect title="Youtube" icon={<Play size={18} />} />
            </div>
          </div>

          {/* col 4 */}
          <div className="p-5 space-y-4 justify-self-center">
            <h3 className="pb-5 font-semibold">ALAMAT</h3>
            <img
              src="https://i.pinimg.com/1200x/bf/ac/3c/bfac3c919a5d09d57975efa6765116b1.jpg"
              className="max-w-60 max-h-40"
            />
          </div>
        </div>
        <div className="text-center">
            &copy; 2026 BetaVest. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
