
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const locations = [
  {
    name: "Dilsukhnagar",
    address: "2nd Floor, Flat 202, Vaishnavi Nest, Indira Nagar Rd, Hyderabad",
    landmark: "Near Dilsukhnagar Metro Station",
    timings: "Mon-Sat: 9:00 AM - 7:00 PM"
  },
  {
    name: "Ameerpet",
    address: "Flat 202A, Nagasai Nivas, Prime Hospital Lane, Hyderabad",
    landmark: "Near Ameerpet Metro Station",
    timings: "Mon-Sat: 9:00 AM - 7:00 PM"
  },
  {
    name: "Madhapur",
    address: "1-90-20/A/1, Above Lenskart, Arunodaya Colony, Hyderabad",
    landmark: "HITEC City Area",
    timings: "Mon-Sat: 9:00 AM - 7:00 PM"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your career transformation? Reach out to us and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-4">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="border-gray-300" />
                <Input placeholder="Your Email" type="email" className="border-gray-300" />
              </div>
              <Input placeholder="Phone Number" className="border-gray-300" />
              <Input placeholder="Course of Interest" className="border-gray-300" />
              <Textarea 
                placeholder="Your Message" 
                className="border-gray-300 min-h-[120px]"
              />
              <Button className="w-full bg-snit-teal-600 hover:bg-snit-teal-700 text-white py-3">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="border-none shadow-lg gradient-bg text-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <div>
                      <p className="font-semibold">Call Us</p>
                      <p className="opacity-90">+91-9640005999</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="opacity-90">hr@snitsolutions.in</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5" />
                    <div>
                      <p className="font-semibold">Office Hours</p>
                      <p className="opacity-90">Mon-Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Locations */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Our Locations</h3>
              {locations.map((location, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-snit-teal-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-snit-teal-600 text-lg">{location.name}</h4>
                        <p className="text-gray-700 text-sm mb-1">{location.address}</p>
                        <p className="text-snit-orange-500 text-sm font-medium mb-1">{location.landmark}</p>
                        <p className="text-gray-600 text-sm">{location.timings}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="border-none shadow-lg bg-gray-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Stay Updated with SNIT Solutions
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for course updates, industry insights, placement opportunities, and free resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email" 
                  type="email" 
                  className="flex-1 border-gray-300" 
                />
                <Button className="bg-snit-orange-500 hover:bg-snit-orange-600 text-white px-8">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
