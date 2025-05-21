
import { Card, CardContent } from "@/components/ui/card";
import { Music, Palette, GamepadIcon } from "lucide-react";

const ExtraCurricular = () => {
  const activities = [
    {
      name: "Drawing",
      icon: <Palette className="h-12 w-12 text-primary/70" />,
      description: "Creating art and illustrations to express creativity"
    },
    {
      name: "Listening to Music",
      icon: <Music className="h-12 w-12 text-primary/70" />,
      description: "Enjoying various genres to unwind and find inspiration"
    },
    {
      name: "Playing Games",
      icon: <GamepadIcon className="h-12 w-12 text-primary/70" />,
      description: "Engaging in strategic thinking through digital and board games"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-primary">Extracurricular Activities</h2>
        <div className="h-1 w-20 bg-primary/30 mx-auto rounded-full"></div>
      </div>
      
      <div className="text-center mb-8">
        <p className="text-lg italic text-gray-600">"Always exploring creativity beyond code."</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <Card key={index} className="text-center hover:shadow-md transition-shadow border-none bg-gray-50">
            <CardContent className="pt-6 flex flex-col items-center space-y-4">
              <div className="p-4 rounded-full bg-primary/10">
                {activity.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-lg">{activity.name}</h3>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExtraCurricular;
