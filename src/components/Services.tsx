import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Code, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces that enhance user experience and drive engagement."
    },
    {
      icon: Code,
      title: "Web Development", 
      description: "Building responsive, performant websites and web applications using modern technologies and best practices."
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Developing cross-platform mobile applications that provide seamless user experiences across devices."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">What I Do Best</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specializing in modern digital solutions that make a difference
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/50"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;