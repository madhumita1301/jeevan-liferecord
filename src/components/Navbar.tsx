import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Home, Info, Heart, TrendingUp } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Register", path: "/register", icon: FileText },
    { name: "Guidance", path: "/guidance", icon: Info },
    { name: "Donation", path: "/donation", icon: Heart },
    { name: "Birth & Death Ratio", path: "/ratio", icon: TrendingUp },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <FileText className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">JeevanPatra</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className="gap-2"
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Link to="/signin">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button variant="default">Sign Up</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex overflow-x-auto pb-2 space-x-2">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant={isActive(item.path) ? "default" : "ghost"}
                size="sm"
                className="gap-1 whitespace-nowrap"
              >
                <item.icon className="h-3 w-3" />
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
