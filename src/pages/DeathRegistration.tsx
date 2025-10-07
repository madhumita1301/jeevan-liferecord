import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";

const DeathRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    deceasedName: "",
    dateOfDeath: "",
    address: "",
    causeOfDeath: "",
    otherCause: "",
    aadhaarNumber: "",
    religion: "",
    language: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Death registration submitted successfully!");
    setTimeout(() => navigate("/"), 2000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-3xl">Death Registration</CardTitle>
              <CardDescription>
                Please fill in all the required information for death registration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="language">Preferred Language *</Label>
                  <Select onValueChange={(value) => handleChange("language", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your preferred language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="marathi">Marathi</SelectItem>
                      <SelectItem value="tamil">Tamil</SelectItem>
                      <SelectItem value="bengali">Bengali</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deceasedName">Name of Deceased *</Label>
                  <Input
                    id="deceasedName"
                    value={formData.deceasedName}
                    onChange={(e) => handleChange("deceasedName", e.target.value)}
                    placeholder="Enter full name of deceased"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfDeath">Date of Death *</Label>
                  <Input
                    id="dateOfDeath"
                    type="date"
                    value={formData.dateOfDeath}
                    onChange={(e) => handleChange("dateOfDeath", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    placeholder="Enter complete address"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="causeOfDeath">Cause of Death *</Label>
                  <Select onValueChange={(value) => handleChange("causeOfDeath", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select cause of death" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="medical">Medical Issue</SelectItem>
                      <SelectItem value="accident">Accident</SelectItem>
                      <SelectItem value="natural">Normal Death</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {formData.causeOfDeath === "other" && (
                  <div className="space-y-2">
                    <Label htmlFor="otherCause">Please Specify *</Label>
                    <Input
                      id="otherCause"
                      value={formData.otherCause}
                      onChange={(e) => handleChange("otherCause", e.target.value)}
                      placeholder="Please specify the cause"
                      required
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="aadhaarNumber">Aadhaar Card Number (Verification) *</Label>
                  <Input
                    id="aadhaarNumber"
                    value={formData.aadhaarNumber}
                    onChange={(e) => handleChange("aadhaarNumber", e.target.value)}
                    placeholder="Enter 12-digit Aadhaar number"
                    maxLength={12}
                    pattern="[0-9]{12}"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="religion">Religion *</Label>
                  <Select onValueChange={(value) => handleChange("religion", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select religion" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hinduism">Hinduism</SelectItem>
                      <SelectItem value="islam">Islam</SelectItem>
                      <SelectItem value="christianity">Christianity</SelectItem>
                      <SelectItem value="sikhism">Sikhism</SelectItem>
                      <SelectItem value="buddhism">Buddhism</SelectItem>
                      <SelectItem value="jainism">Jainism</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button type="button" variant="outline" onClick={() => navigate("/register")} className="flex-1">
                    Cancel
                  </Button>
                  <Button type="submit" className="flex-1">
                    Submit Registration
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DeathRegistration;
