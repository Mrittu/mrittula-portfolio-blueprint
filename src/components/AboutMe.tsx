
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutMe = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-primary">About Me</h2>
        <div className="h-1 w-20 bg-primary/30 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            Mrittula Yasaswini
          </h3>
          <h4 className="text-lg text-gray-600">
            B.E. in Electronics & Communication Engineering
          </h4>
          <p className="text-gray-600 leading-relaxed">
            I am currently pursuing my Bachelor's in Electronics & Communication Engineering at SNS College of Engineering, maintaining a CGPA of 8.21. My passion lies in embedded systems and developing AI-driven solutions that solve real-world problems.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With a strong foundation in technical skills and a keen interest in innovation, I bring a collaborative mindset to every project. My strengths include teamwork, adaptability, and effective time management, allowing me to excel in dynamic environments.
          </p>
          <div className="pt-4">
            <Card className="bg-primary/5 border-none">
              <CardContent className="p-6">
                <p className="text-gray-700 italic">
                  "Committed to continuous learning and applying my technical knowledge to create impactful solutions."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/daadbec6-8752-47de-8079-666f6347fd0a.png" 
              alt="Mrittula Yasaswini" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
            <div className="text-sm font-medium">B.E. ECE (2022-2026)</div>
            <div className="text-xs text-gray-500">SNS College of Engineering</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
