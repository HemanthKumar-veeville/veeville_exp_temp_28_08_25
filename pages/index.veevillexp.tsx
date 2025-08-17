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
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      <Hero />
      <ValueProposition />
      <Features />
      <TargetAudience />
      <ClientLogos />
      <Testimonials />
      <Methodology />
      <ContactForm />
    </main>
  );
}
