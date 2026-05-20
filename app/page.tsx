import { BackgroundCards } from "@/components/landing/BackgroundCards";
import { LandingAbout } from "@/components/landing/LandingAbout";
import { LandingCardMarquee } from "@/components/landing/LandingCardMarquee";
import { LandingFeatures } from "@/components/landing/LandingFeatures";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingPlatforms } from "@/components/landing/LandingPlatforms";
import { LandingShowcase } from "@/components/landing/LandingShowcase";

export default function HomePage() {
    return (
        <main className="relative">
            <BackgroundCards />
            <LandingHero />
            <LandingCardMarquee />
            <LandingAbout />
            <LandingFeatures />
            <LandingShowcase />
            <LandingPlatforms />
            <LandingFooter />
        </main>
    );
}
