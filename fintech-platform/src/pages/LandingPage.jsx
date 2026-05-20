import React from "react";
import Button from "../components/ui/Button";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">
        Banking for the <br /> Next Generation
      </h1>
      <p className="text-xl text-text-secondary mb-10 max-w-2xl">
        Manage your assets, track spending, and grow your wealth with our all-in-one fintech platform.
      </p>
      <div className="flex gap-4">
        <Button size="lg">Get Started</Button>
        <Button variant="secondary" size="lg">Learn More</Button>
      </div>
    </div>
  );
};

export default LandingPage;
