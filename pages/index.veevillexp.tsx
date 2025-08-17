"use client";

import React from "react";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Features from "@/components/Features";
import TargetAudience from "@/components/TargetAudience";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";
import Methodology from "@/components/Methodology";
import ContactForm from "@/components/ContactForm";

export default function VeevillexpHome() {
  return (
    <div className="relative">
      {/* Main Content with Snap Scroll */}
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden bg-white">
        <div id="hero" className="snap-start min-h-screen">
          <Hero />
        </div>
        <div id="value-proposition" className="snap-start min-h-screen">
          <ValueProposition />
        </div>
        <div id="features" className="snap-start min-h-screen">
          <Features />
        </div>
        {/* <div id="target-audience" className="snap-start min-h-screen">
          <TargetAudience />
        </div>
        <div id="client-logos" className="snap-start min-h-screen">
          <ClientLogos />
        </div>
        <div id="testimonials" className="snap-start min-h-screen">
          <Testimonials />
        </div>
        <div id="methodology" className="snap-start min-h-screen">
          <Methodology />
        </div>
        <div id="contact" className="snap-start min-h-screen">
          <ContactForm />
        </div> */}
      </main>
    </div>
  );
}
