
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const courses = [
  {
    title: "Microsoft Azure",
    description: "Hands-on Azure Cloud training with real-time project experience.",
    duration: "2-3 Months",
    level: "Beginner to Advanced",
    highlights: ["Azure Fundamentals", "Virtual Machines", "Storage & Networking", "DevOps Integration"],
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "AWS DevOps",
    description: "Master AWS and DevOps tools with practical sessions.",
    duration: "3-4 Months",
    level: "Intermediate",
    highlights: ["EC2 & S3", "CI/CD Pipelines", "Docker & Kubernetes", "Monitoring"],
    color: "bg-orange-50 border-orange-200"
  },
  {
    title: "CCNA / Networking",
    description: "Learn networking fundamentals, routing, and switching.",
    duration: "2 Months",
    level: "Beginner",
    highlights: ["Network Basics", "Routing Protocols", "Switching", "Network Security"],
    color: "bg-green-50 border-green-200"
  },
  {
    title: "Digital Marketing",
    description: "SEO, SEM, social media, and analytics — all in one powerful course.",
    duration: "1-2 Months",
    level: "Beginner",
    highlights: ["SEO/SEM", "Social Media", "Google Analytics", "Content Marketing"],
    color: "bg-purple-50 border-purple-200"
  },
  {
    title: "Windows Administration",
    description: "Manage enterprise systems with expert-level Windows training.",
    duration: "2 Months",
    level: "Intermediate",
    highlights: ["Active Directory", "Group Policy", "PowerShell", "System Management"],
    color: "bg-indigo-50 border-indigo-200"
  },
  {
    title: "Security (Network+, Security+)",
    description: "Cybersecurity courses for high-demand global certifications.",
    duration: "3 Months",
    level: "Intermediate to Advanced",
    highlights: ["Network Security", "Threat Analysis", "Compliance", "Risk Management"],
    color: "bg-red-50 border-red-200"
  },
  {
    title: "Databricks",
    description: "Big data and machine learning with Databricks platform.",
    duration: "2-3 Months",
    level: "Advanced",
    highlights: ["Data Engineering", "Machine Learning", "Spark Analytics", "Data Lakes"],
    color: "bg-teal-50 border-teal-200"
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Top Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-focused training programs designed to make you job-ready with hands-on experience and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className={`${course.color} hover:shadow-lg transition-all duration-300 animate-fade-in`}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-gray-800">{course.title}</CardTitle>
                  <Badge variant="secondary" className="bg-white text-gray-700">
                    {course.duration}
                  </Badge>
                </div>
                <CardDescription className="text-gray-600">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Level: {course.level}</p>
                  <div className="space-y-1">
                    {course.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-snit-teal-500 rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-snit-teal-600 hover:bg-snit-teal-700 text-white">
                    Learn More
                  </Button>
                  <Button variant="outline" className="border-snit-orange-500 text-snit-orange-500 hover:bg-snit-orange-500 hover:text-white">
                    Enroll
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-600 mb-6">
              We offer customized training programs based on your specific requirements.
            </p>
            <Button className="bg-snit-orange-500 hover:bg-snit-orange-600 text-white px-8 py-3">
              Request Custom Training
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
