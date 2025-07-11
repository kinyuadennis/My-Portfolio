import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { label: "Model Accuracy", value: "95%+", color: "text-accent" },
    { label: "Deployment Success", value: "99.8%", color: "text-primary" },
    { label: "Years Experience", value: "3+", color: "text-primary-glow" },
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-accent opacity-50" />
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen pt-20 sm:pt-24">
          {/* Main Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
                DevOps Engineer
              </span>
              <br />
              <span className="text-foreground">& AI Specialist</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about building intelligent systems, securing digital 
              infrastructure, and automating DevOps workflows through innovative 
              Python solutions and MLOps practices.
            </p>

            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToAbout}
                className="w-full xs:w-auto hover:scale-105 transition-all duration-300 shadow-glow"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                className="w-full xs:w-auto hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary hover:scale-110 transition-all duration-300 ai-glow hover:shadow-cyber"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary hover:scale-110 transition-all duration-300 ai-glow hover:shadow-cyber"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary hover:scale-110 transition-all duration-300 ai-glow hover:shadow-cyber"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="flex-1 max-w-md w-full lg:max-w-lg xl:max-w-md lg:ml-8">
            <div className="grid gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-card p-4 sm:p-6 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-105 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-center">
                    <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 ${stat.color} group-hover:animate-glow-pulse transition-all duration-300`}>
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;