import HomeHero from "../components/HomeHero";
import AnimatedProductCards from "../components/AnimatedProductCards";
import AnimatedTimeline from "../components/AnimatedTimeline";
import AnimatedStats from "../components/AnimatedStats";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import AnimatedTeam from "../components/AnimatedTeam";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <AnimatedProductCards />
      <AnimatedTimeline />
      <AnimatedStats />
      <TestimonialsCarousel />
      <AnimatedTeam />
      {/* Newsletter Signup Section */}
      {/* FAQ Section */}
      {/* Blog Preview Section */}
      {/* ...more modular, animated sections coming ... */}
    </div>
  );
}
