export interface ButtonProps {
  type?: "button" | "submit";
  children?: React.ReactNode;
  label?: string;
  variant?: "primary" | "outline";
  loading?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  children,
  label,
  variant = "primary",
  loading = false,
  className,
  onClick,
}) => {
  const baseStyle =
    "rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-70";
  const variantStyle =
    variant === "primary"
      ? "bg-indigo-600 text-white hover:bg-indigo-500"
      : "border border-indigo-300 text-indigo-700 hover:bg-indigo-50";
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`${baseStyle} ${variantStyle} ${className ?? ""}`}
    >
      {loading ? "Loading..." : (children ?? label)}
    </button>
  );
};

export default Button;