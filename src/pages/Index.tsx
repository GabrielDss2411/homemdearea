
import { useRef } from "react";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import CoursePresentation from "@/components/CoursePresentation";
import SocialProof from "@/components/SocialProof";
import ValueStack from "@/components/ValueStack";
import Objections from "@/components/Objections";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  const scrollToCTA = () => {
    ctaRef.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div className="min-h-screen">
      <Hero onCtaClick={scrollToCTA} />
      <ProblemSolution />
      <CoursePresentation />
      <SocialProof />
      <ValueStack />
      <Objections />
      <div ref={ctaRef}>
        <FinalCTA />
      </div>
    </div>
  );
};

export default Index;
