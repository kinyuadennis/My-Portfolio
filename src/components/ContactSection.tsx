import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Email",
      value: "kinyuadenno1@gmail.com",
      link: "mailto:kinyuadenno1@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Phone",
      value: "+254111426110",
      link: "tel:+254111426110"
    },
    {
      icon: <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Location",
      value: "Remote / Global",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-4 w-4 sm:h-5 sm:w-5" />,
      name: "GitHub",
      url: "https://github.com"
    },
    {
      icon: <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to deploy real-world AI and security solutions? Let's discuss how I can help your team succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">Get In Touch</h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                I'm always interested in discussing new opportunities, challenging projects, 
                and ways to leverage AI and automation to solve real business problems.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-card p-3 sm:p-4 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm sm:text-base">{info.title}</div>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground text-sm sm:text-base">{info.value}</div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Connect With Me</h4>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="glass"
                    size="icon"
                    asChild
                    className="hover:scale-110 transition-all duration-300 ai-glow hover:shadow-cyber"
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card p-6 sm:p-8 border-border/50 hover:border-primary/50 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary text-sm sm:text-base h-10 sm:h-11"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary text-sm sm:text-base h-10 sm:h-11"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary text-sm sm:text-base h-10 sm:h-11"
                  placeholder="Project discussion, job opportunity, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full hover:scale-105 transition-all duration-300 shadow-glow"
              >
                <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;