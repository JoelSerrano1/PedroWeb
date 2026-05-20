import Image from "next/image";

import { RevealOnScroll } from "./RevealOnScroll";

export function LandingAbout() {
    return (
        <section id="que-es" className="landing-section">
            <RevealOnScroll className="landing-section-inner">
                <span className="section-eyebrow">EL JUEGO</span>
                <h2 className="pedro-title pedro-title-xl mb-10 text-center">QUÉ ES PEDRO</h2>

                <div className="landing-about-grid">
                    <div className="landing-about-visual">
                        <Image
                            src="/assets/Background/MesaDeJuego.png"
                            alt=""
                            fill
                            className="mesa-bg object-cover"
                            sizes="(max-width: 768px) 100vw, 480px"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 p-4">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/assets/Cartas/back.PNG"
                                alt=""
                                width={120}
                                height={170}
                                className="rounded-md shadow-2xl"
                                style={{
                                    imageRendering: "pixelated",
                                    transform: "rotate(-6deg)",
                                }}
                            />
                        </div>
                    </div>

                    <div className="pedro-panel pedro-panel-glow px-7 py-9 md:px-10 md:py-11">
                        <p className="pedro-hint text-xl leading-relaxed md:text-2xl">
                            Pedro es una cruzada por mapas generados: avanzas de nodo en nodo,
                            te preparas en tiendas y cofres, y te enfrentas a rivales en combates
                            de cartas.
                        </p>
                        <p className="pedro-hint mt-6 text-xl leading-relaxed md:text-2xl">
                            El dominio, el robo y gritar «Pedro» en el momento justo marcan la
                            diferencia. Cada partida es una run distinta — pierdes, aprendes,
                            vuelves al mapa.
                        </p>
                        <p className="pedro-hint mt-6 text-lg opacity-85">
                            Sin atajos: solo cartas, favores y malas decisiones.
                        </p>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}
