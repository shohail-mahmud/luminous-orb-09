import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation, Link } from "react-router-dom";
import PillNav from "@/components/PillNav";
import Orb from "@/components/Orb";
import RotatingText from "@/components/RotatingText";
import ScrollReveal from "@/components/ScrollReveal";
import Carousel from "@/components/Carousel";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Sparkles, Zap, Lock, Brain, Lightbulb, Rocket, Play, Code2, Trophy, BookOpen, Users } from "lucide-react";
import { FiCpu, FiZap, FiTarget, FiTrendingUp, FiGlobe } from "react-icons/fi";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/animate-ui/components/radix/accordion';
const Index = () => {
  const location = useLocation();
  
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];
  
  const aiCarouselItems = [{
    title: 'Learn AI Coding',
    description: 'Master AI-assisted development from scratch.',
    id: 1,
    icon: <FiCpu className="h-[16px] w-[16px] text-white" />
  }, {
    title: 'Build Real Projects',
    description: 'Create production apps with AI tools.',
    id: 2,
    icon: <FiZap className="h-[16px] w-[16px] text-white" />
  }, {
    title: 'Expert Techniques',
    description: 'Learn professional AI development workflows.',
    id: 3,
    icon: <FiTarget className="h-[16px] w-[16px] text-white" />
  }, {
    title: 'Career Growth',
    description: '10x your productivity and value.',
    id: 4,
    icon: <FiTrendingUp className="h-[16px] w-[16px] text-white" />
  }, {
    title: 'Community Support',
    description: 'Join thousands of AI developers.',
    id: 5,
    icon: <FiGlobe className="h-[16px] w-[16px] text-white" />
  }];
  return <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <PillNav 
        items={navItems}
        activeHref={location.pathname}
      />
      
      {/* Hero Section with Orb Background */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-20 pb-8 sm:pb-12">
        {/* Orb as Background - Absolutely positioned to fill entire hero */}
        <div className="absolute inset-0 overflow-hidden">
          <Orb hue={0} hoverIntensity={0.15} rotateOnHover={false} forceHoverState={false} />
        </div>
        
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl text-center space-y-3 sm:space-y-6 md:space-y-8 animate-fade-in mx-auto">
            <h1 className="text-[1.5rem] leading-[1.2] sm:text-5xl md:text-6xl lg:text-7xl font-bold">
               Master AI-Powered{" "}
               <span className="inline-block align-middle relative z-20">
                 <RotatingText 
                   texts={["Coding", "Development", "Programming", "Building"]} 
                   rotationInterval={3000} 
                   staggerDuration={0.03} 
                   mainClassName="inline-flex font-extrabold whitespace-nowrap text-[1.5rem] sm:text-5xl md:text-6xl lg:text-7xl"
                   elementLevelClassName="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
                 />
               </span>
             </h1>
            
            <p className="text-[0.875rem] leading-[1.4] sm:text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-3xl mx-auto">
              Learn how to build production-ready applications 10x faster using AI. No prior coding experience needed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 justify-center pt-2 sm:pt-4">
              <ShimmerButton 
                className="w-full sm:w-auto h-11 sm:h-14 text-sm sm:text-lg shadow-xl"
                onClick={() => window.open('https://instagram.com/shohailmahmud09', '_blank')}
              >
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5 sm:mr-2" />
                Enroll Now
              </ShimmerButton>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn AI Coding Section */}
      <section className="py-8 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 relative bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-12 md:mb-16 space-y-2 sm:space-y-4">
            <ScrollReveal containerClassName="mb-2 sm:mb-4" textClassName="text-[1.5rem] leading-tight sm:text-4xl md:text-5xl font-bold" baseOpacity={0.2} baseRotation={2}>
              Why Learn AI Coding?
            </ScrollReveal>
            <p className="text-[0.875rem] leading-[1.4] sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              AI is transforming software development. Learn to use it or get left behind.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
            {[{
            icon: Brain,
            title: "10x Productivity",
            description: "Build in hours what used to take weeks. AI writes code, fixes bugs, and optimizes performance."
          }, {
            icon: Zap,
            title: "No Experience Needed",
            description: "Start coding today even if you're a complete beginner. AI guides you every step of the way."
          }, {
            icon: Code2,
            title: "Real-World Projects",
            description: "Build actual apps, not toy examples. Portfolio-ready projects from day one."
          }].map((feature, i) => <Card key={i} className="p-4 sm:p-6 md:p-8 bg-card border-border hover:border-primary/50 transition-all hover:scale-105 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-[0.875rem] leading-[1.4] sm:text-base text-muted-foreground">
                  {feature.description}
                </p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* What You'll Learn Carousel */}
      <section className="py-8 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 relative bg-muted/30 overflow-hidden">
        <div className="container max-w-5xl mx-auto">
          <div className="mb-6 sm:mb-10 md:mb-14 space-y-2 sm:space-y-4 text-center">
            <h2 className="text-[1.5rem] leading-tight sm:text-4xl md:text-5xl font-bold">
              What You'll Learn
            </h2>
            <p className="text-[0.875rem] leading-[1.4] sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete curriculum designed to take you from zero to AI developer
            </p>
          </div>
          <div className="flex justify-center w-full">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
              <Carousel
                items={aiCarouselItems}
                baseWidth={320}
                autoplay={true}
                autoplayDelay={4000}
                pauseOnHover={true}
                loop={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Benefits Section */}
      <section className="py-8 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 relative bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="space-y-3 sm:space-y-6 order-2 md:order-1">
              <h2 className="text-[1.5rem] leading-tight sm:text-4xl md:text-5xl font-bold">
                Transform Your Career in Weeks
              </h2>
              <p className="text-[0.875rem] leading-[1.4] sm:text-base md:text-lg text-muted-foreground">
                Join thousands who've mastered AI-powered development and multiplied their productivity.
              </p>
              <div className="space-y-2.5 sm:space-y-4 pt-1 sm:pt-2">
                {[{
                icon: Lightbulb,
                text: "Learn from real-world projects"
              }, {
                icon: Rocket,
                text: "Build production-ready apps"
              }, {
                icon: Sparkles,
                text: "Get personalized AI guidance"
              }].map((item, i) => <div key={i} className="flex items-center gap-2.5 sm:gap-4">
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-[0.875rem] leading-[1.4] sm:text-base md:text-lg text-foreground font-medium">{item.text}</span>
                  </div>)}
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <Card className="p-5 sm:p-8 md:p-10 bg-gradient-to-br from-primary/10 via-card to-secondary/10 border-border shadow-xl">
                <div className="space-y-3 sm:space-y-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold">Structured Learning Path</h3>
                  <p className="text-[0.875rem] leading-[1.4] sm:text-base md:text-lg text-muted-foreground">
                    From fundamentals to advanced techniques, our curriculum is designed to make you job-ready in AI development.
                  </p>
                  <Link to="/pricing">
                    <ShimmerButton className="w-full sm:w-auto text-sm sm:text-base shadow-2xl">
                      View Full Curriculum
                    </ShimmerButton>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 relative bg-muted/30">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-6 sm:mb-12 space-y-2 sm:space-y-4">
            <h2 className="text-[1.5rem] leading-tight sm:text-4xl md:text-5xl font-bold">
              Common Questions
            </h2>
            <p className="text-[0.875rem] leading-[1.4] sm:text-base md:text-lg text-muted-foreground">
              Everything you need to know about the course
            </p>
          </div>
          
          <div className="w-full space-y-2 sm:space-y-3">
            {[
              {
                title: 'Do I need coding experience?',
                content: 'No! This course is designed for complete beginners. AI tools handle the complex code while you learn the fundamentals. You\'ll be building real apps from day one.',
              },
              {
                title: 'How long does it take to complete?',
                content: 'Most students complete the core curriculum in 4-6 weeks, spending 1-2 hours per day. You can go at your own pace - all content is available immediately.',
              },
              {
                title: 'What if I get stuck?',
                content: 'You get direct support through Instagram DM. AI tools also provide real-time help as you code.',
              },
              {
                title: 'Will I build real projects?',
                content: 'Yes! You\'ll build production-ready applications including e-commerce sites, dashboards, and SaaS apps. All projects are portfolio-worthy.',
              },
            ].map((item, index) => (
              <details key={index} className="bg-card border border-border rounded-lg px-3 sm:px-6 group">
                <summary className="text-left text-[0.875rem] leading-[1.4] sm:text-base md:text-lg font-semibold cursor-pointer py-3 sm:py-5 list-none flex items-center justify-between">
                  {item.title}
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-[0.875rem] leading-[1.4] sm:text-base text-muted-foreground pb-3 sm:pb-5">
                  {item.content}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="container max-w-4xl mx-auto">
          <Card className="p-6 sm:p-10 md:p-12 lg:p-16 bg-gradient-to-br from-primary/10 via-card to-secondary/10 border-border text-center space-y-3 sm:space-y-6 md:space-y-8 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 animate-glow-pulse" />
            <div className="relative z-10 space-y-3 sm:space-y-6">
              <h2 className="text-[1.5rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Start Your AI Journey Today
              </h2>
              <p className="text-[0.875rem] leading-[1.4] sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of students learning to build production apps with AI. Start free, upgrade anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 justify-center pt-2 sm:pt-4">
                <ShimmerButton 
                  className="w-full sm:w-auto h-11 sm:h-14 text-sm sm:text-lg shadow-xl"
                  onClick={() => window.open('https://instagram.com/shohailmahmud09', '_blank')}
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 sm:mr-2" />
                  Start Free Course
                </ShimmerButton>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>;
};
export default Index;