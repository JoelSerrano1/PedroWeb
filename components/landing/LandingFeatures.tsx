import type { CSSProperties } from "react";

import { RevealOnScroll } from "./RevealOnScroll";

const FEATURES = [
    {
        title: "Mapa de cruzada",
        body: "Elige tu camino entre combates, tiendas, cofres y descansos. Cada run traza un mapa distinto.",
        cards: [5, 12, 23],
        bg: null as string | null,
    },
    {
        title: "Combate de cartas",
        body: "Dominio, robo, descarte y la palabra Pedro. Lucha por tu honor con tu libro de favores.",
        cards: [8, 19, 27],
        bg: "/assets/Background/MesaDeJuego.png",
    },
    {
        title: "Favores y bendiciónes",
        body: "Hasta seis favores antes de cada combate. Un sublime puede cambiar la partida entera.",
        cards: [3, 15, 31, 36],
        bg: null,
    },
] as const;

export function LandingFeatures() {
    return (
        <section id="como-funciona" className="landing-section">
            <div className="landing-section-inner">
                <RevealOnScroll>
                    <span className="section-eyebrow">MECÁNICAS</span>
                    <h2 className="pedro-title pedro-title-xl mb-4 text-center">CÓMO FUNCIONA</h2>
                    <p className="pedro-hint pedro-hint-lg mx-auto mb-12 max-w-2xl text-center">
                        Tres pilares deciden tu destino. Los favores, 
                        los trueques con el mercader y tus propias decisiones.

                    </p>
                </RevealOnScroll>

                <div className="grid gap-8 md:grid-cols-3">
                    {FEATURES.map((f, i) => (
                        <RevealOnScroll
                            key={f.title}
                            delayClass={i === 1 ? "reveal-delay-1" : i === 2 ? "reveal-delay-2" : ""}
                        >
                            <article className="landing-feature-card pedro-panel">
                                <div className="landing-feature-card__visual">
                                    {f.bg ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img src={f.bg} alt="" className="h-full w-full object-cover" />
                                    ) : null}
                                    <div className="landing-feature-card__cards">
                                        {f.cards.map((n, j) => (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                key={n}
                                                src={`/assets/Cartas/${n}.PNG`}
                                                alt=""
                                                style={
                                                    {
                                                        "--tilt": `${(j - 1) * 8}deg`,
                                                    } as CSSProperties
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="landing-feature-card__body">
                                    <h3 className="pedro-feature-title mb-3">{f.title}</h3>
                                    <p className="pedro-hint text-lg leading-relaxed">{f.body}</p>
                                </div>
                            </article>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
