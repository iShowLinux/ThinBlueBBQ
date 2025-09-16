import { Card } from "@/components/ui/card";
import { Trophy, Calendar, MapPin } from "lucide-react";

// Import competition images
import comp1 from "@/assets/comp-1.jpg";
import comp2 from "@/assets/comp-2.jpg";
import comp3 from "@/assets/comp-3.jpg";
import comp4 from "@/assets/comp-4.jpg";
import comp5 from "@/assets/comp-5.jpg";
import comp6 from "@/assets/comp-6.jpg";

const Competitions = () => {
  const competitionImages = [
    { src: comp1, alt: "BBQ Competition 1" },
    { src: comp2, alt: "BBQ Competition 2" },
    { src: comp3, alt: "BBQ Competition 3" },
    { src: comp4, alt: "BBQ Competition 4" },
    { src: comp5, alt: "BBQ Competition 5" },
    { src: comp6, alt: "BBQ Competition 6" },
  ];

  const upcomingEvents = [
    {
      date: "9-10 MAY",
      location: "Westland, Michigan",
      event: "Smoke in the Mitten - VFW 9885 'Bova'",
      isNew: true
    },
    {
      date: "17 MAY",
      location: "Durand, Michigan", 
      event: "Railroad Days Rib Burn",
      isNew: true
    },
    {
      date: "6-7 JUN",
      location: "Franklin, Indiana",
      event: "Hoosier BBQ Classic - Johnson County Fairgrounds",
      isNew: true
    },
    {
      date: "18-19 JUL",
      location: "Hillsboro, Ohio",
      event: "Buckeye BBQ Classic - Highland Country Fairgrounds",
      isNew: true
    },
    {
      date: "1-2 AUG",
      location: "Westland, Michigan",
      event: "All American BBQ Throwdown - VFW 9885 'Bova'",
      isNew: true
    },
    {
      date: "12-13 SEP",
      location: "Coldwater, Michigan",
      event: "September Fest BBQ Cookoff - Branch County Fairgrounds",
      isNew: true
    }
  ];

  return (
    <section id="competitions" className="py-20">
      <div className="container mx-auto px-4">
        {/* Competition Gallery */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Our Competitions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Celebrating the best BBQ competitions and pitmasters from around the world.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitionImages.map((comp, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-smooth group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={comp.src} 
                    alt={comp.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-foreground">{comp.alt}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="text-center">
          <h3 className="text-3xl font-bold gradient-text mb-8">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-bold text-primary">{event.date}</span>
                      {event.isNew && (
                        <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{event.event}</h4>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competitions;
