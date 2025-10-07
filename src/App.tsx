import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Register from "./pages/Register";
import BirthRegistration from "./pages/BirthRegistration";
import DeathRegistration from "./pages/DeathRegistration";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Guidance from "./pages/Guidance";
import Donation from "./pages/Donation";
import BirthDeathRatio from "./pages/BirthDeathRatio";
import LaadliYojna from "./pages/LaadliYojna";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/birth" element={<BirthRegistration />} />
          <Route path="/register/death" element={<DeathRegistration />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/guidance" element={<Guidance />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/ratio" element={<BirthDeathRatio />} />
          <Route path="/laadli-yojna" element={<LaadliYojna />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
