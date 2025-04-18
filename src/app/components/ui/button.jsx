import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const buttonVariants = cva(
  "w-full h-[40px] rounded-[9px] text-sm text-white font-[family-name:var(--font-satoshi-medium)] leading-5 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-btn border border-[#FF7B1C]/30 ",
        destructive: "bg-red-500 text-gray-50 hover:bg-red-500/90",
        outline:
          "border border-gray-200 00 bg-white hover:bg-gray-100 hover:text-gray-900",
        secondary: "border border-white/10 bg-[#242424]",
        ghost: "hover:bg-gray-100 hover:text-gray-900",
        link: "text-gray-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = (
  { className, variant, size, asChild = false, ...props },
  ref
) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
};

Button.displayName = "Button";

export { Button, buttonVariants };
