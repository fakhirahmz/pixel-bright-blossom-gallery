import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto text-center space-y-8">
        <div className="space-y-4">
          <p className="text-muted-foreground text-lg">Hi, I'm</p>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-text bg-clip-text text-transparent leading-tight">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Creative Designer & Developer passionate about crafting beautiful digital experiences
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-3"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-3"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;