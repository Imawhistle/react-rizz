import React, { useState } from 'react';
import { Cloud, Server, Shield, Zap, MessageSquare, User, ChevronDown, Sun, Moon, Linkedin } from 'lucide-react';

// Define your components here if they're not in separate files
const ToggleButton = ({ isDarkMode, toggleDarkMode }) => (
  <button onClick={toggleDarkMode}>
    {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
  </button>
);

const SocialLinks = ({ isDarkMode }) => (
  <div>
    <a href="https://linkedin.com">LinkedIn</a>
    {/* Add more social links here */}
  </div>
);


const ServiceCard = ({ service, isDarkMode }) => (
  <div className={`service-card ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
    <h3>{service.title}</h3>
    <p>{service.description}</p>
  </div>
);


const Footer = ({ isDarkMode }) => (
  <footer className={`footer ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
    <p>© 2024 Cloud Consultant Portfolio. All rights reserved.</p>
  </footer>
);


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const services = [
    { 
      title: "Cloud Migration & Optimization", 
      icon: Cloud, 
      description: "Seamless transition of on-premise systems to cloud platforms, optimizing performance and reducing costs; on time, and on budget." 
    },
    // Add other services here
  ];

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-200 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <ToggleButton isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex-grow max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">Luis S. Rivera</h1>
        <p className="text-xl mb-4">Cloud Consultant & AI Solutions Expert</p>

        <img 
  src="https://i.imgur.com/C5Q9Gy9.jpeg" 
  alt="Luis S. Rivera, Cloud Consultant" 
  className="w-64 h-64 rounded-full mx-auto my-8 shadow-lg object-cover" 
/>


        <SocialLinks isDarkMode={isDarkMode} />
        
        {/* CTA section */}
        <div className="mt-6 mb-8 flex flex-wrap gap-4">
          <a 
            href="mailto:your.myi.t.guy@gmail.com" 
            className={`inline-block px-6 py-3 rounded-lg ${
              isDarkMode 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            } transition-colors duration-200`}
          >
            Contact Me
          </a>
        </div>
        
        <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {/* Your bio text here */}
        </p>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} isDarkMode={isDarkMode} />
            ))}
          </div>
        </section>
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
