import type { FieldValues, Path } from "react-hook-form";

interface InputTextProps<T extends FieldValues> {
    label: string;
    name?: Path<T>;
    nama?: Path<T>;
    type?: "text" | "email";
    placeholder?: string;
    register: any;
    error?: string;
}

const InputText = <T extends FieldValues>({
    label,
    name,
    nama,
    type = "text",
    placeholder,
    register,
    error,
}: InputTextProps<T>) => {
    const fieldName = (name ?? nama) as Path<T>;
    return (
        <div className="space-y-1.5">
            <label htmlFor={fieldName} className="text-sm font-semibold text-slate-700">
                {label}
            </label>
            <input
                id={fieldName}
                type={type}
                placeholder={placeholder ?? label}
                {...register(fieldName)}
                className={`w-full rounded-xl border px-3 py-2.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400
                ${error
                        ? "border-rose-400 bg-rose-50 focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
                        : "border-slate-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    }`}
            />
            {error && <p className="text-xs text-rose-600">{error}</p>}
        </div>
    );
};

export default InputText;