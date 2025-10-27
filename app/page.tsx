import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { CommunitySection } from "@/components/community-section";
import { Footer } from "@/components/footer";
import GettingStarted from "@/components/get-started-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background container mx-auto">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <GettingStarted />
        {/* <CommunitySection /> */}
      </main>
      <Footer />
    </div>
  );
}
