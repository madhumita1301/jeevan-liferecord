import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Syringe, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import guidanceIcon from "@/assets/guidance-icon.jpg";

const Guidance = () => {
  const vaccinations = [
    {
      age: "At Birth",
      vaccines: [
        { name: "BCG (Bacillus Calmette–Guérin)", protects: "Tuberculosis (TB)" },
        { name: "Hepatitis B - 1st dose", protects: "Hepatitis B" },
        { name: "OPV-0 (Oral Polio Vaccine - zero dose)", protects: "Polio" }
      ]
    },
    {
      age: "6 Weeks (1.5 Months)",
      vaccines: [
        { name: "DTaP-IPV-Hib-HepB (Pentavalent/Hexavalent)", protects: "Diphtheria, Tetanus, Pertussis, Polio, Hib, Hepatitis B" },
        { name: "Rotavirus - 1st dose", protects: "Rotavirus diarrhea" },
        { name: "Pneumococcal (PCV) - 1st dose", protects: "Pneumonia, Meningitis" }
      ]
    },
    {
      age: "10 Weeks (2.5 Months)",
      vaccines: [
        { name: "DTaP-IPV-Hib-HepB - 2nd dose", protects: "Multiple diseases" },
        { name: "Rotavirus - 2nd dose", protects: "Rotavirus diarrhea" },
        { name: "PCV - 2nd dose", protects: "Pneumonia, Meningitis" }
      ]
    },
    {
      age: "14 Weeks (3.5 Months)",
      vaccines: [
        { name: "DTaP-IPV-Hib-HepB - 3rd dose", protects: "Multiple diseases" },
        { name: "Rotavirus - 3rd dose", protects: "Rotavirus diarrhea" },
        { name: "PCV - 3rd dose", protects: "Pneumonia, Meningitis" }
      ]
    },
    {
      age: "6 Months",
      vaccines: [
        { name: "Hepatitis B - 3rd dose", protects: "Hepatitis B" },
        { name: "Influenza (Flu) vaccine", protects: "Seasonal flu (start annually)" }
      ]
    },
    {
      age: "9 Months",
      vaccines: [
        { name: "Measles or MMR - 1st dose", protects: "Measles, Mumps, Rubella" },
        { name: "Vitamin A supplement", protects: "Vitamin A deficiency" },
        { name: "Typhoid Conjugate Vaccine", protects: "Typhoid fever" }
      ]
    },
    {
      age: "12 Months",
      vaccines: [
        { name: "MMR - 2nd dose", protects: "Measles, Mumps, Rubella" },
        { name: "Chickenpox (Varicella) - 1st dose", protects: "Chickenpox" },
        { name: "Hepatitis A - 1st dose", protects: "Hepatitis A" },
        { name: "PCV Booster", protects: "Pneumonia, Meningitis" },
        { name: "Meningococcal vaccine", protects: "Meningitis" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <img 
              src={guidanceIcon} 
              alt="Vaccination Guidance" 
              className="w-32 h-32 mx-auto mb-6 rounded-full object-cover"
            />
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Vaccination Guidance
            </h1>
            <p className="text-xl text-muted-foreground">
              Essential immunization schedule for infants (Birth to 12 Months)
            </p>
          </div>

          <div className="space-y-6">
            {vaccinations.map((schedule, index) => (
              <Card 
                key={schedule.age}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Calendar className="h-6 w-6 text-primary" />
                    {schedule.age}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {schedule.vaccines.map((vaccine, vIndex) => (
                      <div 
                        key={vIndex}
                        className="flex gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                      >
                        <Syringe className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {vaccine.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Protects against: {vaccine.protects}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-accent/10 border-accent animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl">Important Note</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                This is a general vaccination schedule. Please consult with your healthcare provider for personalized guidance. 
                Maintain the vaccination record card provided at your health center and bring it for every visit.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Guidance;
