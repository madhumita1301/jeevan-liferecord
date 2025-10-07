import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    phoneNumber: "",
    aadhaarNumber: "",
    otp: "",
  });
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOTP = () => {
    if (formData.phoneNumber.length === 10) {
      setOtpSent(true);
      toast.success("OTP sent to your phone number!");
    } else {
      toast.error("Please enter a valid 10-digit phone number");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpSent) {
      toast.error("Please verify your phone number with OTP");
      return;
    }
    toast.success("Account created successfully!");
    setTimeout(() => navigate("/signin"), 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-3xl">Sign Up</CardTitle>
              <CardDescription>
                Create a new account to access JeevanPatra services
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
                  <Label htmlFor="username">Username *</Label>
                  <Input
                    id="username"
                    value={formData.username}
                    onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                    placeholder="Choose a username"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number *</Label>
                  <div className="flex gap-2">
                    <Input
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                      placeholder="Enter 10-digit phone number"
                      maxLength={10}
                      pattern="[0-9]{10}"
                      required
                    />
                    <Button 
                      type="button" 
                      onClick={handleSendOTP}
                      variant="outline"
                      disabled={otpSent}
                    >
                      {otpSent ? "Sent" : "Send OTP"}
                    </Button>
                  </div>
                </div>

                {otpSent && (
                  <div className="space-y-2">
                    <Label htmlFor="otp">Enter OTP *</Label>
                    <Input
                      id="otp"
                      value={formData.otp}
                      onChange={(e) => setFormData(prev => ({ ...prev, otp: e.target.value }))}
                      placeholder="Enter 6-digit OTP"
                      maxLength={6}
                      pattern="[0-9]{6}"
                      required
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="aadhaarNumber">Aadhaar Card Number *</Label>
                  <Input
                    id="aadhaarNumber"
                    value={formData.aadhaarNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, aadhaarNumber: e.target.value }))}
                    placeholder="Enter 12-digit Aadhaar number"
                    maxLength={12}
                    pattern="[0-9]{12}"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Sign Up
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/signin" className="text-primary hover:underline font-medium">
                    Sign in
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
