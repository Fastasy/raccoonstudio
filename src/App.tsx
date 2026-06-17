import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import QuoteCalculator from './components/QuoteCalculator';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="bg-[#0d0d0d] min-h-screen text-[#F5F5F5]">
      <Header />
      <main>
        <Hero />
        <Services />
        <QuoteCalculator />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
