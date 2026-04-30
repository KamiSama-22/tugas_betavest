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
    <div className="min-h-screen flex items-center justify-center bg-pink-200">
        <div className="w-full max-w-md rounded-2xl border border-pink-100 bg-white p-8 shadow-lg">
            
            <h2 className="text-xl font-bold text-slate-800">
                Form Registrasi Event
            </h2>
            <p className="mt-1 text-sm text-slate-500">
                Isi data di bawah ini dengan benar.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
                
                <InputText
                    label="Nama Lengkap"
                    name="nama"
                    placeholder="Contoh: Muhammad irhash syahid"
                    register={register}
                    error={errors.nama?.message}
                />

                <InputText
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Contoh: tuanmuda@gmail.com"
                    register={register}
                    error={errors.email?.message}
                />

                <InputPassword
                    label="Password"
                    name="password"
                    placeholder="Minimal 8 karakter"
                    register={register}
                    error={errors.password?.message}
                />

                <InputSelectEvent
                    label="Kategori Event"
                    name="event"
                    options={eventOptions}
                    register={register}
                    setValue={setValue}
                    error={errors.event?.message}
                />

                <Textarea
                    label="Bio Singkat"
                    name="bio"
                    placeholder="ceritakan tentang dirimu, curhat juga gpp..(maks 120 karakter)"
                    register={register}
                    error={errors.bio?.message}
                />

                <div className="flex justify-end gap-3 pt-2">
                    <Button type="button" variant="outline">
                        Reset
                    </Button>
                    <Button type="submit" variant="primary" loading={isSubmitting}>
                        Daftar
                    </Button>
                </div>

            </form>
        </div>
    </div>
    );
}
