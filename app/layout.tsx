import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";

import "./globals.css";

const pressStart = Press_Start_2P({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-press-start",
});

const vt323 = VT323({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-vt323",
});

export const metadata: Metadata = {
    title: "Pedro — La Aventura Ibérica",
    description:
        "Página informativa del roguelike de cartas Pedro: mapa, combate, favores y plataformas (escritorio y móvil).",
    openGraph: {
        title: "Pedro — La Aventura Ibérica",
        description:
            "1875. Cartas. Favores. Y malas decisiones. Conoce el juego — sin jugar desde el navegador.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className={`${pressStart.variable} ${vt323.variable} h-full`}>
            <body className="min-h-full antialiased">{children}</body>
        </html>
    );
}
