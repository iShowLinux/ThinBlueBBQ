import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Calendar, Drumstick, Soup, Coffee, User, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CateringPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    numberOfPeople: '',
    date: '',
    time: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const meatItems = [
    // Half Pan Items
    { name: "Beef Brisket Prime", size: "Half", unit: "pan", price: "$140" },
    { name: "Pulled Pork", size: "Half", unit: "pan", price: "$90" },
    { name: "Pulled Chicken", size: "Half", unit: "Kg", price: "$90" },
    { name: "Chicken Wings", size: "Half", unit: "pan", price: "$60" },
    { name: "Chicken (Fried or Baked)", size: "Half", unit: "pan", price: "$80" },
    { name: "St. Louis Style Ribs", size: "per", unit: "slab", price: "$28" },
    { name: "Mostaccioli with Meat", size: "Half", unit: "pan", price: "$75" },
    { name: "Baked Ham", size: "Half", unit: "pan", price: "$75" },
    // Full Pan Items
    { name: "Beef Brisket Prime", size: "Full", unit: "pan", price: "$280" },
    { name: "Pulled Pork", size: "Full", unit: "pan", price: "$180" },
    { name: "Pulled Chicken", size: "Full", unit: "pan", price: "$180" },
    { name: "Chicken Wings", size: "Full", unit: "pan", price: "$120" },
    { name: "Chicken (Fried or Baked)", size: "Full", unit: "pan", price: "$160" },
    { name: "Mostaccioli with Meat", size: "Full", unit: "pan", price: "$115" },
    { name: "Baked Ham", size: "Full", unit: "pan", price: "$140" },
    { name: "Hamburgers and Hotdogs", size: "Full", unit: "pan", price: "Determined by Event" }
  ];

  const sideItems = [
    // Half Pan Items
    { name: "Tri-State Mac", size: "Half", unit: "pan", price: "$60" },
    { name: "Southern Green Beans", size: "Half", unit: "pan", price: "$40" },
    { name: "Baked Beans", size: "Half", unit: "pan", price: "$30" },
    { name: "Street Corn", size: "Half", unit: "pan", price: "$30" },
    { name: "Mashed Potato Gravy", size: "Half", unit: "pan", price: "$40" },
    { name: "Roasted Potatoes", size: "Half", unit: "pan", price: "$40" },
    { name: "Mostaccioli", size: "Half", unit: "pan", price: "$40" },
    { name: "Coleslaw", size: "Half", unit: "pan", price: "$30" },
    { name: "Potato Salad", size: "Half", unit: "pan", price: "$40" },
    { name: "Pasta Salad", size: "Half", unit: "pan", price: "$40" },
    { name: "Cornbread", size: "1", unit: "each", price: "$1" },
    // Full Pan Items
    { name: "Tri-State Mac", size: "Full", unit: "pan", price: "$100" },
    { name: "Southern Green Beans", size: "Full", unit: "pan", price: "$80" },
    { name: "Baked Beans", size: "Full", unit: "pan", price: "$60" },
    { name: "Street Corn", size: "Full", unit: "pan", price: "$60" },
    { name: "Mashed Potato Gravy", size: "Full", unit: "pan", price: "$80" },
    { name: "Roasted Potatoes", size: "Full", unit: "pan", price: "$80" },
    { name: "Mostaccioli", size: "Full", unit: "pan", price: "$80" },
    { name: "Coleslaw", size: "Full", unit: "pan", price: "$60" },
    { name: "Potato Salad", size: "Full", unit: "pan", price: "$80" },
    { name: "Pasta Salad", size: "Full", unit: "pan", price: "$80" },
    { name: "Rolls", size: "1", unit: "each", price: "$1" }
  ];

  const concessionItems = [
    { name: "Hot Dogs", size: "1", unit: "Item", price: "$4.00" },
    { name: "Hot Dog Combo", size: "1", unit: "Combo", price: "$8.00" },
    { name: "Pizza Rolls", size: "1", unit: "Item", price: "$8.00" },
    { name: "Walking Taco", size: "1", unit: "Item", price: "$6.00" },
    { name: "Loaded Nachos", size: "1", unit: "Item", price: "$6.00" },
    { name: "Popcorn", size: "1", unit: "Item", price: "$4.00" },
    { name: "Nachos", size: "1", unit: "Item", price: "$4.00" },
    { name: "Drinks", size: "1", unit: "Drink", price: "$3.00" }
  ];

  const perPersonItems = [
    { name: "One Meat, Two Sides", description: "(One Hot/ One Cold)", price: "$14" },
    { name: "Two Meat, Two Sides", description: "(One Hot/ One Cold)", price: "$18" },
    { name: "Two Meat, Three Sides", description: "(Any Combo)", price: "$20" },
    { name: "Three Meat, Four Sides", description: "(Any Combo)", price: "$25" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/')}
                className="text-primary-foreground hover:bg-primary-foreground/20"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Main Site
              </Button>
              <h1 className="text-2xl font-bold">Thin Blue BBQ - Catering Menu</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Catering Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Championship-level BBQ catering for your special events. All orders available for pickup or delivery.
          </p>
        </div>

        {/* Menu Tabs */}
        <Tabs defaultValue="meat" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="meat" className="flex items-center gap-2">
              <Drumstick className="h-4 w-4" />
              <span className="hidden sm:inline">Meat</span>
            </TabsTrigger>
            <TabsTrigger value="sides" className="flex items-center gap-2">
              <Soup className="h-4 w-4" />
              <span className="hidden sm:inline">Sides</span>
            </TabsTrigger>
            <TabsTrigger value="concessions" className="flex items-center gap-2">
              <Coffee className="h-4 w-4" />
              <span className="hidden sm:inline">Concessions</span>
            </TabsTrigger>
            <TabsTrigger value="per-person" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Per Person</span>
            </TabsTrigger>
          </TabsList>

          {/* Meat Tab */}
          <TabsContent value="meat">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Meat Selection</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-primary">Half Pan</h4>
                  <div className="space-y-4">
                    {meatItems.filter(item => item.size === "Half" || item.size === "per").map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <div>
                          <h5 className="font-medium">{item.name}</h5>
                          <span className="text-sm text-muted-foreground">{item.size} {item.unit}</span>
                        </div>
                        <span className="font-bold text-primary">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-primary">Full Pan</h4>
                  <div className="space-y-4">
                    {meatItems.filter(item => item.size === "Full").map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <div>
                          <h5 className="font-medium">{item.name}</h5>
                          <span className="text-sm text-muted-foreground">{item.size} {item.unit}</span>
                        </div>
                        <span className="font-bold text-primary">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Sides Tab */}
          <TabsContent value="sides">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Side Dishes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-primary">Half Pan</h4>
                  <div className="space-y-4">
                    {sideItems.filter(item => item.size === "Half" || item.size === "1").map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <div>
                          <h5 className="font-medium">{item.name}</h5>
                          <span className="text-sm text-muted-foreground">{item.size} {item.unit}</span>
                        </div>
                        <span className="font-bold text-primary">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-primary">Full Pan</h4>
                  <div className="space-y-4">
                    {sideItems.filter(item => item.size === "Full").map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <div>
                          <h5 className="font-medium">{item.name}</h5>
                          <span className="text-sm text-muted-foreground">{item.size} {item.unit}</span>
                        </div>
                        <span className="font-bold text-primary">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Concessions Tab */}
          <TabsContent value="concessions">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Concessions</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {concessionItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                    <div>
                      <h5 className="font-medium">{item.name}</h5>
                      <span className="text-sm text-muted-foreground">{item.size} {item.unit}</span>
                    </div>
                    <span className="font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Per Person Tab */}
          <TabsContent value="per-person">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Per Person Packages</h3>
              <div className="max-w-2xl mx-auto">
                <div className="space-y-6">
                  {perPersonItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                      <div>
                        <h5 className="font-medium text-lg">{item.name}</h5>
                        <span className="text-sm text-muted-foreground">{item.description}</span>
                      </div>
                      <span className="font-bold text-primary text-xl">{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-primary/10 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Per Person Events Include:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Garden Salad or Spring Salad</li>
                    <li>• Bread or Rolls</li>
                    <li>• Dessert</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Additional Information */}
        <Card className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <h3 className="text-xl font-bold mb-4 text-center">Important Information</h3>
          <ul className="space-y-2 text-muted-foreground max-w-2xl mx-auto">
            <li>• All orders are available for Pickup or Delivery</li>
            <li>• A delivery fee of $75.00 will be applied</li>
            <li>• On-Site Cook Fee - $500</li>
            <li>• Plates, utensils, napkins, buns, and chaffing dishes can be purchased for an additional charge</li>
          </ul>
        </Card>

        {/* Catering Request Form */}
        <Card className="mt-12 p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold gradient-text mb-4">Request Catering</h3>
            <p className="text-muted-foreground">Guarantee your experience by reserving catering in advance.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Number of People *</label>
                <input
                  type="number"
                  name="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Time *</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Please select</option>
                  <option value="Breakfast: 8AM to 10AM">Breakfast: 8AM to 10AM</option>
                  <option value="Lunch: 12PM to 02PM">Lunch: 12PM to 02PM</option>
                  <option value="Dinner: 8PM to 11PM">Dinner: 8PM to 11PM</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Tell us about your event and any special requirements..."
              />
            </div>
            
            <div className="text-center">
              <Button type="submit" variant="hero" size="lg" className="glow">
                <Calendar className="mr-2 h-5 w-5" />
                Request Catering
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default CateringPage;
