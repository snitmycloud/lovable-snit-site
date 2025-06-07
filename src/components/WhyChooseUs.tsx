
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Award, BookOpen, Clock, Globe } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "Industry Expert Trainers",
    description: "Learn from professionals with 10+ years of real-world experience in top IT companies.",
    color: "text-snit-teal-600"
  },
  {
    icon: BookOpen,
    title: "Real-Time Projects",
    description: "Work on live projects that mirror actual industry scenarios and build your portfolio.",
    color: "text-snit-orange-500"
  },
  {
    icon: Clock,
    title: "Flexible Learning Options",
    description: "Choose from online, classroom, or hybrid modes that fit your schedule and learning style.",
    color: "text-snit-teal-600"
  },
  {
    icon: CheckCircle,
    title: "100% Placement Support",
    description: "Dedicated placement team with strong industry connections to help you land your dream job.",
    color: "text-snit-orange-500"
  },
  {
    icon: Award,
    title: "Globally Recognized Certifications",
    description: "Earn certificates that are valued by employers worldwide and boost your career prospects.",
    color: "text-snit-teal-600"
  },
  {
    icon: Globe,
    title: "International Opportunities",
    description: "Our training opens doors to opportunities in India and abroad, including Australia and USA.",
    color: "text-snit-orange-500"
  }
];

const stats = [
  { number: "500+", label: "Students Trained", color: "text-snit-teal-600" },
  { number: "95%", label: "Placement Rate", color: "text-snit-orange-500" },
  { number: "50+", label: "Hiring Partners", color: "text-snit-teal-600" },
  { number: "10+", label: "Years Experience", color: "text-snit-orange-500" }
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">SNIT Solutions?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another training institute. We're your career transformation partners with a proven track record of success.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-6`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Story Highlight */}
        <div className="gradient-bg rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Your Success Story Starts Here
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of professionals who have transformed their careers with SNIT Solutions. 
            From small towns to global opportunities, we make it possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-snit-teal-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors">
              View Success Stories
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-snit-teal-600 font-semibold px-8 py-3 rounded-lg transition-colors">
              Schedule Free Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
