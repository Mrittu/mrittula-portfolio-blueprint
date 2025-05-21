
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookOpenText, Certificate, GraduationCap } from "lucide-react";

const Publications = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-primary">Publications & Workshops</h2>
        <div className="h-1 w-20 bg-primary/30 mx-auto rounded-full"></div>
      </div>
      
      <div className="space-y-8">
        {/* Publication */}
        <Card className="overflow-hidden shadow-md">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <BookOpenText className="h-6 w-6 text-primary" />
            <div>
              <CardTitle className="text-lg">Journal Publication</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="font-medium">Design Thinking Approach & Implementation of IoT-Based Elevator Fault Surveillance & Management System</p>
            <p className="text-sm text-gray-600">Journal of Xi'an University of Architecture & Technology, Vol XVI, Issue XII 2024</p>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Workshops */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <div>
                <CardTitle className="text-lg">Workshops</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-medium">PCB Designing & Fabrication</p>
              </div>
              <Separator />
              <div>
                <p className="font-medium">Robotics Process Automation</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Participation */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Certificate className="h-6 w-6 text-primary" />
              <div>
                <CardTitle className="text-lg">Participations</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Paper Presentation Certificate</p>
              <p className="text-sm text-gray-600">Presented research findings at an academic conference, showcasing technical knowledge and communication skills.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Publications;
