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
import EventList from "./pages/Dashboard/event/EventList";
import Register from "./pages/register";
import CreateSpeakers from "./pages/Dashboard/Speaker/Speaker";

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
