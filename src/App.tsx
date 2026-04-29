/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { GlobalImpact } from "./components/sections/GlobalImpact";
import { PlatformStory } from "./components/sections/PlatformStory";
import { Industries } from "./components/sections/Industries";
import { ProofEngine } from "./components/sections/ProofEngine";
import { TrustEcosystem } from "./components/sections/TrustEcosystem";
import { ThoughtLeadership } from "./components/sections/ThoughtLeadership";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary-500/30 selection:text-primary-100">
      <Navbar />
      <main>
        <Hero />
        <GlobalImpact />
        <PlatformStory />
        <Industries />
        <ProofEngine />
        <TrustEcosystem />
        <ThoughtLeadership />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
