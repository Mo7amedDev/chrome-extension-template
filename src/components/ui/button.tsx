import { cn } from "@/lib/utlis"
import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "destructive"
    size?: "sm" | "md" | "lg"
    loading?: boolean
}

export function Button({
    variant = "primary",
    size = "lg",
    loading = false,
    className,
    children,
    disabled,
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none"

    const variants = {
        primary:
            "bg-primary text-primary-foreground hover:bg-brand-hover",
        outline:
            "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
        destructive:
            "bg-red-500 text-white hover:bg-red-600",
    }

    const sizes = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-5 py-3 text-base",
    }

    return (
        <button
            className={cn(
                baseStyles,
                variants[variant],
                sizes[size],
                "disabled:opacity-50 disabled:cursor-not-allowed",
                className
            )}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? "Loading..." : children}
        </button>
    )
}