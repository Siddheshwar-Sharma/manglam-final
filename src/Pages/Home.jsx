import { HeroSection } from "../Components/UI/HeroSection";
import { BusinessSection } from "../Components/UI/BusinessSection";
import { JourneySection } from "../components/UI/JourneySection";
import { PresenceSection } from "../components/UI/PresenceSection";
import { TestimonialsSection } from "../components/UI/TestimonialsSection";
// import { LifestyleSection } from "../Components/UI/LifestyleSection";



export const Home = () => {
  return (
    <>
      <HeroSection />
      <BusinessSection />
      <JourneySection />
      <PresenceSection />
      <TestimonialsSection />
      {/* <LifestyleSection /> */}
    </>
  );
};