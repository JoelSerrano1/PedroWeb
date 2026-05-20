import type { ComponentType } from "react";

import { RevealOnScroll } from "./RevealOnScroll";
import {
    IconAndroid,
    IconApple,
    IconIos,
    IconLinux,
    IconWindows,
} from "./PlatformIcons";

const PLATFORMS: {
    name: string;
    className: string;
    Icon: ComponentType<{ className?: string }>;
}[] = [
    {
        name: "Windows",
        className: "landing-platform--windows",
        Icon: IconWindows,
    },
    {
        name: "Linux",
        className: "landing-platform--linux",
        Icon: IconLinux,
    },
    {
        name: "macOS",
        className: "landing-platform--mac",
        Icon: IconApple,
    },
    {
        name: "Android",
        className: "landing-platform--android",
        Icon: IconAndroid,
    },
    {
        name: "iOS",
        className: "landing-platform--ios",
        Icon: IconIos,
    },
];

export function LandingPlatforms() {
    return (
        <section id="plataformas" className="landing-section">
            <div className="landing-section-inner">
                <RevealOnScroll>
                    <span className="section-eyebrow">DÓNDE JUGAR</span>
                    <h2 className="pedro-title pedro-title-xl mb-4 text-center">PLATAFORMAS</h2>
                    <p className="pedro-hint pedro-hint-lg mx-auto mb-12 max-w-2xl text-center">
                        Pedro llega a escritorio y móvil. Elige el sistema que uses para la
                        experiencia completa del juego.
                    </p>
                </RevealOnScroll>

                <ul className="landing-platforms-grid list-none gap-5 p-0">
                    {PLATFORMS.map((p, i) => (
                        <RevealOnScroll
                            key={p.name}
                            className="h-full"
                            delayClass={
                                i === 1
                                    ? "reveal-delay-1"
                                    : i === 2
                                      ? "reveal-delay-2"
                                      : i === 3
                                        ? "reveal-delay-3"
                                        : ""
                            }
                        >
                            <li className={`landing-platform pedro-panel ${p.className}`}>
                                <p.Icon className="landing-platform__logo" />
                                <h3 className="pedro-feature-title">{p.name}</h3>
                            </li>
                        </RevealOnScroll>
                    ))}
                </ul>
            </div>
        </section>
    );
}
