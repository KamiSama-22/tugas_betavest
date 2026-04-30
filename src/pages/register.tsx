import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import FormInput from "../components/ui/forminput";
import Button from "../components/ui/Button";

const scheme = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    email: z.string().min(1, "Email minimal 8 angka"),
    password: z.string().min(8, "Password minimal 8 angka"),
    password_confirm: z.string().min(8, "Password confirm harus diisi"),
});

export const Register = () => {
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(scheme)
    })

    return (
        <div>
            <form onSubmit={handleSubmit(console.log)}>
                <FormInput
                label="Nama"
                type="text"
                name="Nama"
                register={register}
                error={errors.nama?.message}
                 />
                <FormInput
                label="Email"
                type="text" 
                name="Email"
                register={register}
                error={errors.email?.message}
                />
                <FormInput
                label="Password"
                type="text"
                name="Password"
                register={register}
                error={errors.password?.message}
                />
                <FormInput
                label="Confirm Password"
                type="text"
                name="Password_confirm"
                register={register}
                error={errors.password_confirm?.message}
                />
                <div>
                    <Button label="Register" variant="primary" />
                </div>

            </form>

        </div>
    )
}