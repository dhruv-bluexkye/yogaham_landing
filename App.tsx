
import React, { useState, useEffect, useRef } from 'react';
import { SERVICES, EXPERTS, CLASSES, PLANS } from './constants';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Dark mode handling
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    // Trigger hero animation on mount
    setLoaded(true);

    // Scroll Animation Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Smooth scroll handler for nav links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 px-6 py-4 transition-transform duration-700 ${loaded ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md px-6 py-3 rounded-full shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md">
          <a href="#" className="h-4">
            <img 
              src={isDarkMode ? "/assets/logo-light.svg" : "/assets/logo.svg"} 
              alt="Yogaham" 
              className="h-full w-auto"
            />
          </a>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-text-muted-light dark:text-text-muted-dark">
            <a className="hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, 'home')} href="#home">Home</a>
            <a className="hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, 'about')} href="#about">About Us</a>
            <a className="hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, 'classes')} href="#classes">Classes</a>
            <a className="hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, 'services')} href="#services">Services</a>
            <a className="hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, 'plans')} href="#plans">Plans</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-2 text-sm font-medium hover:text-primary transition-colors group">
              <span>Contact</span>
              <span className="bg-primary text-white rounded-full p-1 w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-icons-outlined text-xs">north_east</span>
              </span>
            </button>
            <button 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center" 
              onClick={toggleDarkMode}
            >
              <span className="material-icons-outlined dark:hidden">dark_mode</span>
              <span className="material-icons-outlined hidden dark:block">light_mode</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 z-10 space-y-8">
            <h1 className={`text-6xl md:text-7xl font-light leading-[1.1] tracking-tight text-text-main-light dark:text-text-main-dark transform transition-all duration-1000 ease-out-expo ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              Find Peace <br />
              Through <span className="font-normal italic text-primary font-display inline-block hover:scale-105 transition-transform cursor-default">Mindful</span> <br />
              Movement
            </h1>
            <p className={`text-lg text-text-muted-light dark:text-text-muted-dark max-w-md font-light leading-relaxed transform transition-all duration-1000 delay-200 ease-out-expo ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              Embrace a holistic approach to well-being at Yogaham, where mind, body, and soul harmonize through breath and movement.
            </p>
            <div className={`flex items-center gap-4 transform transition-all duration-1000 delay-300 ease-out-expo ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2 group hover:shadow-lg hover:-translate-y-0.5">
                Start Journey
                <span className="material-icons-outlined group-hover:translate-x-1 transition-transform text-sm">arrow_forward</span>
              </button>
              <button className="px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 group">
                Learn More
                <span className="material-icons-outlined text-sm group-hover:scale-110 transition-transform">play_arrow</span>
              </button>
            </div>
          </div>
          
          <div className={`lg:col-span-5 relative flex justify-center z-10 transform transition-all duration-1000 delay-150 ease-out-expo ${loaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}>
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-75 animate-pulse"></div>
            <img 
              alt="Yoga Silhouette" 
              className="relative z-10 w-full max-w-md h-[500px] object-cover rounded-t-[10rem] rounded-b-[3rem] shadow-2xl dark:shadow-none grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjiT_wG70YOAHqWV1bXhFlGc1ucC2Q4Dx351iWZdbXZav-1hOCTCYFU3E3qjkuraLrXXkbzh2yDXgsr76iizffulFd3kyx_UBPA4jhXgKF1gL0XZaxuONj1qYymMz9KKv5c464f6aC-PgW7vF2X_J8CX1j4GNYdweqb7zsIvmRrNEinEldivVG6bPtXUiiKOTYbob_qm7s05TxOBy6NF2APYJXRB81rwPzQB6EeuyruW1wK8Y4NONGsvvPA3wkxxsDNrY9wrevRGQ" 
            />
          </div>

          <div className={`lg:col-span-2 hidden lg:flex flex-col gap-6 justify-center items-end transform transition-all duration-1000 delay-500 ease-out-expo ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBvh-gFjkVcB5OKvk1Y2pV4eVqLrB_vkv1IrI5YSJla_HSwIbt90-BsOaM13DARdgo8nE0zJJr7xNYht7ny-RhOrl7uF4XRUHaajzEknaKjTYWdBShNgVcktpqHKoATy4NBaPwSUtCFjh9JyE8art95WeeFjk1IVKd4BXkAs7URmIdGo4SsqalNbqlj3KV0s-ZNuKOkWpgMlMGBHaQd1XKW0MA0yW81MbVJGsgCJSNc5yi15z9ZDAVSG5lahkAr5vQsBOJnHYARjw",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBVLr7cdD13j8tVIc9I4_6-V1w7mO0ihRcroYTM-ABh2_0V-mMuO1d5OaiYAxeRahEljf1Ie0x0LpgUfZ-o8CWbubBrs-D16cyf6oUM1b6tfxrjF6H4u0Zr8fT5yV5YQm6c82WiHbLNCOiioG_fwKV8IhR1uHAenz0bVI09s5mH-EyTWv48xl_xIQha1y_porM9jxKXPmo0vxnrMnnF4lwFSDZR5-_wNniBde0qKbtf-iiLgD5OJ-SmN_1uybdFDSyvj0VnUgEJbWY",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBEk2xMK0Np66X4xPyDdl0_6aoIdjEfDXHNO7qgWm4rYb31x5kFZSF0tEitw6y8-1b4Jp_JIcYlKjIUx21J6PrjFTTFU8fT12jZ6fBVr4SvowNy-YnsVBIQdhQzlJE2nFYC7kLX1KDA7laTkoNtZ-9_XYrB6tV1UQ73HLDTWMRGNW9EOZgs182j0U8GB4voIhqR5AGIBzSzLjx2DJjhOtTDLBmpll8YWfniGfg3e-5xDu2JWzAWv_6hB6u6h2gCA9hM4ySqHPAYPvM"
            ].map((img, idx) => (
              <div key={idx} className={`relative group cursor-pointer ${idx === 1 ? 'translate-x-4' : ''} hover:scale-110 transition-transform duration-300`}>
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-lg">
                  <img alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" src={img} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-full group-hover:bg-black/0 transition-all">
                  <span className="material-icons-outlined text-white text-xl">play_circle</span>
                </div>
              </div>
            ))}
            <div className="mt-8 text-right">
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider mb-1">Active Members</p>
              <div className="text-3xl font-bold flex items-center justify-end gap-1">
                12k <span className="text-primary text-lg align-top">+</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white dark:bg-surface-dark transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative reveal">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl transform -rotate-2 transition-transform duration-500 hover:rotate-0"></div>
              <img 
                alt="Yoga Community" 
                className="relative rounded-2xl shadow-xl w-full object-cover h-[500px] grayscale-[10%] hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy0zQaoiaCnfKttIOMOftNPRUw5q4_VJwNVZNXuAk1K-tnrb7YuE_hjZgJEtcYTFB4Rm7SO6MTOvLKmMU1J7DPHAd8lRg70zGtnecvnZ1pxHym5UQgcSKfpOzzeTkJ65u0kFbziOx5t4Q_eLXH3y_xB12idBi6W1KuVKDUKJmAfmFxGhAfne-2-WGNuPcnw1lZUuTpqWc5sN6mrH1PQqf6a7nH5cvq9egzdQzmv7DVBZu5ELdbzK9_1p9UrYe4mOBH_MaB7BiTqcM" 
              />
            </div>
            <div className="space-y-6 reveal stagger-1">
              <h2 className="text-4xl md:text-5xl font-light text-text-main-light dark:text-text-main-dark">
                Your Yoga <br />
                <span className="font-serif italic text-primary">Community</span> Awaits
              </h2>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                Yogaham is a holistic yoga platform designed to help you connect with your true self. Our certified instructors and diverse class offerings are perfect for beginners and seasoned practitioners alike. We believe in the power of community to uplift and inspire.
              </p>
              <button className="group flex items-center gap-3 text-text-main-light dark:text-text-main-dark font-medium mt-4">
                <span className="bg-gray-100 dark:bg-gray-800 group-hover:bg-primary group-hover:text-white transition-colors p-3 rounded-full duration-300">
                  <span className="material-icons-outlined text-sm">north_east</span>
                </span>
                <span>Read Our Story</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 relative overflow-hidden bg-background-light dark:bg-background-dark">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
          <span className="text-[10vw] md:text-[15vw] font-bold text-gray-100 dark:text-gray-800/20 opacity-60 reveal">YOGAHAM</span>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <div 
                key={service.id} 
                className={`reveal stagger-${(index % 4) + 1} bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group ${service.offset ? 'md:translate-y-12' : ''}`}
              >
                <h3 className="text-2xl font-medium mb-4 group-hover:text-primary transition-colors" dangerouslySetInnerHTML={{ __html: service.title.replace(' ', '<br/>') }} />
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="w-12 h-1 bg-primary rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-24 px-6 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-light mb-4">Meet Our Experts</h2>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-lg mx-auto">
              Our dedicated team of expert instructors are passionate about guiding you on your yoga journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EXPERTS.map((expert, index) => (
              <div key={expert.id} className={`group cursor-pointer reveal stagger-${index + 1}`}>
                <div className="overflow-hidden rounded-2xl mb-6 bg-gray-100 dark:bg-gray-800 relative">
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors z-10 duration-500"></div>
                  <img 
                    alt={expert.name} 
                    className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-700" 
                    src={expert.image} 
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-medium group-hover:text-primary transition-colors">{expert.name}</h4>
                  <p className="text-sm text-primary uppercase tracking-wide mt-1">{expert.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-24 px-6 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="lg:sticky lg:top-32 h-fit reveal">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Classes Tailored for <br />Every Journey</h2>
            <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-8">
              Embark on a journey of self-discovery through our diverse range of yoga styles. Whether you're seeking a vigorous workout, a moment of deep relaxation, or a path to inner peace, we offer a class to suit every need.
            </p>
            <button className="flex items-center gap-3 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:scale-105">
              See All Classes
              <span className="material-icons-outlined text-sm">north_east</span>
            </button>
          </div>
          <div className="space-y-4">
            {CLASSES.map((cls, index) => (
              <div key={cls.id} className={`reveal stagger-${index + 1} bg-white dark:bg-surface-dark p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start hover:shadow-lg transition-all duration-300 hover:-translate-x-2`}>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-full shrink-0">
                  <span className="material-icons-outlined text-primary text-2xl">{cls.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">{cls.title}</h3>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-4">
                    {cls.description}
                  </p>
                  <button className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 dark:border-gray-700 pb-1 hover:border-primary transition-colors">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-24 px-6 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16 reveal">Flexible Plans for Every Lifestyle</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLANS.map((plan, index) => (
              <div 
                key={plan.id} 
                className={`reveal stagger-${index + 1} p-8 rounded-2xl border transition-all duration-300 group relative ${
                  plan.isPopular 
                  ? 'bg-background-light dark:bg-background-dark border-primary shadow-lg transform md:-translate-y-4 hover:shadow-xl hover:scale-105' 
                  : 'bg-background-light dark:bg-background-dark border-transparent hover:border-primary hover:shadow-lg hover:-translate-y-2'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase shadow-sm">Most Popular</div>
                )}
                <div className="w-12 h-12 rounded-full bg-white dark:bg-surface-dark flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-icons-outlined text-primary">{plan.icon}</span>
                </div>
                <h3 className="text-lg font-medium mb-4">{plan.name}</h3>
                <div className="text-4xl font-light mb-6">
                  {plan.price}<span className="text-base text-text-muted-light dark:text-text-muted-dark">{plan.period}</span>
                </div>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-8 h-16">
                  {plan.description}
                </p>
                <button className={`w-full py-3 rounded-full text-sm font-medium flex justify-between px-4 items-center transition-all shadow-sm ${
                  plan.isPopular 
                  ? 'bg-primary text-white hover:bg-primary-dark hover:shadow-md' 
                  : 'bg-white dark:bg-surface-dark group-hover:bg-primary group-hover:text-white'
                }`}>
                  Join Now
                  <span className={`material-icons-outlined text-xs rounded-full p-1 transition-colors ${
                    plan.isPopular 
                    ? 'bg-white text-primary' 
                    : 'bg-black text-white dark:bg-white dark:text-black group-hover:bg-white group-hover:text-primary'
                  }`}>north_east</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 relative bg-background-light dark:bg-background-dark">
        <div className="max-w-4xl mx-auto text-center reveal">
          <span className="material-icons-outlined text-6xl text-gray-200 dark:text-gray-800 rotate-180 absolute left-10 md:left-20 top-20 animate-pulse">format_quote</span>
          <h2 className="text-3xl font-light mb-12 relative z-10">What Our Members Are Saying</h2>
          <div className="flex justify-center gap-1 mb-6 text-primary">
            {[...Array(5)].map((_, i) => <span key={i} className="material-icons text-sm">star</span>)}
          </div>
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-10 text-text-main-light dark:text-text-main-dark">
            "Yogaham has become an essential part of my morning routine. The classes have not only strengthened my body but also calmed my mind. I now feel more present and grounded throughout my day."
          </p>
          <div className="flex flex-col items-center">
            <img 
              alt="User" 
              className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-primary p-1 hover:scale-110 transition-transform" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLa9Gp5IWuDvHO5kUB4Jy_ZiOXKD5PAWGqcl0_7gWM1sJm0k5ym7I0wzPRl4_XexMj-1odbzGFfWkKXNt9cMtaEGSlgsBV_ZC-wgPY7gBhcxE3ciEeU3D37VJjxIvg6rQgTNJS9ktHmtu4Zeam473d1fTKSLQQycI1YQQv5Ay9Gyrnz0ZiR0H_b_bv_H0PHUqhupIv9f9wE4mQw0xsd3Wx-VJzyhcDnxB1r8GiT5rFo15n5gOTuyyyb1Bv_EDB8u9iK6Hh_ZCwkM8" 
            />
            <div className="font-medium">Sofia Rossi</div>
            <div className="text-xs text-text-muted-light dark:text-text-muted-dark">New York, USA</div>
          </div>
          <span className="material-icons-outlined text-6xl text-gray-200 dark:text-gray-800 absolute right-10 md:right-20 bottom-20">format_quote</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-surface-dark pt-20 pb-10 px-6 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <a href="#" className="h-4 inline-block">
                <img 
                  src={isDarkMode ? "/assets/logo-light.svg" : "/assets/logo.svg"} 
                  alt="Yogaham" 
                  className="h-full w-auto"
                />
              </a>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                I was looking for a yoga studio that would cater to my busy schedule and varied needs. Yogaham was the perfect fit.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-6">Page</h4>
              <ul className="space-y-4 text-sm text-text-muted-light dark:text-text-muted-dark">
                <li><a className="hover:text-primary transition-colors" href="#">About</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Classes</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-6">Follow us</h4>
              <ul className="space-y-4 text-sm text-text-muted-light dark:text-text-muted-dark">
                <li><a className="hover:text-primary transition-colors" href="#">Instagram</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Facebook</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Twitter</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-6">Subscribe to news</h4>
              <form className="relative" onSubmit={(e) => e.preventDefault()}>
                <input 
                  className="w-full bg-background-light dark:bg-background-dark border-none rounded-full py-3 pl-4 pr-12 text-sm focus:ring-1 focus:ring-primary outline-none transition-shadow" 
                  placeholder="Enter your email" 
                  type="email" 
                />
                <button className="absolute right-1 top-1 bottom-1 bg-black dark:bg-white text-white dark:text-black w-8 h-8 rounded-full flex items-center justify-center hover:scale-105 transition-transform" type="submit">
                  <span className="material-icons-outlined text-sm">arrow_forward</span>
                </button>
              </form>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted-light dark:text-text-muted-dark">
            <p>© 2024 Yogaham. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="hover:text-primary" href="#">Privacy Policy</a>
              <a className="hover:text-primary" href="#">Terms of Service</a>
            </div>
          </div>
          <div className="w-full text-center mt-12 opacity-10 dark:opacity-5 overflow-hidden select-none pointer-events-none">
            <span className="text-[12vw] font-bold leading-none tracking-tighter text-gray-900 dark:text-gray-100 reveal">YOGAHAM</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
