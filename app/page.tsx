import Link from 'next/link';
import { ArrowRight, Leaf, Shield, TrendingUp, Globe, Briefcase } from 'lucide-react';

export default function Home() {
  const featuredProducts = [
    { name: 'Coconut', description: 'Premium quality whole coconuts for various industrial and retail needs.', icon: Leaf },
    { name: 'Coconut Copra', description: 'High-grade dried coconut meat for oil extraction and food processing.', icon: TrendingUp },
    { name: 'Coconut Husks', description: 'Sustainable raw materials for fiber, gardening, and industrial applications.', icon: Globe },
    { name: 'Crab Farming', description: 'Managed crab production with a focus on quality and sustainable yields.', icon: Shield },
    { name: 'Agri Products', description: 'A diverse range of other high-quality agricultural commodities.', icon: Briefcase },
  ];

  const services = [
    { title: 'Sourcing', description: 'Direct connection to reliable agricultural producers and farmers.' },
    { title: 'Trading', description: 'Professional trading and supply chain management for global markets.' },
    { title: 'Product Development', description: 'Creating value-added products from raw agricultural resources.' },
    { title: 'Business Support', description: 'Consultancy and support for new agricultural ventures and startups.' },
    { title: 'Farm-to-Market', description: 'Efficient logistics solutions connecting farms directly to buyers.' },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative bg-stone-900 text-white overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 to-stone-900 mix-blend-multiply" />
          <img 
            src="https://images.unsplash.com/photo-1590779033100-9f60702a053b?q=80&w=2000&auto=format&fit=crop" 
            alt="Agricultural field" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative section-container">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">
              Bukidharaya Trading Ltd Services
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 mb-10 leading-relaxed">
              Building businesses through agricultural trading, product development, and supply solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary">
                View Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/contact" className="btn-secondary !bg-transparent !text-white !border-white hover:!bg-white hover:!text-stone-900">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Company Introduction Section */}
      <section className="bg-white">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-4 block">About Our Company</span>
            <h2 className="heading-2">Pioneering Excellence in Agricultural Trading</h2>
            <p className="body-text mb-6">
              Bukidharaya Trading Ltd Services is more than just a trading company. We are a dedicated partner in agricultural business development, focusing on creating sustainable value chains from the farm to the global market.
            </p>
            <p className="body-text">
              Our expertise lies in identifying potential in agricultural products and transforming them into successful business ventures. We support local industries while meeting the high standards of international trading.
            </p>
            <div className="mt-10">
              <Link href="/about" className="text-emerald-700 font-bold inline-flex items-center hover:translate-x-1 transition-transform">
                Learn more about our history <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop" 
                alt="Agriculture growth" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-emerald-700 text-white p-8 rounded-2xl hidden md:block">
              <p className="text-4xl font-bold mb-1">10+</p>
              <p className="text-sm font-medium opacity-90">Years of Agricultural Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Products Section */}
      <section className="bg-stone-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-2">Featured Agricultural Products</h2>
            <p className="body-text max-w-2xl mx-auto">
              We specialize in high-demand agricultural commodities with a focus on quality, sustainability, and consistent supply.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.name} className="card group">
                <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-700 transition-colors">
                  <product.icon className="h-8 w-8 text-emerald-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{product.name}</h3>
                <p className="text-stone-600 mb-6">{product.description}</p>
                <Link href="/products" className="text-emerald-700 font-semibold inline-flex items-center text-sm group-hover:underline">
                  Product details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services Preview Section */}
      <section className="bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="heading-2">Our Strategic Services</h2>
              <p className="body-text mb-8">
                Comprehensive solutions designed to support agricultural businesses and optimize supply chains.
              </p>
              <Link href="/services" className="btn-primary">
                All Services
              </Link>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service) => (
                <div key={service.title} className="p-6 border border-stone-100 rounded-xl hover:bg-stone-50 transition-colors">
                  <h3 className="font-bold text-stone-900 mb-2">{service.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call to Action Section */}
      <section className="section-container pt-0">
        <div className="bg-emerald-800 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-700 rounded-full -mr-32 -mt-32 opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-900 rounded-full -ml-32 -mb-32 opacity-50" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Ready to Grow Your Agricultural Business?
            </h2>
            <p className="text-emerald-100 text-lg mb-12 leading-relaxed">
              Partner with Bukidharaya Trading Ltd Services for reliable supply, professional trading, and innovative product development.
            </p>
            <Link href="/contact" className="bg-white text-emerald-800 px-10 py-4 rounded-full font-bold text-lg hover:bg-stone-100 transition-all shadow-lg hover:shadow-xl active:scale-95 inline-block">
              Get in Touch Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
