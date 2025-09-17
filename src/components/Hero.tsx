import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Clock } from "lucide-react";
import heroBbq from "@/assets/hero-bbq.jpg";
import pigbbq from "@/assets/pigbbq.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBbq})` }}
      >
        <div 
          className="absolute inset-0"
          style={{ background: "var(--gradient-smoke)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Pig BBQ Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={pigbbq} 
              alt="Thin Blue BBQ Pig Logo" 
              className="w-96 h-96 md:w-126 md:h-126 object-contain animate-float"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            A BBQ Journey
            <span className="block gradient-accent-text">Like No Other</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Award-winning competition team and catering service based in Michigan. 
            We bring championship-level BBQ with bold flavors and warm hospitality to every event.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="glow"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Catering
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline-hero" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-slide-in">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-accent mb-2" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground mb-1">Award</div>
              <div className="text-primary-foreground/80">Winning Team</div>
            </div>
            
            <div className="text-center animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-accent mb-2" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground mb-1">500+</div>
              <div className="text-primary-foreground/80">Events Catered</div>
            </div>
            
            <div className="text-center animate-slide-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-8 w-8 text-accent mb-2" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground mb-1">10+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;