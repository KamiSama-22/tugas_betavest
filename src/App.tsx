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
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputText from "./components/ui/inputText";
import InputPassword from "./components/ui/InputPassword";
import InputSelectEvent from "./components/ui/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "./components/ui/Button";
import Textarea from "./components/ui/TextArea";

type FormData = {
    nama: string;
    email: string;
    password: string;
    event: string;
    bio: string;
};

const schema = z.object({
    nama: z.string().min(1, "Nama lengkap wajib diisi"),
    email: z.string().email("Format email tidak valid"),
    password: z.string().min(8, "Password minimal 8 karakter"),
    event: z.string().min(1, "Kategori event wajib dipilih"),
    bio: z
        .string()
        .min(10, "Bio singkat minimal 10 karakter")
        .max(120, "Bio maksimal 120 karakter"),
});

export default function RegisterForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange",
        reValidateMode: "onChange",
    });

    const eventOptions = [
        { label: "Workshop Teknologi", value: "Workshop Teknologi" },
        { label: "Seminar Karier", value: "Seminar Karier" },
        { label: "IT Competition", value: "IT Competition" },
        { label: "Bootcamp Frontend", value: "Bootcamp Frontend" },
    ];

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1400));
        console.log(data);
        setIsSubmitting(false);
    };

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/seminar" element={<Seminar />} />
                        <Route path="/talkshow" element={<Talkshow />} />
                        <Route path="/" element={<Beranda />} />
                        <Route path="/competition" element={<Competition />} />
                        <Route path="/workshop" element={<Workshop />} />

                        <Route path ="/Categories" element={<CreateCategories />} />
                        <Route path ="/event" element={<EventList />} />
                        <Route path ="/speaker" element={<CreateSpeakers />} />
                    </Route>
                    
                    <Route element={<AuthLayout />}>
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Route>
                    
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
