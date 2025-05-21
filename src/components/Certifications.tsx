
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  badge?: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "AI Specialist",
      issuer: "Salesforce",
      date: "October 2024",
      badge: "Advanced"
    },
    {
      id: 2,
      title: "AI Associate",
      issuer: "Salesforce",
      date: "October 2024",
      badge: "Intermediate"
    },
    {
      id: 3,
      title: "Java",
      issuer: "PrepInsta",
      date: "2023",
    },
    {
      id: 4,
      title: "AI Foundations Associate",
      issuer: "Oracle",
      date: "2023",
    },
    {
      id: 5,
      title: "Introduction to Internet of Things",
      issuer: "NPTEL",
      date: "2023",
      badge: "Elite Silver"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-primary">Certifications</h2>
        <div className="h-1 w-20 bg-primary/30 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <Card key={cert.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
            <div className="h-2 bg-primary/70 group-hover:bg-primary transition-colors"></div>
            <CardHeader className="flex flex-row items-start space-x-4 pb-2">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg font-medium">{cert.title}</CardTitle>
                <p className="text-sm text-gray-500">{cert.issuer}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{cert.date}</span>
                {cert.badge && (
                  <Badge variant="outline" className="text-xs">{cert.badge}</Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
