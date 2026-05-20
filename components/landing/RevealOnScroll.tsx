"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function RevealOnScroll({
    children,
    className = "",
    delayClass = "",
}: {
    children: ReactNode;
    className?: string;
    delayClass?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${visible ? "reveal--in" : ""} ${delayClass} ${className}`.trim()}
        >
            {children}
        </div>
    );
}
