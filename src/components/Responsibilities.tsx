
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Responsibility {
  id: number;
  title: string;
  organization: string;
  description: string;
}

const Responsibilities = () => {
  const responsibilities: Responsibility[] = [
    {
      id: 1,
      title: "Volunteer",
      organization: "Blood Donation Campaign (NSS)",
      description: "Participated in organizing and executing blood donation drives on campus, helping to raise awareness and recruit donors for this important cause."
    },
    {
      id: 2,
      title: "Active Member",
      organization: "Women Empowerment Cell",
      description: "Contributed to initiatives focused on promoting gender equality, organizing workshops, and creating a supportive environment for women in engineering."
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-primary">Positions of Responsibility</h2>
        <div className="h-1 w-20 bg-primary/30 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {responsibilities.map((role) => (
          <Card key={role.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg text-primary">{role.title}</CardTitle>
              <CardDescription>{role.organization}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{role.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Responsibilities;
