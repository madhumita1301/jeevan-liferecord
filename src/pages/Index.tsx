import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, HeartCrack, Gift } from "lucide-react";
import Navbar from "@/components/Navbar";
import heroBg from "@/assets/home-bg.jpg";
import birthIcon from "@/assets/birth-icon.jpg";
import deathIcon from "@/assets/death-icon.jpg";

const Index = () => {
  const services = [
    {
      title: "Birth Certificate",
      description: "Register your newborn and obtain an official birth certificate. Quick, secure, and hassle-free documentation for your child's future.",
      icon: Baby,
      image: birthIcon,
      link: "/register/birth",
      color: "from-accent to-accent/80"
    },
    {
      title: "Death Registration",
      description: "Register the passing of a loved one with dignity and care. Obtain official death certificates for legal and administrative purposes.",
      icon: HeartCrack,
      image: deathIcon,
      link: "/register/death",
      color: "from-primary to-primary/80"
    },
    {
      title: "Laadli Yojna",
      description: "Support for girl child welfare and empowerment. Access government schemes designed to ensure a bright future for daughters.",
      icon: Gift,
      link: "/laadli-yojna",
      color: "from-secondary to-secondary/80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative bg-primary py-24 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Record of Life
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4">
              Recording every life, with dignity and care.
            </p>
            <p className="text-lg md:text-xl text-secondary font-semibold mb-8">
              "हर गाँव, हर जीवन, हर पहचान के लिए।"
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" variant="secondary" className="text-lg">
                  Register Now
                </Button>
              </Link>
              <Link to="/guidance">
                <Button size="lg" variant="outline" className="bg-card/10 backdrop-blur text-primary-foreground border-primary-foreground/20 hover:bg-card/20">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {!service.image && (
                  <div className={`h-48 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                    <service.icon className="h-24 w-24 text-white/90" />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <service.icon className="h-6 w-6 text-primary" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <Link to={service.link}>
                    <Button className="w-full">Register</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 JeevanPatra - Government of India Initiative
          </p>
          <p className="text-xs mt-2 opacity-80">
            Recording every life with dignity and care
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
