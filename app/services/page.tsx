import { Truck, ShoppingCart, TrendingUp, Briefcase, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Agricultural Sourcing',
      description: 'We connect businesses with high-quality agricultural producers and farmers, ensuring reliable and consistent supply chains.',
      icon: Globe,
      color: 'emerald-700'
    },
    {
      title: 'Trading & Supply',
      description: 'Professional trading and supply chain management for global markets, handling logistics, documentation, and quality control.',
      icon: ShoppingCart,
      color: 'emerald-800'
    },
    {
      title: 'Product Development',
      description: 'Creating value-added products from raw agricultural resources, from initial concept to market-ready product.',
      icon: TrendingUp,
      color: 'emerald-900'
    },
    {
      title: 'Business Support',
      description: 'Consultancy and support for new agricultural ventures and startups, including strategic planning and market analysis.',
      icon: Briefcase,
      color: 'emerald-950'
    },
    {
      title: 'Farm-to-Market',
      description: 'Efficient logistics solutions connecting farms directly to buyers, reducing waste and improving profit margins for producers.',
      icon: Truck,
      color: 'emerald-600'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-stone-100 py-20">
        <div className="section-container">
          <h1 className="heading-1 mb-6">Our Services</h1>
          <p className="body-text max-w-2xl">
            We provide a comprehensive range of services designed to support and grow agricultural businesses through every stage of their lifecycle.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-12 md:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card group hover:bg-emerald-50 transition-colors border-emerald-50">
                <div className={`bg-${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg shadow-${service.color}/20 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="mt-auto pt-4 border-t border-stone-100 group-hover:border-emerald-100">
                  <Link href="/contact" className="text-emerald-700 font-bold inline-flex items-center text-sm">
                    Inquire for Service <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Focus Section */}
      <section className="bg-emerald-900 text-white py-24">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Expert Support for Every Step</h2>
            <p className="text-emerald-100 text-lg leading-relaxed mb-8">
              At Bukidharaya Trading Ltd Services, we understand that agriculture is a complex business. Our approach is designed to reduce complexity and increase value for all stakeholders.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-3 w-3" />
                </div>
                <span>Strategic business planning and market analysis</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-3 w-3" />
                </div>
                <span>Efficient supply chain and logistics management</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-3 w-3" />
                </div>
                <span>Value-added product development and branding</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-3 w-3" />
                </div>
                <span>Global market access and professional trading support</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop" alt="Supply chain" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl mt-8">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?q=80&w=600&auto=format&fit=crop" alt="Market solutions" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-container">
        <div className="bg-stone-50 rounded-3xl p-12 md:p-20 text-center border border-stone-200">
          <h2 className="heading-2 mb-6">Partner with Agricultural Experts</h2>
          <p className="body-text max-w-2xl mx-auto mb-10">
            Whether you&apos;re looking for professional trading, reliable sourcing, or business support, we&apos;re here to help you grow.
          </p>
          <Link href="/contact" className="btn-primary px-12 py-4">
            Get Started with a Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
