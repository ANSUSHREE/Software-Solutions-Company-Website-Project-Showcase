import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as AppToaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as SonnerToaster } from "sonner";

// ============= Main Pages =============
import Index from "./pages/Index";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import About from "./components/home/About";
import Contact from "./components/home/Contact";

// ============= Components =============
import AllReviews from "./components/ui/allreviews";
import ContactPage from "./components/ui/contact-page";
import InsightsPage from "./components/home/Insights";
import CostEstimationPage from "./components/home/Pricing";
import TestimonialCarousel from "./components/ui/Testimonial";

// ============= Services Pages =============
import WebDevelopment from "./pages/web";
import MobileAppDevelopment from "./pages/MobileApp";
import IoTDevelopment from "./pages/IoTDevelopment";
import HealthcareIotDevelopment from "./pages/HealthcareIotDevelopment";
import IotBigDataAnalytics from "./pages/IotBigDataAnalytics";
import DataAnalytics from "./pages/DataAnalytics";
import QAandTesting from "./pages/QAandTesting";
import FrontendDevelopment from "./pages/front-end-development-services";
import IoTConsulting from "./pages/iot_consulting";
import BackendDevelopment from "./pages/Backend_development";
import UserInterface from "./pages/User-interface";
import AIDevelopment from "./pages/AI_Developement";
import BlockchainDevelopment from "./pages/Blockchain_development";
import RubyOnRailsDevelopment from "./pages/Ruby_on_Rails_developement";
import NodeJsDevelopment from "./pages/nodejs_develoopment";
import JavaDevelopmentPage from "./pages/JavaDevelopmentPage";
import IoTSolutionsForSmartCities from "./pages/IoT_solutions_for_smart_cities";
import BusinessAnalysis from "./pages/BusinessAnalysis";
import AllServices from "./pages/All-Services";

// ============= Solutions Pages =============
import SaasDevelopment from "./pages/Saas-development";
import OpenaiDevelopment from "./pages/Openai-development";
import MVPDevelopment from "./pages/mvp-development";
import EnterpriseDevelopment from "./pages/Enterpraise-development";

// ============= Industries Pages =============
import HealthcareSoftware from "./pages/HealthcareSoftware";
import LogisticsSoftware from "./pages/LogisticsSoftware";
import FinantialSoftware from "./pages/FinantialSoftware";
import EdTechSoftware from "./pages/EdTechSoftware";
import AdvaceTech from "./pages/Advance-tech";

// ============= Company Pages =============
import ITStaffAugmentation from "./pages/it-staff-augmentation";
import EngagementModels from "./pages/Engagementmodels";
import DevelopmentLifecycle from "./pages/Developmentlifecycle";
import Careers from "./pages/Careers";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-white text-black">
          <BrowserRouter>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contactpage" element={<ContactPage />} />
              <Route path="/pricing" element={<CostEstimationPage />} />
              <Route path="/testimonials" element={<TestimonialCarousel />} />
              <Route path="/reviews" element={<AllReviews />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/all-services" element={<AllServices />} />

              {/* Services Routes */}
              <Route path="/services" element={<Services />} />
              <Route path="/services/web" element={<WebDevelopment />} />
              <Route path="/services/nodejs-development" element={<NodeJsDevelopment />} />
              <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
              <Route path="/services/iot-development" element={<IoTDevelopment />} />
              <Route path="/services/healthcare-iot-development" element={<HealthcareIotDevelopment />} />
              <Route path="/services/iot-big-data-analytics" element={<IotBigDataAnalytics />} />
              <Route path="/services/data-analytics" element={<DataAnalytics />} />
              <Route path="/services/qa-and-testing" element={<QAandTesting />} />
              <Route path="/services/BusinessAnalysis" element={<BusinessAnalysis />} />
              <Route path="/services/user-interface" element={<UserInterface />} />
              <Route path="/services/frontend-development" element={<FrontendDevelopment />} />
              <Route path="/services/java-development" element={<JavaDevelopmentPage />} />
              <Route path="/services/ai-development" element={<AIDevelopment />} />
              <Route path="/services/blockchain-development" element={<BlockchainDevelopment />} />
              <Route path="/services/ruby-on-rails-development" element={<RubyOnRailsDevelopment />} />
              <Route path="/services/backend-development" element={<BackendDevelopment />} />
              <Route path="/services/iot-consulting" element={<IoTConsulting />} />
              <Route path="/services/iot-solutions-for-smart-cities" element={<IoTSolutionsForSmartCities />} />

              {/* Solutions Routes */}
              <Route path="/solutions/enterprise-development" element={<EnterpriseDevelopment />} />
              <Route path="/solutions/mvp-development" element={<MVPDevelopment />} />
              <Route path="/solutions/saas-development" element={<SaasDevelopment />} />
              <Route path="/solutions/openai-development" element={<OpenaiDevelopment />} />

              {/* Industries Routes */}
              <Route path="/industries/healthcare-software" element={<HealthcareSoftware />} />
              <Route path="/industries/logistics-software" element={<LogisticsSoftware />} />
              <Route path="/industries/financial-software" element={<FinantialSoftware />} />
              <Route path="/industries/edtech-software" element={<EdTechSoftware />} />
              <Route path="/industries/advance-tech" element={<AdvaceTech />} />

              {/* Company Routes */}
              <Route path="/it-staff-augmentation" element={<ITStaffAugmentation />} />
              <Route path="/engagement-models" element={<EngagementModels />} />
              <Route path="/development-lifecycle" element={<DevelopmentLifecycle />} />
              <Route path="/careers" element={<Careers />} />

              {/* Catch-all Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>

          <AppToaster />
          <SonnerToaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;