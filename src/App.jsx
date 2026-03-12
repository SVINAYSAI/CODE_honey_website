import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { StatsBanner } from './components/sections/StatsBanner';
import { ProductShowcase } from './components/sections/ProductShowcase';
import { HoneyFeature } from './components/sections/HoneyFeature';
import { EnergyChart } from './components/sections/EnergyChart';
import { IngredientsGrid } from './components/sections/IngredientsGrid';
import { NeverUse } from './components/sections/NeverUse';
import { ComparisonTable } from './components/sections/ComparisonTable';
import { HowToUse } from './components/sections/HowToUse';
import { ExpertEndorsement } from './components/sections/ExpertEndorsement';
import { AmbassadorCarousel } from './components/sections/AmbassadorCarousel';
import { WhenToTake } from './components/sections/WhenToTake';
import { EmailCapture } from './components/sections/EmailCapture';
import { ChatbotButton } from './components/chatbot/ChatbotButton';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-deep">
      <Navbar cartCount={cartCount} />
      
      <main>
        <Hero />
        <StatsBanner />
        <ProductShowcase onAddToCart={handleAddToCart} />
        <HoneyFeature />
        <EnergyChart />
        <IngredientsGrid />
        <NeverUse />
        <ComparisonTable />
        <HowToUse />
        <ExpertEndorsement />
        <AmbassadorCarousel />
        <WhenToTake />
        <EmailCapture />
      </main>
      
      <Footer />
      <ChatbotButton />
    </div>
  );
}

export default App;
