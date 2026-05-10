import { BrowserRouter, Route, Routes } from "react-router-dom";
import Competition from "./pages/competition";
import Login from "./pages/login";
import Beranda from "./pages/beranda.tsx";
import Seminar from "./pages/seminar.tsx";
import Talkshow from "./pages/Talkshow.tsx";
import MainLayout from "./layout/mainlayout";
import AuthLayout from "./layout/authlayout";
import Workshop from "./pages/workshop.tsx";
import CreateCategories from "./pages/Dashboard/Categories/CreateCategories.tsx";
import EventList from "./pages/Dashboard/event/EventList.tsx";
import Register from "./pages/register.tsx";
import CreateSpeakers from "./pages/Dashboard/Speaker/Speaker.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Utama */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/talkshow" element={<Talkshow />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/workshop" element={<Workshop />} />
          
          {/* Dashboard Routes */}
          <Route path="/Categories" element={<CreateCategories />} />
          <Route path="/event" element={<EventList />} />
          <Route path="/speaker" element={<CreateSpeakers />} />
        </Route>

        {/* Layout Auth (Login/Register) */}
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;