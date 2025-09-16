import { Card } from "@/components/ui/card";
import { Flame, Heart, Target } from "lucide-react";
import TwitchEmbed from "@/components/TwitchEmbed";
import contactImg from "@/assets/contact-us.jpg";

const About = () => {
  const values = [
    {
      icon: <Flame className="h-8 w-8" />,
      title: "Passion for BBQ",
      description: "Our team is driven by a shared love for bold flavors and the art of smoking. Every dish showcases our dedication to quality."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Community Service",
      description: "We're proud to serve our community with warm hospitality. BBQ is more than food—it's about bringing people together."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "As an award-winning competition team, we bring championship-level standards to every event, big or small."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Our BBQ Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Welcome to Thin Blue BBQ! Based in the heart of Michigan, we're a catering and 
            award-winning competition team with a passion for service and exceptional BBQ.
          </p>
        </div>

          <div className="grid md:grid-cols-2 gap-12 items-start md:items-center mb-16">
            <div className="md:col-span-2 animate-slide-in text-center mx-auto max-w-3xl">
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Tradition Meets Innovation
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We use fresh, locally sourced ingredients to craft our award-winning BBQ. 
                From slow-smoked brisket to perfectly seasoned ribs, every bite showcases 
                our dedication to quality and flavor.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a competition team, we bring our best to every event. We blend tradition 
                and innovation to deliver mouthwatering results that have earned us recognition 
                across Michigan and beyond.
              </p>
            </div>

            {/* Make the Twitch embed span both columns so it has room */}
            <div className="md:col-span-2 mt-6">
              <TwitchEmbed channel="ThinBlueBarBQue" autoplay={false} muted={true} height={360} />
            </div>

            <div className="md:col-span-2 grid gap-6 animate-fade-in items-start justify-center">
              <div className="mx-auto w-full max-w-md">
                <div className="rounded-lg overflow-hidden shadow">
                  <img
                    src={contactImg}
                    alt="About image"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <Card 
                    key={index} 
                    className="p-6 hover:shadow-lg transition-smooth smoke-shadow normalize-text"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-primary">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2 text-foreground">
                          {value.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;