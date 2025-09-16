import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, Trophy, Users, Utensils } from "lucide-react";
import cateringHero from "@/assets/catering-hero.jpg";
import competitionHero from "@/assets/competition-hero.jpg";

const Services = () => {
  const cateringFeatures = [
    "Corporate events & meetings",
    "Weddings & celebrations", 
    "Family reunions & parties",
    "Custom menu planning",
    "Professional setup & service",
    "Equipment & staff provided"
  ];

  const competitionFeatures = [
    "KCBS sanctioned competitions",
    "Award-winning recipes",
    "Championship experience",
    "Team competitions",
    "BBQ education & workshops",
    "Community representation"
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you need catering for your special event or want to see us compete, 
            we bring the same championship-level quality to everything we do.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Catering Service */}
          <Card className="overflow-hidden smoke-shadow hover:shadow-xl transition-smooth">
            <div 
              className="h-64 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${cateringHero})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-smoke/80 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <div className="flex items-center space-x-2 text-smoke-foreground">
                  <Utensils className="h-6 w-6" />
                  <span className="text-lg font-semibold">Premium Catering</span>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                BBQ Catering Services
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our expertise doesn't stop at the competition table — we offer catering 
                services for events big and small. Let Thin Blue BBQ make your next event 
                unforgettable with savory smoky goodness.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {cateringFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="default" 
                className="w-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Catering
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>

          {/* Competition Team */}
          <Card className="overflow-hidden smoke-shadow hover:shadow-xl transition-smooth">
            <div 
              className="h-64 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${competitionHero})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-smoke/80 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <div className="flex items-center space-x-2 text-smoke-foreground">
                  <Trophy className="h-6 w-6" />
                  <span className="text-lg font-semibold">Competition Team</span>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Award-Winning Competitors
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                As a competition team, we bring our best to every event. We blend tradition 
                and innovation to deliver mouthwatering results that have earned us recognition 
                across the BBQ competition circuit.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {competitionFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="secondary" className="w-full">
                <Trophy className="mr-2 h-4 w-4" />
                View Competitions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Experience Championship BBQ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether it's catering your next event or cheering us on at competitions, 
              we're here to serve up the best BBQ experience in Michigan.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="glow"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;