
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Morishetty",
    role: "Cloud Engineer",
    company: "Tech Solutions Australia",
    location: "Australia",
    content: "The training helped me secure a job in Australia! The practical approach and industry connections made all the difference. SNIT's placement support was exceptional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Dinesh Kumar",
    role: "DevOps Engineer",
    company: "Global Tech Corp",
    location: "Nalgonda → Hyderabad",
    content: "From a small town to a cloud engineer – thanks to SNIT! The AWS DevOps course transformed my career completely. Now I'm working with international clients.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Sneha Reddy",
    role: "Digital Marketing Specialist",
    company: "Marketing Pro Agency",
    location: "Hyderabad",
    content: "Practical learning with excellent trainers. Highly recommended! The digital marketing course covered everything from SEO to social media analytics.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Arun Reddy",
    role: "Network Administrator",
    company: "Enterprise Networks Ltd",
    location: "Hyderabad",
    content: "The CCNA training was comprehensive and practical. Got placed within 2 months of course completion. The hands-on labs were incredibly helpful.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Priya Sharma",
    role: "Cybersecurity Analyst",
    company: "SecureIT Solutions",
    location: "Bangalore",
    content: "SNIT's Security+ training opened doors to cybersecurity career. The practical scenarios and expert guidance helped me crack interviews confidently.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Mohammed Ali",
    role: "Data Engineer",
    company: "DataTech Innovations",
    location: "USA",
    content: "Databricks training at SNIT was exceptional. Now working as a Data Engineer in the USA. The real-time projects prepared me for actual work scenarios.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students who have transformed their careers and achieved their dreams with SNIT Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
              <CardContent className="p-6">
                {/* Quote icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-snit-teal-600 opacity-50" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-snit-teal-600 font-medium">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                    <p className="text-xs text-snit-orange-500 font-medium">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto border-l-4 border-snit-teal-600">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our community of successful professionals and start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-snit-teal-600 hover:bg-snit-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Start Your Journey
              </button>
              <button className="border-2 border-snit-orange-500 text-snit-orange-500 hover:bg-snit-orange-500 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Talk to Alumni
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
