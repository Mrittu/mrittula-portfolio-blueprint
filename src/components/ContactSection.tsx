
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };
  
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "#",
      color: "hover:bg-blue-600"
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "#",
      color: "hover:bg-gray-700"
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:example@email.com",
      color: "hover:bg-red-500"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-primary">Contact</h2>
        <div className="h-1 w-20 bg-primary/30 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Get In Touch</h3>
          <p className="text-gray-600">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input 
                placeholder="Your Name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input 
                type="email" 
                placeholder="Your Email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Textarea 
                placeholder="Your Message" 
                className="min-h-[120px]"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
        
        <div className="space-y-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-gray-100 text-gray-700 hover:text-white transition-colors ${link.color}`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <Button className="w-full mb-4" variant="outline" asChild>
              <a href="#" download>
                Download My CV
              </a>
            </Button>
            <p className="text-sm text-gray-500">
              Thanks for visiting my portfolio. I look forward to connecting with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
