import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, CheckCircle } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Security Scanner",
      description: "Comprehensive Python-based network scanner with Flask dashboard for detecting live hosts and open ports. Features real-time monitoring and security API integration.",
      icon: "🛡️",
      gradient: "from-primary to-primary-glow",
      achievements: [
        "Real-time network monitoring and host detection",
        "Integration with Shodan API for threat intelligence",
        "Anomaly detection algorithms for security events"
      ],
      technologies: ["Python", "Flask", "Security APIs", "ML Algorithms"],
      metrics: {
        accuracy: "95%+",
        performance: "99.8%"
      }
    },
    {
      title: "MLOps Pipeline Framework",
      description: "Reusable MLOps framework for complete model lifecycle management including automated training, evaluation, versioning, and deployment with cloud service integration.",
      icon: "🧠",
      gradient: "from-accent to-primary",
      achievements: [
        "Automated model training and evaluation pipelines",
        "Version control integration with model registry",
        "Scalable cloud deployment architecture"
      ],
      technologies: ["Python", "Docker", "MLflow", "CI/CD", "Cloud"],
      metrics: {
        automation: "100%",
        deployment: "Seamless"
      }
    },
    {
      title: "DevSecOps Container Pipeline",
      description: "Secure container orchestration pipeline with integrated security scanning, automated testing, and deployment. Features vulnerability assessment and compliance checking.",
      icon: "🐳",
      gradient: "from-primary-glow to-accent",
      achievements: [
        "Docker containerization with security best practices",
        "Kubernetes orchestration with network policies",
        "Automated security scanning in CI/CD pipeline"
      ],
      technologies: ["Docker", "Kubernetes", "CI/CD", "Security Tools"],
      metrics: {
        security: "40% ↓ Vulnerabilities",
        reliability: "99.9%"
      }
    },
    {
      title: "Infrastructure Monitoring Platform",
      description: "Comprehensive monitoring solution combining infrastructure metrics, security events, and automated incident response. Features real-time alerting and threat detection.",
      icon: "📊",
      gradient: "from-accent to-primary-glow",
      achievements: [
        "Real-time infrastructure monitoring with Prometheus",
        "Security event correlation and analysis",
        "Automated incident response workflows"
      ],
      technologies: ["Prometheus", "ELK Stack", "Python", "Alerting"],
      metrics: {
        uptime: "99.9%",
        response: "<2min"
      }
    },
    {
      title: "Custom Security Toolkit",
      description: "Comprehensive Python library for automated feature engineering and data preprocessing. Includes statistical analysis, missing data handling, and feature selection algorithms.",
      icon: "🔧",
      gradient: "from-primary to-accent",
      achievements: [
        "Automated feature selection and engineering",
        "Statistical analysis and data validation",
        "ML pipeline integration tools"
      ],
      technologies: ["Python", "Security APIs", "Data Science", "Automation"],
      metrics: {
        efficiency: "60% ↑",
        accuracy: "ML Ready"
      }
    },
    {
      title: "Cloud Security Assessment Tool",
      description: "OSINT tool for passive reconnaissance using multiple APIs and data sources. Features automated report generation and threat intelligence integration following ethical hacking practices.",
      icon: "☁️",
      gradient: "from-primary-glow to-primary",
      achievements: [
        "Multi-source OSINT data aggregation",
        "Automated threat intelligence analysis",
        "Comprehensive security reporting system"
      ],
      technologies: ["Python", "Cloud APIs", "OSINT", "Threat Intel"],
      metrics: {
        coverage: "Multi-Cloud",
        compliance: "Ethical"
      }
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real-world solutions that demonstrate expertise in AI, cybersecurity, and DevOps automation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card p-4 sm:p-6 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className={`text-2xl sm:text-3xl lg:text-4xl p-2 sm:p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20 animate-float`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="space-y-2">
                  {project.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-2 text-xs sm:text-sm">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs hover:bg-primary/20 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-border/50">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-primary font-semibold text-sm sm:text-base">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 pt-3 sm:pt-4">
                  <Button variant="outline" size="sm" className="flex-1 text-xs sm:text-sm hover:bg-primary/10 hover:border-primary/30">
                    <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Code
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1 text-xs sm:text-sm hover:bg-accent/10">
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;