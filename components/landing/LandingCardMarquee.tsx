const MARQUEE_CARDS = [
    3, 7, 12, 18, 22, 28, 31, 5, 14, 19, 25, 33, 8, 16, 24, 30, 2, 11, 20, 27,
] as const;

export function LandingCardMarquee() {
    const loop = [...MARQUEE_CARDS, ...MARQUEE_CARDS];

    return (
        <div className="landing-marquee" aria-hidden>
            <div className="landing-marquee__track">
                {loop.map((n, i) => (
                    <div key={`${n}-${i}`} className="landing-marquee__card">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={`/assets/Cartas/${n}.PNG`}
                            alt=""
                            width={52}
                            height={74}
                            className="h-full w-full object-cover"
                            style={{ imageRendering: "pixelated" }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
