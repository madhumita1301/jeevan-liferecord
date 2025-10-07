import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";

const BirthRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    childName: "",
    dateOfBirth: "",
    address: "",
    fatherAadhaar: "",
    motherAadhaar: "",
    language: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Birth registration submitted successfully!");
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
              <CardTitle className="text-3xl">Birth Registration</CardTitle>
              <CardDescription>
                Please fill in all the required information for birth registration
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
                  <Label htmlFor="childName">Child's Full Name *</Label>
                  <Input
                    id="childName"
                    value={formData.childName}
                    onChange={(e) => handleChange("childName", e.target.value)}
                    placeholder="Enter child's full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Residential Address *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    placeholder="Enter complete address"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fatherAadhaar">Father's Aadhaar Number *</Label>
                  <Input
                    id="fatherAadhaar"
                    value={formData.fatherAadhaar}
                    onChange={(e) => handleChange("fatherAadhaar", e.target.value)}
                    placeholder="Enter 12-digit Aadhaar number"
                    maxLength={12}
                    pattern="[0-9]{12}"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motherAadhaar">Mother's Aadhaar Number *</Label>
                  <Input
                    id="motherAadhaar"
                    value={formData.motherAadhaar}
                    onChange={(e) => handleChange("motherAadhaar", e.target.value)}
                    placeholder="Enter 12-digit Aadhaar number"
                    maxLength={12}
                    pattern="[0-9]{12}"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birthCertificate">Birth Certificate *</Label>
                  <Input
                    id="birthCertificate"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Upload hospital birth certificate (PDF, JPG, or PNG)
                  </p>
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

export default BirthRegistration;
