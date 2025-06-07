
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-bg opacity-90"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Best IT Training
            <span className="block text-snit-orange-300">Institute in Hyderabad</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Learn from industry experts. Online & classroom courses with 100% placement support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-snit-orange-500 hover:bg-snit-orange-600 text-white px-8 py-4 text-lg">
              View Courses
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-snit-teal-600 px-8 py-4 text-lg">
              Contact Us
            </Button>
          </div>

          {/* Key highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Placement Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg opacity-90">Expert Trainers</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-white opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
