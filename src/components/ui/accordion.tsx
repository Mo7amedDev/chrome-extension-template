import * as React from "react"
import { cn } from "@/lib/utlis"

interface AccordionItemProps {
    title: React.ReactNode
    children: React.ReactNode
    className?: string
    defaultOpen?: boolean
}

export function Accordion({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={cn("w-full border-t border-border", className)}>
            {children}
        </div>
    )
}

export function AccordionItem({ title, children, className, defaultOpen = false }: AccordionItemProps) {
    const [isOpen, setIsOpen] = React.useState(defaultOpen)

    return (
        <div className={cn("border-b border-border", className)}>
            <h3>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between py-4 text-sm font-medium transition-all hover:underline"
                >
                    {title}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={cn(
                            "h-4 w-4 shrink-0 transition-transform duration-200",
                            isOpen && "rotate-180"
                        )}
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </button>
            </h3>

            {/* The Collapsible Container */}
            <div
                className={cn(
                    "grid transition-[grid-template-rows] duration-200 ease-in-out",
                    isOpen ? "grid-template-rows-[1fr] opacity-100" : "grid-template-rows-[0fr] opacity-0"
                )}
            >
                <div className="overflow-hidden">
                    <div className="pb-4 pt-0 text-sm text-muted-foreground">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}