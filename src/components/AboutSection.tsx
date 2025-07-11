import { Card } from "@/components/ui/card";
import { Shield, Code, Cpu, Cloud } from "lucide-react";

const AboutSection = () => {
  const specializations = [
    {
      icon: <Cpu className="h-8 w-8 text-accent" />,
      title: "AI & MLOps",
      description: "ML model deployment, monitoring, and automated training pipelines with 95%+ accuracy"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Cybersecurity",
      description: "Custom security tools, vulnerability assessment, and automated threat detection systems"
    },
    {
      icon: <Code className="h-8 w-8 text-primary-glow" />,
      title: "Python Automation",
      description: "Flask applications, API development, and intelligent automation solutions"
    },
    {
      icon: <Cloud className="h-8 w-8 text-accent" />,
      title: "DevOps & Infrastructure",
      description: "Docker containerization, CI/CD pipelines, and cloud deployment strategies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DevOps & Security Specialist with 3+ years of experience designing AI solutions and 
            hardening systems against threats. I focus on deploying real-world solutions, not just prototypes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specializations.map((spec, index) => (
            <Card key={index} className="bg-gradient-card p-6 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-105">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  {spec.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {spec.title}
                </h3>
                <p className="text-muted-foreground">
                  {spec.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-card rounded-lg p-8 border border-border/50">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                My Philosophy
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in building intelligent systems that not only work but are secure, scalable, 
                and maintainable. My approach combines cutting-edge AI techniques with robust DevOps 
                practices to deliver solutions that hiring managers can trust in production environments.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Vulnerability Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">99.8%</div>
                <div className="text-sm text-muted-foreground">Deployment Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;