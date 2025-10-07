import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, GraduationCap, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const LaadliYojna = () => {
  const benefits = [
    {
      icon: Gift,
      title: "Financial Support",
      description: "Direct cash benefits deposited to the girl child's account at different educational milestones"
    },
    {
      icon: GraduationCap,
      title: "Education Grants",
      description: "Scholarships and fee waivers for school and higher education to ensure quality learning"
    },
    {
      icon: Heart,
      title: "Healthcare Benefits",
      description: "Free health checkups and medical support to ensure proper growth and development"
    },
    {
      icon: Sparkles,
      title: "Skill Development",
      description: "Training programs and vocational courses to build a strong foundation for the future"
    }
  ];

  const eligibility = [
    "Girl child must be born and registered in India",
    "Family annual income below specified threshold",
    "Birth certificate and Aadhaar card required",
    "Residential proof and bank account details needed"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-full mb-4">
              <Gift className="h-10 w-10 text-secondary-foreground" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Laadli Yojna
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering girl children for a brighter tomorrow
            </p>
          </div>

          <Card className="mb-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">About the Scheme</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Laadli Yojna is a welfare scheme designed to support the education and empowerment of girl children. 
                The program provides financial assistance and benefits to families to ensure that every girl child receives 
                proper education, healthcare, and opportunities for growth. This initiative aims to reduce gender discrimination 
                and promote the well-being of daughters across the nation.
              </CardDescription>
            </CardContent>
          </Card>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card 
                  key={benefit.title}
                  className="animate-fade-in hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-secondary/10 rounded-lg">
                        <benefit.icon className="h-6 w-6 text-secondary" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="mb-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Eligibility Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {eligibility.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Apply?</CardTitle>
              <CardDescription className="text-base">
                Register your girl child's birth to automatically enroll in the Laadli Yojna scheme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/register/birth">
                <Button size="lg" className="w-full md:w-auto">
                  Register Birth Certificate
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LaadliYojna;
