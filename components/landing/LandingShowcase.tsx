import Image from "next/image";

import { RevealOnScroll } from "./RevealOnScroll";

export function LandingShowcase() {
    return (
        <div className="landing-showcase">
            <RevealOnScroll>
                <div className="landing-showcase__frame">
                    <Image
                        src="/assets/Background/MesaDeJuego.png"
                        alt="Mesa de combate de Pedro"
                        fill
                        sizes="100vw"
                        className="object-cover"
                    />
                    <div className="landing-showcase__overlay">
                        <span className="pedro-chip">Combate</span>
                        <p className="pedro-title pedro-title-xl max-w-lg">
                            LA MESA DONDE TODO SE DECIDE
                        </p>
                        <p className="pedro-hint max-w-md text-lg md:text-xl">
                            Pesetas, dominios, robos y favores. Un duelo táctico con reglas profundas,
                            personalización ilimitada y partidas intensas.
                        </p>
                    </div>
                </div>
            </RevealOnScroll>

            <div className="landing-ranking-strip">
                <RevealOnScroll delayClass="reveal-delay-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/assets/Background/Cartel_Ranking.png"
                        alt="Ranking de la cruzada"
                        width={420}
                        height={120}
                    />
                </RevealOnScroll>
            </div>
        </div>
    );
}
