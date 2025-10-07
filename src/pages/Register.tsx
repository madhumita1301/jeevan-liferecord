import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Baby, HeartCrack } from "lucide-react";
import Navbar from "@/components/Navbar";

const Register = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Registration Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the type of registration you need
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 animate-fade-in">
              <CardHeader>
                <div className="h-48 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center mb-4">
                  <Baby className="h-24 w-24 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Birth Registration</CardTitle>
                <CardDescription className="text-base">
                  Register a new birth and obtain an official birth certificate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li>• Child's details and date of birth</li>
                  <li>• Parents' information and Aadhaar</li>
                  <li>• Birth certificate upload</li>
                  <li>• Address verification</li>
                </ul>
                <Link to="/register/birth">
                  <Button className="w-full" size="lg">
                    Register Birth
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <div className="h-48 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4">
                  <HeartCrack className="h-24 w-24 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Death Registration</CardTitle>
                <CardDescription className="text-base">
                  Register a death and obtain an official death certificate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li>• Deceased person's details</li>
                  <li>• Date and cause of death</li>
                  <li>• Address and religion</li>
                  <li>• Aadhaar verification</li>
                </ul>
                <Link to="/register/death">
                  <Button className="w-full" size="lg">
                    Register Death
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
