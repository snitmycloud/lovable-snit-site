
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Courses />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
