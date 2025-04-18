import { cn } from "@/app/lib/utils";
import * as React from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Input = React.forwardRef(({ className, type, icon, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full h-[40px] px-3 border border-[rgba(225,228,234,0.08)] bg-white/10 shadow-[0_1px_2px_0_rgba(10,13,20,0.03)] rounded-[10px] flex items-center gap-2">
      {icon && icon}
      <input
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        className={cn(
          "w-full h-full bg-transparent outline-none text-white placeholder:text-[#ffffff] text-sm font-[family-name:var(--font-inter)] leading-5",
          className
        )}
        ref={ref}
        {...props}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="focus:outline-none text-white"
        >
          {showPassword ? (
            <IoEyeOffOutline size={20} />
          ) : (
            <IoEyeOutline size={20} />
          )}
        </button>
      )}
    </div>
  );
});
Input.displayName = "Input";

export { Input };
