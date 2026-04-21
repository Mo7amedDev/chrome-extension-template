import { useState } from "react"

export function Modal({ open, onClose, children }: {
    open: boolean
    onClose: () => void
    children: React.ReactNode
}) {
    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg p-4 min-w-[300px]">
                {children}

                <button
                    onClick={onClose}
                    className="mt-4 text-sm text-gray-500"
                >
                    Close
                </button>
            </div>
        </div>
    )
}