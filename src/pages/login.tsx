import { useForm } from "react-hook-form";
import FormInput from "../components/ui/forminput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/Button";

const scheme = z.object({
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Password minimal 8 angka"),
});



export default function Login() {
        const {register, handleSubmit, formState:{errors}} = useForm({
            resolver: zodResolver(scheme)
        })
    return (
        <div>
            <form onSubmit={handleSubmit(console.log)}>
                <FormInput 
                label="email" 
                type="text" 
                name="email" 
                register={register} 
                error={errors.email?.message} />

                <FormInput 
                label="password" 
                type="text" 
                name="password" 
                register={register} 
                error={errors.password?.message} />


                <div>
                    <Button label="Login" variant="primary" />
                </div>
            </form>
        </div>
    )
}