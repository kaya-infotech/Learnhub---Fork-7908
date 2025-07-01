import Hero from '../components/home/Hero';
import CourseCarousel from '../components/home/CourseCarousel';
import Categories from '../components/home/Categories';
import Instructors from '../components/home/Instructors';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <main>
      <Hero />
      <CourseCarousel />
      <Categories />
      <Instructors />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
};

export default Home;