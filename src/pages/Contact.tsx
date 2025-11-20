import { useLocation } from "react-router-dom";
import PillNav from "@/components/PillNav";
import { Card } from "@/components/ui/card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  const location = useLocation();
  
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <PillNav 
        items={navItems}
        activeHref={location.pathname}
      />
      
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
            <h1 className="text-[1.75rem] leading-tight sm:text-4xl md:text-5xl font-bold">
              Let's Connect
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Questions? Need help getting started? Reach out through Instagram.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Card className="p-6 sm:p-8 bg-gradient-to-br from-primary/10 via-card to-muted border-border hover:border-primary/50 transition-all hover:scale-105">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              
              <div className="text-center space-y-3 sm:space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Quick Response</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Get answers within 24 hours on Instagram DM
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-8 sm:p-12 md:p-16 bg-gradient-to-br from-card via-card to-muted border-border text-center space-y-6 sm:space-y-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Instagram className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Follow on Instagram</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
                Daily AI coding tips and behind-the-scenes content
              </p>
            </div>

            <ShimmerButton 
              className="w-full sm:w-auto h-12 sm:h-14 text-base sm:text-lg shadow-xl"
              onClick={() => window.open('https://instagram.com/shohailmahmud09', '_blank')}
            >
              <Instagram className="w-5 h-5 mr-2" />
              @shohailmahmud09
            </ShimmerButton>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
