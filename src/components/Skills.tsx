
import { Card, CardContent } from "@/components/ui/card";
import { Html5, Css3, Java, VsCode, Canva, TimerReset, Users, Languages } from "lucide-react";

interface SkillGroup {
  category: string;
  skills: {
    name: string;
    icon?: React.ReactNode;
  }[];
}

const Skills = () => {
  const skillGroups: SkillGroup[] = [
    {
      category: "Programming",
      skills: [
        { name: "Java", icon: <Java className="h-5 w-5" /> },
        { name: "HTML5", icon: <Html5 className="h-5 w-5" /> },
        { name: "CSS3", icon: <Css3 className="h-5 w-5" /> }
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "VS Code", icon: <VsCode className="h-5 w-5" /> },
        { name: "Canva", icon: <Canva className="h-5 w-5" /> },
        { name: "MATLAB", icon: null },
        { name: "VHDL", icon: null },
        { name: "MS Office", icon: null }
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Teamwork", icon: <Users className="h-5 w-5" /> },
        { name: "Adaptability", icon: null },
        { name: "Time Management", icon: <TimerReset className="h-5 w-5" /> }
      ]
    },
    {
      category: "Languages",
      skills: [
        { name: "English", icon: <Languages className="h-5 w-5" /> },
        { name: "Telugu", icon: <Languages className="h-5 w-5" /> },
        { name: "Tamil", icon: <Languages className="h-5 w-5" /> },
        { name: "Hindi", icon: <Languages className="h-5 w-5" /> }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-primary">Skills</h2>
        <div className="h-1 w-20 bg-primary/30 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {skill.icon && <span>{skill.icon}</span>}
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
