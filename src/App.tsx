import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  Utensils, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter, 
  Star, 
  ChevronRight, 
  Menu as MenuIcon, 
  X,
  Heart,
  ArrowRight
} from 'lucide-react';
import { MENU_ITEMS, REVIEWS, GALLERY, MenuItem } from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Coffee className="text-secondary w-6 h-6" />
          </div>
          <span className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-primary' : 'text-primary'}`}>
            Grab a Cuppa
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-primary/80 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="btn-primary py-2 px-6 text-sm">
            Reserve Table
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-offwhite border-b border-primary/10 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-serif text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="btn-primary w-full">Reserve Table</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop" 
          alt="Cozy Cafe" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-offwhite"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm border border-accent/30">
            Welcome to Grab a Cuppa
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary leading-[1.1] mb-8">
            A Cozy Escape for <br />
            <span className="italic text-accent">Great Food</span> & Better Moments
          </h1>
          <p className="text-lg md:text-xl text-primary/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Enjoy flavorful dishes, warm ambiance, and unforgettable time with your favorite people.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#menu" className="btn-primary flex items-center gap-2 group">
              View Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-outline">
              Reserve a Table
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/40"
      >
        <div className="w-6 h-10 border-2 border-primary/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary/40 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
            More Than Just Food
          </h2>
          <p className="text-lg text-neutral/70 mb-8 leading-relaxed">
            Grab a Cuppa is a cozy little place in Uttara where food meets comfort. 
            Whether you're catching up with friends, enjoying a date, or just taking a break — 
            we create the perfect space for quality time.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {[
              { icon: <Coffee className="w-5 h-5" />, title: 'Cozy Ambiance', desc: 'Warm lighting and comfortable seating.' },
              { icon: <Utensils className="w-5 h-5" />, title: 'Flavorful Dishes', desc: 'Handcrafted recipes with fresh ingredients.' },
              { icon: <Star className="w-5 h-5" />, title: 'Premium Experience', desc: 'High-end service at affordable prices.' },
              { icon: <Heart className="w-5 h-5" />, title: 'Perfect for All', desc: 'Ideal for friends, couples, and families.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                  <p className="text-sm text-neutral/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop" 
              alt="Cafe Interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl hidden lg:block max-w-xs">
            <p className="font-serif italic text-xl text-primary mb-2">"A place where conversations flow and laughter stays longer."</p>
            <span className="text-accent font-bold text-sm">— Grab a Cuppa</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Popular' | 'Main Course' | 'Desserts' | 'Beverages'>('All');
  
  const categories = ['All', 'Popular', 'Main Course', 'Desserts', 'Beverages'];
  
  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory || (activeCategory === 'Popular' && item.isPopular));

  return (
    <section id="menu" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Signature Dishes</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-secondary shadow-lg' 
                    : 'bg-secondary/50 text-primary hover:bg-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="menu-card group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {item.isPopular && (
                    <div className="absolute top-4 left-4 bg-accent text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      Most Loved
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-primary p-4 rounded-full shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Utensils className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif text-primary">{item.name}</h3>
                    <span className="text-accent font-bold">{item.price}</span>
                  </div>
                  <p className="text-neutral/60 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <button className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1 hover:text-accent transition-colors">
                    Order Now <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-16">
          <button className="btn-outline">Explore Full Menu</button>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-primary text-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">The Vibe</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              A place where conversations flow and memories are made.
            </h2>
            <p className="text-secondary/70 text-lg leading-relaxed mb-10">
              We believe every bite feels special when enjoyed in the right space. 
              Our aesthetic interior and warm lighting create an atmosphere that 
              invites you to stay just a little bit longer.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-primary overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-accent">
                  <Star className="w-4 h-4 fill-accent" />
                  <Star className="w-4 h-4 fill-accent" />
                  <Star className="w-4 h-4 fill-accent" />
                  <Star className="w-4 h-4 fill-accent" />
                  <Star className="w-4 h-4 fill-accent" />
                  <span className="font-bold text-secondary ml-1">3.9/5</span>
                </div>
                <p className="text-secondary/50">Loved by 1000+ happy guests</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {GALLERY.slice(0, 4).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl overflow-hidden shadow-2xl ${i % 2 === 0 ? 'translate-y-8' : ''}`}
              >
                <img src={img} alt="Gallery" className="w-full h-full object-cover aspect-square" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-accent fill-accent' : 'text-white/20'}`} />
                ))}
              </div>
              <p className="text-secondary/80 italic mb-6 leading-relaxed">"{review.text}"</p>
              <h4 className="font-bold text-accent">— {review.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">
          <div className="p-10 md:p-16">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
            <h2 className="text-4xl font-serif text-primary mb-10">Visit Our Cozy Space</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Our Location</h4>
                  <p className="text-neutral/60">House 29, Road 2, Sector 3, Uttara, Dhaka, Bangladesh, 1230</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Phone Number</h4>
                  <p className="text-neutral/60">01743-316908</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Opening Hours</h4>
                  <p className="text-neutral/60">12:00 PM – 10:00 PM (Everyday)</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <button className="btn-primary">Reserve Table</button>
              <button className="btn-outline">Order Now</button>
            </div>
          </div>

          <div className="h-[400px] lg:h-auto bg-secondary/50 relative">
            {/* Placeholder for Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.437345638206!2d90.3970621!3d23.8740929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c439816659f1%3A0x67397759b48c6686!2sGrab%20A%20Cuppa!5e0!3m2!1sen!2sbd!4v1711850000000!5m2!1sen!2sbd" 
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-neutral text-secondary pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Coffee className="text-secondary w-6 h-6" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">Grab a Cuppa</span>
            </a>
            <p className="text-secondary/50 max-w-sm leading-relaxed mb-8">
              A cosy little place for quality time. We create the perfect space for 
              flavorful food and unforgettable moments with your favorite people.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4 text-secondary/50">
              <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-accent transition-colors">Our Menu</a></li>
              <li><a href="#experience" className="hover:text-accent transition-colors">Experience</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Contact Info</h4>
            <ul className="space-y-4 text-secondary/50">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>House 29, Road 2, Sector 3, Uttara, Dhaka</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>01743-316908</span>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <span>12:00 PM – 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center text-secondary/30 text-sm">
          <p>© {new Date().getFullYear()} Grab a Cuppa. All rights reserved. A cosy little place for quality time.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Experience />
        <Contact />
        
        {/* Final CTA */}
        <section className="section-padding bg-accent/10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">Ready to Spend Quality Time?</h2>
            <p className="text-lg text-neutral/70 mb-10">
              Join us for a flavorful experience in the heart of Uttara. 
              Book your table now or order your favorite dishes online.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary">Reserve Your Table</button>
              <button className="btn-outline">Order Now</button>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
