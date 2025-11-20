import { useLocation } from "react-router-dom";
import PillNav from "@/components/PillNav";
import { Card } from "@/components/ui/card";
import { Brain, Zap, Code, Sparkles, Target } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const About = () => {
  const location = useLocation();
  
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];
  
  const tips = [
    {
      icon: Brain,
      title: "Learn AI Fundamentals",
      description: "Understand how AI coding assistants work and when to use them. Master the tools that are reshaping development."
    },
    {
      icon: Zap,
      title: "Build Real Projects",
      description: "Apply what you learn immediately with hands-on projects. From simple apps to complex systems."
    },
    {
      icon: Code,
      title: "Best Practices",
      description: "Learn industry-standard coding patterns and how to use AI to write production-quality code."
    },
    {
      icon: Sparkles,
      title: "Stay Ahead",
      description: "AI is evolving fast. Get continuous updates on new tools, techniques, and capabilities."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PillNav 
        items={navItems}
        activeHref={location.pathname}
      />
      
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
            <h1 className="text-[1.75rem] leading-tight sm:text-4xl md:text-5xl font-bold">
              Master AI Coding with Expert Guidance
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Learn the skills that matter. Build apps that work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-16">
            {tips.map((tip, index) => (
              <Card key={index} className="p-5 sm:p-6 md:p-8 bg-card border-border hover:border-primary/50 transition-all hover:scale-105">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                  <tip.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{tip.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {tip.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-16">
            <Card className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-primary/10 via-card to-muted border-border">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 sm:mb-6">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Our Mission</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                To make AI-powered development accessible to everyone. We believe anyone can learn to code with the right tools and guidance.
              </p>
            </Card>

            <Card className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-secondary/10 via-card to-muted border-border">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 sm:mb-6">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Why AI Coding</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                AI tools are revolutionizing software development. Learn to leverage them effectively and build applications faster than ever before.
              </p>
            </Card>
          </div>

          <Card className="p-6 sm:p-10 md:p-12 bg-gradient-to-br from-card via-card to-muted border-border">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Why Learn With Me?</h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-sm sm:text-base text-muted-foreground">
              <div className="space-y-3 sm:space-y-4">
                <p className="leading-relaxed">
                  <strong className="text-foreground text-base sm:text-lg">Practical Learning:</strong> Build real projects, not toy examples. Everything is hands-on coding.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground text-base sm:text-lg">Beginner Friendly:</strong> No prior experience needed. I start from zero and guide you step-by-step.
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <p className="leading-relaxed">
                  <strong className="text-foreground text-base sm:text-lg">All AI Tools:</strong> Get access to all the AI tools I use daily for coding.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground text-base sm:text-lg">Personal Experience:</strong> Learn from my real experience as a vibe coder.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
