import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Shield, Code2, Cloud, Database, Settings } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI & Machine Learning",
      color: "text-accent",
      skills: [
        { name: "MLOps", level: "Expert" },
        { name: "Model Deployment", level: "Expert" },
        { name: "TensorFlow/PyTorch", level: "Advanced" },
        { name: "Feature Engineering", level: "Advanced" },
        { name: "Model Monitoring", level: "Expert" }
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cybersecurity",
      color: "text-primary",
      skills: [
        { name: "Vulnerability Assessment", level: "Expert" },
        { name: "Security Tools Development", level: "Expert" },
        { name: "Penetration Testing", level: "Advanced" },
        { name: "Threat Detection", level: "Advanced" },
        { name: "Security Automation", level: "Expert" }
      ]
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Python Development",
      color: "text-primary-glow",
      skills: [
        { name: "Flask", level: "Expert" },
        { name: "API Development", level: "Expert" },
        { name: "Automation Scripts", level: "Expert" },
        { name: "Data Analysis", level: "Advanced" },
        { name: "Testing Frameworks", level: "Advanced" }
      ]
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "DevOps & Infrastructure",
      color: "text-accent",
      skills: [
        { name: "Docker", level: "Expert" },
        { name: "CI/CD Pipelines", level: "Expert" },
        { name: "Kubernetes", level: "Advanced" },
        { name: "Infrastructure as Code", level: "Advanced" },
        { name: "Cloud Platforms", level: "Advanced" }
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data & Monitoring",
      color: "text-primary",
      skills: [
        { name: "Database Design", level: "Advanced" },
        { name: "Monitoring Systems", level: "Expert" },
        { name: "Log Analysis", level: "Advanced" },
        { name: "Performance Tuning", level: "Advanced" },
        { name: "Alerting Systems", level: "Expert" }
      ]
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Tools & Technologies",
      color: "text-primary-glow",
      skills: [
        { name: "Git & GitHub", level: "Expert" },
        { name: "Jenkins/GitLab CI", level: "Advanced" },
        { name: "Terraform", level: "Advanced" },
        { name: "Prometheus", level: "Advanced" },
        { name: "ELK Stack", level: "Advanced" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-primary text-primary-foreground";
      case "Advanced":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skills across machine learning, cybersecurity, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card p-6 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={category.color}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{skill.name}</span>
                    <Badge className={getLevelColor(skill.level)}>
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;