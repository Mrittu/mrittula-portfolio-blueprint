
import { Card, CardContent } from "@/components/ui/card";

const AboutMe = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-primary">About Me</h2>
        <div className="h-1 w-20 bg-primary/30 mx-auto rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto">
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
      </div>
    </div>
  );
};

export default AboutMe;
