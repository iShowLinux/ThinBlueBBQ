import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Star, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

// Import hero images
import darrylCross from "@/assets/darryl-cross.jpg";
import fadiShukur from "@/assets/fadi-shukur.jpg";
import glennDoss from "@/assets/glenn-doss.jpg";

// Import additional officer images
import benny from "@/assets/benny.jpg";
import cameron from "@/assets/cameron.jpg";
import captain from "@/assets/captain.jpg";
import brian from "@/assets/brian.jpg";
import charles from "@/assets/charles.jpg";
import darren from "@/assets/darren.jpg";
import darryl from "@/assets/darryl.jpg";
import fadi from "@/assets/fadi.jpg";
import glen from "@/assets/glen.jpg";
import fbImg from "@/assets/FB_IMG_1738259014832.jpg";
import jennifer from "@/assets/jennifer.jpg";
import kenneth from "@/assets/kenneth.jpg";
import lindora from "@/assets/lindora.jpg";
import matthew from "@/assets/matthew.jpg";
import michael from "@/assets/michael.jpg";
import myron from "@/assets/myron.jpg";
import neil from "@/assets/neil.jpg";
import patrick from "@/assets/patrick.jpg";
import rasheen from "@/assets/rasheen.jpg";
import scott from "@/assets/scott.jpg";
import shawn from "@/assets/shawn.jpg";
import waldis from "@/assets/waldis.jpg";

// Import sponsor logos
import aceHardwareLogo from "@/assets/ace-hardware-logo.png";
import villageMarketLogo from "@/assets/village-market-logo.png";
import beaufortCyberLogo from "@/assets/beaufort-cyber-logo.png";

// Import affiliate logos
import fireDeptLogo from "@/assets/fire-dept-logo.png";
import kcbsLogo from "@/assets/kcbs-logo.png";

