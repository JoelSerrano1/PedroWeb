import Image from "next/image";

export function LandingFooter() {
    return (
        <footer className="relative z-10 border-t border-amber-900/50 px-4 py-12 text-center">
            <Image
                src="/assets/Icons/Logo.png"
                alt=""
                width={140}
                height={46}
                className="mx-auto mb-4 h-auto w-[800px] opacity-80"
                style={{ imageRendering: "pixelated" }}
            />
            <p className="pedro-hint text-lg">Pedro - Aventura Ibérica</p>
            <p className="pedro-hint mt-2 text-base opacity-70">
                Página informativa · 1875
            </p>
        </footer>
    );
}
