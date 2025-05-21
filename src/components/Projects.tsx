
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  details: string;
}

const Projects = () => {
  const projectsList: Project[] = [
    {
      id: 1,
      title: "AI-Based Smart Door Lock System",
      description: "A facial recognition system for home security",
      technologies: ["Python", "OpenCV", "Haarcascade", "ML"],
      details: "Developed a smart door lock system using a webcam and Python face-recognition with Haarcascade classifiers for improved home safety. I built and tested the ML pipeline, ensuring reliable recognition and security protocols for user access."
    },
    {
      id: 2,
      title: "Automated Protection and Control of DC Microgrids",
      description: "Sensor-based control system for machine maintenance",
      technologies: ["Microcontrollers", "Proximity Sensors", "DC Motors"],
      details: "Created a system that identifies machine issues via proximity-sensor-based microcontroller systems to control a DC motor. I contributed to the sensor integration, microcontroller programming, and testing of the control mechanisms to ensure reliable operation."
    },
    {
      id: 3,
      title: "Elevator Fault Surveillance and Management System",
      description: "Real-time fault detection system for elevator safety",
      technologies: ["IoT", "Sensors", "Microcontrollers", "Real-time Systems"],
      details: "Designed a system using sensors, microcontrollers, accelerometers, and load cells to detect real-time abnormalities in elevator operation. The system alerts maintenance teams and triggers emergency stops when necessary, improving elevator safety and maintenance efficiency. I played a key role in the design and implementation of the sensor network and control algorithms."
    }
  ];
  
  const [activeProject, setActiveProject] = useState<Project>(projectsList[0]);

  return (
    <div className="space-y-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-primary">Projects</h2>
        <div className="h-1 w-20 bg-primary/30 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {projectsList.map((project) => (
          <button 
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="text-left focus:outline-none"
          >
            <Card className={`h-full border transition-all hover:shadow-md ${activeProject.id === project.id ? 'border-primary shadow-md' : 'border-gray-200'}`}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="pt-2 flex gap-2 flex-wrap">
                {project.technologies.slice(0, 2).map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">{tech}</Badge>
                ))}
                {project.technologies.length > 2 && (
                  <Badge variant="outline" className="text-xs">+{project.technologies.length - 2}</Badge>
                )}
              </CardFooter>
            </Card>
          </button>
        ))}
      </div>
      
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle>{activeProject.title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {activeProject.technologies.map((tech, index) => (
              <Badge key={index} variant="outline">{tech}</Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{activeProject.details}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Projects;
