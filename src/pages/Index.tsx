import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import UseCaseTabs from "@/components/UseCaseTabs";
import ROICalculator from "@/components/ROICalculator";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import LiveActivityToast from "@/components/LiveActivityToast";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeatureGrid />
      <UseCaseTabs />
      <ROICalculator />
      <FAQSection />
      <CTASection />
      <Footer />
      <LiveActivityToast />
    </main>
  );
};

export default Index;
