/* App — root component that assembles all page sections in order */

import Hero       from "./components/Hero";
import TrustedBy  from "./components/TrustedBy";
import AgenticAI  from "./components/AgenticAI";
import Services   from "./components/Services";
import Process    from "./components/Process";
import Team       from "./components/Team";
import Pricing    from "./components/Pricing";
import CTA        from "./components/CTA";
import Footer     from "./components/Footer";

const App = () => {
  return (
    <main className="bg-[#fafafa] overflow-x-hidden">
      {/* 1. Hero + Navbar */}
      <Hero />

      {/* 2. Trusted-by logos strip */}
      <TrustedBy />

      {/* 3. Agentic AI stats card */}
      <AgenticAI />

      {/* 4. Services grid */}
      <Services />

      {/* 5. Process steps */}
      <Process />

      {/* 6. Team member cards */}
      <Team />

      {/* 7. Pricing tiers */}
      <Pricing />

      {/* 8. Call-to-action banner */}
      <CTA />

      {/* 9. Footer */}
      <Footer />
    </main>
  );
};

export default App;
