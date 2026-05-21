import Image from "next/image";
import type { CSSProperties } from "react";

import { PedroButton } from "./PedroButton";

const FAN_CARDS = [
    { src: 14, left: "8%", rot: -18, delay: 0 },
    { src: 22, left: "22%", rot: -8, delay: 0.4 },
    { src: 7, left: "38%", rot: 4, delay: 0.8 },
    { src: 31, left: "54%", rot: 12, delay: 1.2 },
    { src: 19, left: "70%", rot: 20, delay: 1.6 },
] as const;

export function LandingHero() {
    return (
        <section id="inicio" className="landing-hero">
            <div className="landing-hero__glow" aria-hidden />

            <div className="landing-hero__grid">
                <div className="text-center md:text-left">
                    <div className="landing-hero__logo-wrap mx-auto md:mx-0">
                        <Image
                            src="/assets/Icons/Logo.png"
                            alt="Pedro"
                            width={500}
                            height={230}
                            priority
                            className="h-auto w-52 md:w-64 lg:w-72"
                            style={{ imageRendering: "pixelated" }}
                        />
                    </div>

                    <h1 className="pedro-title pedro-title-xl mt-6 max-w-xl">LA CRUZADA</h1>

                    <p className="pedro-hint pedro-hint-lg mt-4 max-w-lg mx-auto md:mx-0">
                        Cartas. Favores. Y malas decisiones.
                    </p>

                    <p className="pedro-hint mx-auto md:mx-0 mt-4 max-w-lg text-lg leading-relaxed opacity-90">
                        Página oficial del juego: descubre el mapa, el combate y los favores que te acompañarán en el camino.
                        Aquí no se juega - solo se conoce la fortuna.
                    </p>

                    <div className="mt-10 flex w-full max-w-sm flex-col items-center gap-4 md:items-start">
                        <PedroButton href="#que-es">Qué es Pedro</PedroButton>
                        <PedroButton href="#como-funciona">Cómo funciona</PedroButton>
                        <PedroButton href="#plataformas">Plataformas</PedroButton>
                    </div>
                </div>

                <div className="relative">
                    <div className="landing-hero__portrait-frame">
                        <Image
                            src="/assets/Personajes/RamonSIdeEye.JPG"
                            alt="Ramon, personaje de Pedro"
                            fill
                            sizes="(max-width: 900px) 90vw, 340px"
                            className="object-cover object-top"
                            priority
                        />
                        <div className="landing-hero__card-fan">
                            {FAN_CARDS.map((c) => (
                                <div
                                    key={c.src}
                                    className="landing-hero__fan-card"
                                    style={
                                        {
                                            left: c.left,
                                            "--rot": `${c.rot}deg`,
                                            animationDelay: `${c.delay}s`,
                                        } as CSSProperties
                                    }
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={`/assets/Cartas/${c.src}.PNG`}
                                        alt=""
                                        width={62}
                                        height={88}
                                        className="h-full w-full object-cover"
                                        style={{ imageRendering: "pixelated" }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="landing-hero__scroll" aria-hidden>
                <span>Explorar</span>
                <div className="landing-hero__scroll-line" />
            </div>
        </section>
    );
}
