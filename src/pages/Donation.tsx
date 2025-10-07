import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Heart } from "lucide-react";
import Navbar from "@/components/Navbar";

const Donation = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    amount: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your generous donation!");
    setFormData({ name: "", phoneNumber: "", amount: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-full mb-4">
              <Heart className="h-10 w-10 text-secondary-foreground" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Support JeevanPatra
            </h1>
            <p className="text-xl text-muted-foreground">
              Your contribution helps us serve every village, every life, every identity
            </p>
          </div>

          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Make a Donation</CardTitle>
              <CardDescription>
                Your support helps us maintain and improve our vital registration services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number *</Label>
                  <Input
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                    placeholder="Enter 10-digit phone number"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Donation Amount (₹) *</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={formData.amount}
                    onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
                    placeholder="Enter amount"
                    min="1"
                    required
                  />
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">How your donation helps:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Digitizing records for rural areas</li>
                    <li>• Training staff for better service delivery</li>
                    <li>• Maintaining secure infrastructure</li>
                    <li>• Providing free services to underprivileged communities</li>
                  </ul>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Proceed to Payment
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  All donations are voluntary and go directly towards improving JeevanPatra services
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Donation;
