"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type PedroButtonProps = {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit";
};

export function PedroButton({
    children,
    href,
    onClick,
    className = "",
    type = "button",
}: PedroButtonProps) {
    const classes = `pedro-btn pedro-btn-wide ${className}`.trim();

    const handleClick = () => {
        try {
            const audio = new Audio("/assets/sounds/SonidoBoton1.wav");
            void audio.play();
        } catch {
        }
        onClick?.();
    };

    if (href) {
        return (
            <Link href={href} className={classes} onClick={handleClick}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={classes} onClick={handleClick}>
            {children}
        </button>
    );
}
