
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const InternshipExperience = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-primary">Internship Experience</h2>
        <div className="h-1 w-20 bg-primary/30 mx-auto rounded-full"></div>
      </div>
      
      <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="bg-primary/10 p-6 flex flex-col justify-center">
              <h3 className="font-semibold text-xl mb-2">Full-Stack Web Development</h3>
              <p className="text-gray-600 text-sm">July 2024</p>
              <Badge className="mt-2 w-fit">ALTITUDES</Badge>
            </div>
            
            <div className="col-span-2 p-6 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                During my internship at ALTITUDES, I gained hands-on experience in full-stack web development, working with HTML, CSS, and modern front-end practices. I was involved in various aspects of the development lifecycle, including design implementation, testing, and optimization.
              </p>
              
              <div className="pt-2">
                <h4 className="font-medium mb-2 text-primary">Key Responsibilities:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Developed responsive web interfaces using HTML5 and CSS3</li>
                  <li>Collaborated with senior developers on front-end development tasks</li>
                  <li>Participated in testing practices to ensure high-quality deliverables</li>
                  <li>Learned and implemented industry best practices for web development</li>
                </ul>
              </div>
              
              <p className="text-gray-700 italic">
                This internship significantly enhanced my technical foundation and provided valuable experience in real-world development environments.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InternshipExperience;
