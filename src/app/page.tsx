import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Hero } from "@/components/home/Hero";

export const metadata: Metadata = {
  title: siteConfig.tagline,
  description: siteConfig.description,
};
import { TrustedBy } from "@/components/home/TrustedBy";
import { Intro } from "@/components/home/Intro";
import { StaffingSolutions } from "@/components/home/StaffingSolutions";
import { WhoWeSupport } from "@/components/home/WhoWeSupport";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhySora } from "@/components/home/WhySora";
import { JoinTeamSection } from "@/components/home/JoinTeamSection";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Intro />
      <StaffingSolutions />
      <WhoWeSupport />
      <HowItWorks />
      <WhySora />
      <JoinTeamSection />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
