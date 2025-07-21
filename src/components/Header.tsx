import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = ["Home", "Profile", "Portfolio", "Blog", "Contact"];

  return (
    <header className="w-full bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-text bg-clip-text text-transparent">
          Portfolio
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <Button variant="outline" className="md:hidden">
          Menu
        </Button>
      </div>
    </header>
  );
};

export default Header;