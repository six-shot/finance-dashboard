import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const buttonVariants = cva(
  " flex  items-center gap-2  text-sm  font-[family-name:var(--font-inter)]  cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-[#335CFF]  rounded-[10px] text-white",
        destructive: "bg-red-500 text-gray-50 hover:bg-red-500/90",
        outline:
          "border border-[#E1E4EA] bg-white rounded-[8px] text-[#525866]",
        secondary: "border border-white/10 bg-[#242424]",
        ghost: "hover:bg-gray-100 hover:text-gray-900",
        link: "text-gray-900 underline-offset-4 hover:underline",
      },
      size: {
        default: " h-[40px] px-[14px] ",
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
