import { cn } from "@/lib/utlis";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "bg-card    rounded-lg shadow-lg p-4",
                className
            )}
            {...props}
        />
    )
}