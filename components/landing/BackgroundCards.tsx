"use client";

import { useEffect, useState } from "react";

const TOTAL_CARDS = 40;

type CardData = {
    id: string;
    cardNumber: number;
    delay: number;
};

function buildCards(count: number, prefix: string): CardData[] {
    return Array.from({ length: count }, (_, i) => ({
        id: `${prefix}-${i}`,
        cardNumber: Math.floor(Math.random() * TOTAL_CARDS) + 1,
        delay: Math.random() * 6,
    }));
}

function CardLayer({ cards, className }: { cards: CardData[]; className: string }) {
    return (
        <div className={className} aria-hidden>
            {cards.map((card) => (
                <div
                    key={card.id}
                    className="card-bg"
                    style={{ animationDelay: `-${card.delay}s` }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={`/assets/Cartas/${card.cardNumber}.PNG`}
                        alt=""
                        className="face front"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/Cartas/back.PNG" alt="" className="face back" />
                </div>
            ))}
        </div>
    );
}

export function BackgroundCards() {
    const [far, setFar] = useState<CardData[]>([]);
    const [near, setNear] = useState<CardData[]>([]);

    useEffect(() => {
        setFar(buildCards(48, "far"));
        setNear(buildCards(36, "near"));
    }, []);

    return (
        <>
            <div className="bg-scene" />
            <CardLayer cards={far} className="bg-cards bg-cards--far" />
            <CardLayer cards={near} className="bg-cards bg-cards--near" />
            <div className="bg-vignette" />
            <div className="bg-noise" />
        </>
    );
}
