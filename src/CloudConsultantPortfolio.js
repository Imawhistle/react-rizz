import React, { useState } from 'react';
import { Cloud, Server, Shield, Zap, MessageSquare, User, ChevronDown, Sun, Moon, Linkedin } from 'lucide-react';

const ServiceCard = ({ service, isDarkMode }) => (
    <div className={`p-6 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex items-center mb-4">
        <service.icon className={`h-8 w-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mr-3`} />
        <h3 className="text-xl font-semibold">{service.title}</h3>
      </div>
      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{service.description}</p>
    </div>
  );
const SocialLinks = ({ isDarkMode }) => (
  <div className="flex justify-center space-x-4 mt-4">
    <a 
      href="https://www.linkedin.com/in/luissrivera/" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`text-2xl ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}
      aria-label="LinkedIn Profile"
    >
      <Linkedin />
    </a>
    {/* Add other social media icons here if needed */}
  </div>
);

const ToggleButton = ({ isDarkMode, toggleDarkMode }) => (
    <button
      onClick={toggleDarkMode}
      className={`fixed top-4 right-4 p-2 rounded-full transition-colors duration-200 ${
        isDarkMode ? 'bg-gray-800 text-yellow-300' : 'bg-white text-gray-800'
      }`}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
  const Footer = ({ isDarkMode }) => (
    <footer className={`py-6 ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Luis S. Rivera. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="hover:underline mx-2">Privacy Policy</a>
          <a href="#" className="hover:underline mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );

const CloudConsultantPortfolio = () => {
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
    { 
      title: "AI Integration", 
      icon: Zap, 
      description: "Implement AI solutions to automate processes, gain insights from data, and enhance decision-making capabilities." 
    },
    { 
      title: "Cloud Security", 
      icon: Shield, 
      description: "Implement robust security measures to protect your cloud infrastructure and data from evolving threats." 
    },
    { 
      title: "Digital Transformation Consulting", 
      icon: Server, 
      description: "Strategic guidance to help businesses leverage cloud and AI technologies for comprehensive digital transformation." 
    },
  ];

  const projects = [
    {
      title: "Enterprise Cloud Migration",
      description: "Led the transition of 80% of client on-premise applications to cloud platforms, resulting in a 41% reduction in IT costs and enhanced scalability.",
      technologies: ["Azure", "Office 365", "SharePoint"]
    },
    {
      title: "AI-Powered Customer Service Solution",
      description: "Implemented an AI chatbot using Azure AI services, improving response times by 60% and customer satisfaction by 35%.",
      technologies: ["Azure AI", "Power Platform", "Teams"]
    },
    {
      title: "Cloud Security Enhancement",
      description: "Designed and implemented comprehensive cloud security strategies, reducing security incidents by 75% and ensuring compliance with industry standards.",
      technologies: ["Azure Security Center", "Azure Sentinel", "Azure AD"]
    },
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
          className="w-64 h-64 rounded-full mx-auto my-8 shadow-lg"
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
          As a seasoned IT Professional with a decade of experience, I specialize in crafting innovative on-premise and cloud solutions for businesses across diverse industries. My expertise spans cloud migration, system integration, and infrastructure management, with a particular focus on Microsoft Dynamics 365 implementations.
          My approach combines technical proficiency with creative problem-solving, ensuring that each solution is tailored to meet unique business challenges. Whether you're seeking to optimize your current infrastructure or transition to a cloud-based environment, I deliver strategic IT services that drive efficiency, enhance security, and facilitate growth.
          With a commitment to aligning technology with business objectives, I offer comprehensive support from initial consultation through to implementation and ongoing maintenance. Let's collaborate to transform your IT infrastructure into a powerful asset for your organization's success.
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
  
        {/* Rest of your content (projects, etc.) */}
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );

export default CloudConsultantPortfolio;