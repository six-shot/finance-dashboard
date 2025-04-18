"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const labelVariants = cva(
  "text-white text-sm font-[family-name:var(--font-satoshi-medium)] leading-5 "
);

const Label = ({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  >
    {props.children} {props.required && <span className="text-[#F83]">*</span>}
  </LabelPrimitive.Root>
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
