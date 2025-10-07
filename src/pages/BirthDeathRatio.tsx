import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, HeartCrack } from "lucide-react";
import Navbar from "@/components/Navbar";
import birthIcon from "@/assets/birth-icon.jpg";
import deathIcon from "@/assets/death-icon.jpg";

const BirthDeathRatio = () => {
  const [birthCount, setBirthCount] = useState(0);
  const [deathCount, setDeathCount] = useState(0);

  const targetBirths = 125487;
  const targetDeaths = 42318;

  useEffect(() => {
    const duration = 2000;
    const birthIncrement = targetBirths / (duration / 16);
    const deathIncrement = targetDeaths / (duration / 16);

    const birthInterval = setInterval(() => {
      setBirthCount(prev => {
        const next = prev + birthIncrement;
        return next >= targetBirths ? targetBirths : next;
      });
    }, 16);

    const deathInterval = setInterval(() => {
      setDeathCount(prev => {
        const next = prev + deathIncrement;
        return next >= targetDeaths ? targetDeaths : next;
      });
    }, 16);

    return () => {
      clearInterval(birthInterval);
      clearInterval(deathInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Birth & Death Statistics
            </h1>
            <p className="text-xl text-muted-foreground">
              Real-time registration statistics from across the nation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-count-up border-accent hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="h-48 overflow-hidden rounded-lg mb-4">
                  <img 
                    src={birthIcon} 
                    alt="Births Registered" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Baby className="h-7 w-7 text-accent" />
                  Total Births Registered
                </CardTitle>
                <CardDescription>
                  New lives recorded with dignity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-6xl font-bold text-accent mb-2">
                    {Math.floor(birthCount).toLocaleString('en-IN')}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This year
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-count-up border-primary hover:shadow-xl transition-all duration-300" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <div className="h-48 overflow-hidden rounded-lg mb-4">
                  <img 
                    src={deathIcon} 
                    alt="Deaths Registered" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <HeartCrack className="h-7 w-7 text-primary" />
                  Total Deaths Registered
                </CardTitle>
                <CardDescription>
                  Lives remembered with respect
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">
                    {Math.floor(deathCount).toLocaleString('en-IN')}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This year
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-muted/30 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <CardHeader>
              <CardTitle className="text-xl">Statistical Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {((birthCount / (birthCount + deathCount)) * 100).toFixed(1)}%
                  </div>
                  <p className="text-sm text-muted-foreground">Birth Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {(birthCount - deathCount).toLocaleString('en-IN')}
                  </div>
                  <p className="text-sm text-muted-foreground">Net Growth</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {((birthCount / deathCount).toFixed(2))}:1
                  </div>
                  <p className="text-sm text-muted-foreground">Birth-Death Ratio</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BirthDeathRatio;
