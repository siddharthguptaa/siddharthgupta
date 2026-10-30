import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Delivery from './components/Delivery.jsx';
import Problems from './components/Problems.jsx';
import Work from './components/Work.jsx';
import Services from './components/Services.jsx';
import Skills from './components/Skills.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Background from './components/Background.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';
import { useParallax } from './hooks.js';

const AUTO_PREFIX = 'I’d like to talk about: ';

export default function App() {
  useParallax();
  // The project filter lives here so the hero illustration can set it.
  const [filter, setFilter] = useState({ tech: 'all', emp: 'all' });
  // The contact message lives here so the services list can pre-fill it.
  const [message, setMessage] = useState('');

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const showTech = (tag) => {
    setFilter({ tech: tag, emp: 'all' });
    scrollTo('work');
  };

  const askAbout = (title) => {
    // Only overwrite the message if it is empty or was filled in by this button before.
    if (!message.trim() || message.startsWith(AUTO_PREFIX)) {
      setMessage(`${AUTO_PREFIX}${title.toLowerCase()}.`);
    }
    scrollTo('contact');
  };

  return (
    <>
      <Background />
      <Header />
      <main>
        <Hero onShowTech={showTech} />
        <About />
        <Delivery />
        <Problems />
        <Services onAsk={askAbout} />
        <Work filter={filter} setFilter={setFilter} />
        <Skills />
        <Testimonials />
        <Contact message={message} setMessage={setMessage} />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
