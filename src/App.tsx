import { BrowserRouter, Route, Routes } from "react-router-dom";
import Competition from "./pages/competition";
import Login from "./pages/login";
import Beranda from "./pages/beranda";
import Seminar from "./pages/seminar";
import Talkshow from "./pages/Talkshow";
import MainLayout from "./layout/mainlayout";
import AuthLayout from "./layout/authlayout";
import Workshop from "./pages/workshop";
import CreateCategories from "./pages/Dashboard/Categories/CreateCategories";
import Register from "./pages/register";
import CreateSpeakers from "./pages/Dashboard/Speaker/Speaker";
import DashboardIndex from "./pages/Dashboard/DashboardIndex";
import ProtechedRoute from "./Route/ProtechedRoute";
import DashboardLayout from "./layout/DashboardLayout";
import EventList from "./pages/Dashboard/event/EventList";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Layout Utama (Landing Page / Publik) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/talkshow" element={<Talkshow />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/workshop" element={<Workshop />} />
          {/* HAPUS rute dashboard dari sini agar tidak bentrok */}
        </Route>

        {/* 2. Layout Auth (Login/Register) */}
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* 3. Protected Routes (Dashboard) */}
        <Route element={<ProtechedRoute />}>
          <Route element={<DashboardLayout />}>
            {/* Semua rute di bawah ini akan merender DashboardLayout + isinya di <Outlet /> */}
            <Route path="/dashboard" element={<DashboardIndex />} />
            <Route path="/category" element={<CreateCategories />} /> {/* Ubah path agar sesuai standar */}
            <Route path="/event" element={<EventList />} />
            <Route path="/speaker" element={<CreateSpeakers />} />
            
            {/* Jika ingin ada halaman khusus "Create", tambahkan rute baru */}
            <Route path="/category/create" element={<CreateCategories />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
