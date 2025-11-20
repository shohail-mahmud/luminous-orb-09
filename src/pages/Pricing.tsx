import { useLocation } from "react-router-dom";
import PillNav from "@/components/PillNav";
import { PricingSection } from "@/components/ui/pricing";

const Pricing = () => {
  const location = useLocation();
  
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  const plans = [
    {
      name: "Free Starter",
      info: "Perfect for exploring AI coding",
      price: {
        monthly: 0,
      },
      features: [
        { text: "5 introductory lessons" },
        { text: "Basic AI coding concepts" },
        { text: "Simple project templates" },
        { text: "Instagram DM support" }
      ],
      btn: {
        text: "Start Learning Free",
        href: "#",
        onClick: () => window.open('https://instagram.com/shohailmahmud09', '_blank')
      },
    },
    {
      highlighted: true,
      name: "Pro Developer",
      info: "Most popular - All AI tools + tasks",
      price: {
        monthly: 49,
      },
      features: [
        { text: "All AI tools I use", tooltip: "Get access to every AI tool in my workflow" },
        { text: "5 custom tasks completed", tooltip: "I'll handle 5 tasks for you" },
        { text: "Tool setup guides" },
        { text: "Priority Instagram support", tooltip: "Direct DM access for help" },
        { text: "Lifetime tool access" }
      ],
      btn: {
        text: "Get Pro Access",
        href: "#",
        onClick: () => window.open('https://instagram.com/shohailmahmud09', '_blank')
      },
    },
    {
      name: "Elite Mastery",
      info: "Advanced training + personal guidance",
      price: {
        monthly: 99,
      },
      features: [
        { text: "Everything in Pro" },
        { text: "How to use tools properly", tooltip: "Step-by-step training on each tool" },
        { text: "My vibe coding experience", tooltip: "Learn my personal workflow and techniques" },
        { text: "Advanced AI techniques" },
        { text: "Personal guidance sessions", tooltip: "Get personalized help when you need it" },
        { text: "Unlimited task support" }
      ],
      btn: {
        text: "Get Elite Access",
        href: "#",
        onClick: () => window.open('https://instagram.com/shohailmahmud09', '_blank')
      },
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PillNav 
        items={navItems}
        activeHref={location.pathname}
      />
      
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
        <PricingSection
          plans={plans}
          heading="Choose Your Plan"
          description="From beginner to expert - get the tools and guidance you need"
        />
      </div>
    </div>
  );
};

export default Pricing;
