import { useState } from "react";
import type { FieldValues, Path } from "react-hook-form";

interface InputPasswordProps<T extends FieldValues> {
    label: string;
    name?: Path<T>;
    nama?: Path<T>;
    placeholder?: string;
    register: any;
    error?: string;
}

const InputPassword = <T extends FieldValues>({
    label,
    name,
    nama,
    placeholder,
    register,
    error,
}: InputPasswordProps<T>) => {
    const [show, setShow] = useState<boolean>(false);
    const fieldName = (name ?? nama) as Path<T>;

    return (
        <div className="space-y-1.5">
            <label htmlFor={fieldName} className="text-sm font-semibold text-slate-700">
                {label}
            </label>

            <div className="relative">
                <input
                    id={fieldName}
                    type={show ? "text" : "password"}
                    {...register(fieldName)}
                    placeholder={placeholder ?? label}
                    className={`w-full rounded-xl border px-3 py-2.5 pr-16 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400
                    ${error
                            ? "border-rose-400 bg-rose-50 focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
                            : "border-slate-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        }`}
                />

                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-xs font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-indigo-600"
                >
                    {show ? "Hide" : "Show"}
                </button>
            </div>

            {error && <p className="text-xs text-rose-600">{error}</p>}
        </div>
    );
};

export default InputPassword;
