import { Navigate, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Industries from "@/pages/Industries";
import IndustryDetail from "@/pages/IndustryDetail";
import HowWeWork from "@/pages/HowWeWork";
import HealthCheck from "@/pages/HealthCheck";
import About from "@/pages/About";
import Insights from "@/pages/Insights";
import ArticleDetail from "@/pages/ArticleDetail";
import Contact from "@/pages/Contact";
import StartProject from "@/pages/StartProject";
import Faq from "@/pages/Faq";
import EngagementModels from "@/pages/EngagementModels";
import Legal from "@/pages/Legal";
import Pricing from "@/pages/Pricing";
import CostCalculator from "@/pages/CostCalculator";
import Careers from "@/pages/Careers";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/:slug" element={<IndustryDetail />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        {/* Case studies removed until real client work can be published; old links go home. */}
        <Route path="/case-studies/*" element={<Navigate to="/" replace />} />
        <Route path="/project-health-check" element={<HealthCheck />} />
        <Route path="/about" element={<About />} />
        {/* Team page parked until profiles are finalized — restore <Team /> here when ready. */}
        <Route path="/team" element={<Navigate to="/about" replace />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<ArticleDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/start-a-project" element={<StartProject />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/engagement-models" element={<EngagementModels />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/cost-of-delay-calculator" element={<CostCalculator />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy" element={<Legal />} />
        <Route path="/terms" element={<Legal />} />
        <Route path="/cookies" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
