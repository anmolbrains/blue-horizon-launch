
import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: '#002060' }}
    >
      {/* Background pattern for subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      
      {/* Main content */}
      <div className={`text-center z-10 transform transition-all duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {/* Logo */}
        <div className={`mb-12 transform transition-all duration-1000 delay-300 ease-out ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          <img 
            src="/lovable-uploads/56854aa7-e455-45b2-943d-286e1ad8d249.png" 
            alt="Logo" 
            className="mx-auto w-64 h-64 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Coming soon text */}
        <div className={`transform transition-all duration-1000 delay-500 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wide">
            We are coming soon
          </h1>
          
          {/* Subtle subtitle */}
          <p className="text-xl md:text-2xl text-white/80 font-light tracking-wider">
            Something amazing is on the way
          </p>
        </div>

        {/* Animated dots */}
        <div className={`mt-16 flex justify-center space-x-2 transform transition-all duration-1000 delay-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-white/60 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Index;
