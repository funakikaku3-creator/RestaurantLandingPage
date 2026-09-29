import Header from './components/Header';
import Hero from './components/Hero';
import Appeals from './components/Appeals';
import MenuSection from './components/MenuSection';
import Scenes from './components/Scenes';
import CourseSection from './components/CourseSection';
import StorySection from './components/StorySection';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import StickyReservation from './components/StickyReservation';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Appeals />
        <MenuSection />
        <Scenes />
        <CourseSection />
        <StorySection />
        <InfoSection />
      </main>
      <Footer />
      <StickyReservation />
    </div>
  );
}