const Team = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320, // Width of one card + gap
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320, // Width of one card + gap
        behavior: 'smooth'
      });
    }
  };
  const teamMembers = [
    {
      name: "Greg Sawmiller",
      role: "Pit Master",
      description: "Leading our team with years of competition experience and a passion for perfect brisket."
    },
    {
      name: "Roy Elkins", 
      role: "Grill Master",
      description: "Expert in ribs and pork, bringing innovative techniques to traditional BBQ methods."
    },
    {
      name: "Jason Sawmiller",
      role: "Competition Specialist", 
      description: "Strategist and flavor expert, ensuring every competition entry meets championship standards."
    },
    {
      name: "Randy Elkins",
      role: "Catering Coordinator",
      description: "Managing our catering operations and ensuring every event exceeds expectations."
    },
    {
      name: "Greyson Sawmiller",
      role: "Assistant Pit Master",
      description: "The next generation of BBQ excellence, learning the craft and adding fresh perspectives."
    }
  ];

  const trueBlueHeroes = [
    {
      name: "Corporal Darryl Cross Jr.",
      title: "Corporal",
      description: "Honored and served with distinction. End of Watch: January 24, 2018. Length of Service: 3.5 Years",
      image: darrylCross
    },
    {
      name: "Police Officer Fadi Shukur",
      title: "Police Officer", 
      description: "Honored and served with distinction. End of Watch: January 24, 2018. Length of Service: 1 Year",
      image: fadiShukur
    },
    {
      name: "Police Officer Glenn Doss Jr.",
      title: "Police Officer",
      description: "Honored and served with distinction. End of Watch: January 26, 2018. Length of Service: 1.5 Years",
      image: glennDoss
    },
    {
      name: "Officer Benny",
      title: "Police Officer",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: benny
    },
    {
      name: "Officer Cameron",
      title: "Police Officer",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: cameron
    },
    {
      name: "Captain",
      title: "Captain",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: captain
    },
    {
      name: "Officer Brian",
      title: "Police Officer",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: brian
    },
    {
      name: "Officer Charles",
      title: "Police Officer",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: charles
    },
    {
      name: "Officer Darren",
      title: "Police Officer",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: darren
    },
    {
      name: "Officer Darryl",
      title: "Police Officer",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: darryl
    },
    {
      name: "Officer Fadi",
      title: "Police Officer",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: fadi
    },
    {
      name: "Officer Glen",
      title: "Police Officer",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: glen
    },
    {
      name: "Officer Jennifer",
      title: "Police Officer",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: jennifer
    },
    {
      name: "Officer Kenneth",
      title: "Police Officer",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: kenneth
    },
    {
      name: "Officer Lindora",
      title: "Police Officer",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: lindora
    },
    {
      name: "Officer Matthew",
      title: "Police Officer",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: matthew
    },
    {
      name: "Officer Michael",
      title: "Police Officer",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: michael
    },
    {
      name: "Officer Myron",
      title: "Police Officer",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: myron
    },
    {
      name: "Officer Neil",
      title: "Police Officer",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: neil
    },
    {
      name: "Officer Patrick",
      title: "Police Officer",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: patrick
    },
    {
      name: "Officer Rasheen",
      title: "Police Officer",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: rasheen
    },
    {
      name: "Officer Richard",
      title: "Police Officer",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: scott // Using scott image for Richard as I don't see richard.jpg
    },
    {
      name: "Officer Scott",
      title: "Police Officer",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: scott
    },
    {
      name: "Officer Shawn",
      title: "Police Officer",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: shawn
    },
    {
      name: "Officer Waldis",
      title: "Police Officer",
      description: "Honored and served with distinction. A dedicated officer who made the ultimate sacrifice.",
      image: waldis
    }
  ];

  const sponsors = [
    {
      name: "Baker's Ace Hardware",
      description: "Supporting us with quality tools and equipment for our BBQ operations.",
      logo: aceHardwareLogo,
      url: "https://bakersacehardware.com/"
    },
    {
      name: "Village Market",
      description: "Providing fresh, locally sourced ingredients for our award-winning recipes.",
      logo: villageMarketLogo,
      url: "https://villagemarket.net/"
    },
    {
      name: "Beaufort Cyber",
      description: "Technology and digital solutions partner helping us stay connected with our community.",
      logo: beaufortCyberLogo,
      url: "#" // No URL provided for Beaufort Cyber
    }
  ];

  const affiliates = [
    {
      name: "Fire Department",
      description: "Community safety and emergency services partner.",
      logo: fireDeptLogo,
      url: "#" // No URL provided for Fire Department
    },
    {
      name: "Kansas City Barbeque Society (KCBS)",
      description: "Official sanctioning body for our competition team.",
      logo: kcbsLogo,
      url: "https://www.kcbs.us/"
    },
    {
      name: "Great Lakes BBQ Association",
      description: "Regional BBQ organization supporting our competitions.",
      logo: kcbsLogo, // Using KCBS logo as placeholder
      url: "https://glbbqa.com/"
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* True Blue Heroes Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            True Blue Hero's
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Honoring the brave officers who served our community with dedication and valor.
          </p>
          
          {/* Horizontal Scrollable Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mb-4">
              <Button
                onClick={scrollLeft}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  {trueBlueHeroes.length} Heroes Total
                </p>
              </div>
              
              <Button
                onClick={scrollRight}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            >
              <div className="flex gap-6 pb-4 px-4" style={{ width: 'max-content' }}>
                {trueBlueHeroes.map((hero, index) => (
                  <Card 
                    key={index} 
                    className="p-6 text-center hover:shadow-lg transition-smooth smoke-shadow animate-fade-in border-primary/20 group flex-shrink-0 w-80 snap-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-smooth">
                      <img 
                        src={hero.image} 
                        alt={hero.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{hero.name}</h3>
                    <p className="text-primary font-medium mb-3">{hero.title}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{hero.description}</p>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Scroll Hint */}
            <div className="text-center mt-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <p className="text-sm text-primary font-medium">
                  Use buttons above or swipe to navigate
                </p>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Pit Crew Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Meet Our Pit Crew
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The passionate team behind every championship-level meal and memorable event.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-lg transition-smooth smoke-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
            </Card>
          ))}
        </div>

        {/* Sponsors Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">Our Sponsors</h3>
            <p className="text-muted-foreground">Thank you to our sponsors for their continued support!</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                target={sponsor.url !== "#" ? "_blank" : undefined}
                rel={sponsor.url !== "#" ? "noopener noreferrer" : undefined}
                className="block"
              >
                <Card 
                  className="p-6 text-center hover:shadow-lg transition-smooth animate-slide-in cursor-pointer group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {sponsor.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">{sponsor.description}</p>
                  {sponsor.url !== "#" && (
                    <div className="mt-3 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Visit Website →
                    </div>
                  )}
                </Card>
              </a>
            ))}
          </div>
        </div>

        {/* Affiliates Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">Our Affiliates</h3>
            <p className="text-muted-foreground">Proud members of these prestigious organizations</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {affiliates.map((affiliate, index) => (
              <a
                key={index}
                href={affiliate.url}
                target={affiliate.url !== "#" ? "_blank" : undefined}
                rel={affiliate.url !== "#" ? "noopener noreferrer" : undefined}
                className="block"
              >
                <Card 
                  className="p-6 text-center hover:shadow-lg transition-smooth animate-fade-in cursor-pointer group"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <img 
                      src={affiliate.logo} 
                      alt={affiliate.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {affiliate.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">{affiliate.description}</p>
                  {affiliate.url !== "#" && (
                    <div className="mt-3 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Visit Website →
                    </div>
                  )}
                </Card>
              </a>
            ))}
          </div>
        </div>

        {/* Sponsorship CTA */}
        <div className="text-center mt-16">
          <Card className="p-8 max-w-2xl mx-auto bg-gradient-to-r from-accent/10 to-secondary/10 border-accent/20">
            <h4 className="text-2xl font-bold mb-4 text-foreground">Become a Sponsor</h4>
            <p className="text-muted-foreground mb-6">
              Join our family of supporters and help us bring championship BBQ to more communities across Michigan.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center text-primary hover:text-primary-glow font-medium transition-smooth"
            >
              Contact us about sponsorship opportunities →
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;